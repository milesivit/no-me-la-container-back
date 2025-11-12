const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { Usuario } = require('../models');
const { sendEmail } = require('../utils/mailer');

//mapa temporal para tokens de recuperación
const resetTokens = new Map();

//este es el email q te mandan para recuperar la contra
const resetEmailTemplate = ({ nombre, resetUrl }) => {
    return `
    <div style="max-width: 520px; margin:0; padding: 20px;">
        <h2>Recupera tu contraseña</h2>
        <p>Hola ${nombre || ''}, recibimos tu solicitud para restablecer la contraseña.</p>
        <p>Hace click en el botón para continuar:</p>
        <p>
            <a href="${resetUrl}" 
               style="background:#007bff;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">
               Cambiar contraseña
            </a>
        </p>
        <p>Si no fuiste vos, podés ignorar este mensaje.</p>
    </div>
    `;
};

const register = async (req, res) => {
    const { nombre, correo, contrasena, rol, activo } = req.body;

    try {
        const userExist = await Usuario.findOne({ where: { correo } });
        if (userExist) return res.status(400).json({ message: 'El usuario ya existe' });

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const newUser = await Usuario.create({
            nombre,
            correo,
            contrasena: hashedPassword,
            rol: rol || 'cliente',
            activo: activo !== undefined ? activo : true
        });

        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
    }
};

const login = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        const userExist = await Usuario.findOne({ where: { correo } });
        if (!userExist) return res.status(400).json({ message: 'Usuario no encontrado' });

        if (!userExist.activo)
            return res.status(403).json({ message: 'Usuario inactivo. Contacte al administrador.' });

        const validPassword = await bcrypt.compare(contrasena, userExist.contrasena);
        if (!validPassword) return res.status(403).json({ message: 'Contraseña incorrecta' });

        const user = {
            id: userExist.id,
            nombre: userExist.nombre,
            correo: userExist.correo,
            rol: userExist.rol
        };
        
        const token = jwt.sign({ user: user }, 'secreto1234', { expiresIn: '1h' })

        res.json({
            message: 'Inicio de sesión exitoso',
            token,
            user
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
};

const forgotPassword = async (req, res) => {
    const { correo } = req.body;

    try {
        const user = await Usuario.findOne({ where: { correo } });
        if (!user) return res.status(400).json({ message: 'El usuario no existe' });

        const rawToken = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
        const expiresAt = Date.now() + 15 * 60 * 1000; // 15 min

        resetTokens.set(user.id, { tokenHash, expiresAt });

        const resetUrl = `${process.env.FRONT_URL || 'http://localhost:5173'}/recuperar-contrasenia?token=${rawToken}&id=${user.id}`;

        await sendEmail({
            to: user.correo,
            subject: 'Recuperar contraseña',
            html: resetEmailTemplate({ nombre: user.nombre, resetUrl })
        });

        res.status(200).json({
            message: 'Se ha enviado un correo con instrucciones para recuperar tu contraseña',
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el mail', error: error.message });
    }
};

const resetPassword = async (req, res) => {
    const { id, token, contrasena } = req.body;

    if (!id || !token || !contrasena)
        return res.status(400).json({ message: 'Faltan datos' });

    try {
        const entry = resetTokens.get(Number(id));
        if (!entry) return res.status(400).json({ message: 'Token inválido o expirado' });

        if (entry.expiresAt < Date.now()) {
            resetTokens.delete(Number(id));
            return res.status(400).json({ message: 'El token ha expirado' });
        }

        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        if (tokenHash !== entry.tokenHash)
            return res.status(400).json({ message: 'Token inválido' });

        const user = await Usuario.findByPk(id);
        if (!user) return res.status(400).json({ message: 'El usuario no existe' });

        user.contrasena = await bcrypt.hash(contrasena, 10);
        await user.save();

        resetTokens.delete(Number(id));

        res.status(201).json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al restablecer contraseña', error: error.message });
    }
};

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword
};
