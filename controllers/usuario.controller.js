const { Usuario } = require('../models');

//todos los usuarios
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json({ status: 200, data: usuarios });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener usuarios', error: error.message });
    }
};

//usuario por ID
const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ status: 404, message: 'Usuario no encontrado' });
        }
        res.json({ status: 200, data: usuario });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener usuario', error: error.message });
    }
};

//nuevo usuario
const createUsuario = async (req, res) => {
    const { nombre, correo, contrasena, rol, activo } = req.body;
    try {
        if (!nombre || !correo || !contrasena || !rol) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        //verifica si ya existe un usuario con el mismo correo
        const usuarioExistente = await Usuario.findOne({ where: { correo } });
        if (usuarioExistente) {
            return res.status(400).json({ status: 400, message: 'Ya existe un usuario con ese correo' });
        }

        const nuevoUsuario = await Usuario.create({
            nombre,
            correo,
            contrasena, //se puede bcrypt para hashear la contraseña
            rol,
            activo: activo !== undefined ? activo : true, //valor por defecto: true
        });

        res.status(201).json({
            status: 201,
            data: nuevoUsuario,
            message: 'Usuario creado exitosamente',
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear usuario', error: error.message });
    }
};

//editar usuario
const updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ status: 404, message: 'Usuario no encontrado' });
        }

        const { nombre, correo, contrasena, rol, activo } = req.body;

        //la diferencia entre validad ?? o || es que ?? es mejor si queres saber por que averigua mucha data
        usuario.nombre = nombre ?? usuario.nombre;
        usuario.correo = correo ?? usuario.correo;
        usuario.contrasena = contrasena ?? usuario.contrasena;
        usuario.rol = rol ?? usuario.rol;
        usuario.activo = activo ?? usuario.activo;

        await usuario.save();

        res.status(200).json({
            status: 200,
            message: 'Usuario editado exitosamente',
            data: usuario,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al editar usuario', error: error.message });
    }
};

//eliminar usuario
const deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ status: 404, message: 'Usuario no encontrado' });
        }

        await usuario.destroy();

        res.status(200).json({ status: 200, message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar usuario', error: error.message });
    }
};

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};
