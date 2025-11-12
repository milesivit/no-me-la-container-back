const express = require('express')
const router = express.Router()
const { register, login, forgotPassword, resetPassword } = require('../controllers/auth.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Usuario
 *         nombre:
 *           type: string
 *           description: Nombre de usuario
 *         correo:
 *           type: string
 *           description: Correo de usuario
 *         contrasena:
 *           type: string
 *           description: Contrasena de usuario
 *         rol:
 *           type: string
 *           description: Rol de usuario
 *         activo:
 *           type: boolean
 *           description: Estado del usuario
 *       example:
 *         id: 1
 *         nombre: User Test
 *         correo: u.test@gmail.com
 *         contrasena: pass1234
 *         rol: user
 *         activo: true 
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Documentacion de formularios de inicio de sesion
 */

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registro de usuarios
 *     description: Endpoint para registrar nuevos usuarios.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: User Test
 *               correo:
 *                 type: string
 *                 example: u.test@gmail.com
 *               contrasena:
 *                 type: string
 *                 example: pass1234
 *               rol:
 *                 type: string
 *                 example: user
 *               activo:
 *                 type: boolean
 *                 example: true 
 *     responses:
 *       201:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error al registrar usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al registrar usuario."
 */
router.post('/register', register)

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Inicio de Sesion
 *     description: Endpoint para iniciar sesion.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *                 example: u.test@gmail.com
 *               contrasena:
 *                 type: string
 *                 example: pass1234
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                     correo:
 *                       type: string
 *                     rol:
 *                       type: string
 *             example:
 *               message: "Inicio de sesión exitoso"
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJub21icmUiOiJVc2VyIFRlc3QiLCJjb3JyZW8iOiJ1LnRlc3RAZ21haWwuY29tIiwicm9sIjoidXNlciJ9LCJpYXQiOjE3NjI5MTk4ODYsImV4cCI6MTc2OTIzNDg2fQ.k-faGHuKvjcuiNwkETRUwlfLGEiu4YIYIN1OKIc0OFQ"
 *               user:
 *                 id: 3
 *                 nombre: "User Test"
 *                 correo: "u.test@gmail.com"
 *                 rol: "user"
 *       400:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Usuario no encontrado."
 *       403:
 *         description: Acceso denegado. Puede ser Usuario inactivo o Contraseña incorrecta.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Usuario inactivo contacte con el administrador o Contraseña incorrecta."
 *       500:
 *         description: Error al iniciar sesion.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al iniciar sesion."
 */
router.post('/login', login)

/**
 * @openapi
 * /auth/forgotPassword:
 *   post:
 *     summary: Recuperar contraseña
 *     description: Envía un correo con instrucciones para recuperar la contraseña del usuario.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *                 example: u.test@gmail.com
 *     responses:
 *       200:
 *         description: Correo enviado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Se ha enviado un correo con instrucciones para recuperar tu contraseña"
 *       400:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "El usuario no existe"
 *       500:
 *         description: Error al enviar el correo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *             example:
 *               message: "Error al enviar el mail"
 */
router.post('/forgotPassword', forgotPassword)

/**
 * @openapi
 * /auth/resetPassword:
 *   post:
 *     summary: Restablecer contraseña
 *     description: Restablece la contraseña de un usuario usando un token válido.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 3
 *               token:
 *                 type: string
 *                 example: "abc123def456ghi789"
 *               contrasena:
 *                 type: string
 *                 example: "nuevaContrasena123"
 *     responses:
 *       201:
 *         description: Contraseña actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Contraseña actualizada exitosamente"
 *       400:
 *         description: Error de validación o token inválido/expirado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             examples:
 *               token_invalido:
 *                 summary: Token inválido
 *                 value: { "message": "Token inválido" }
 *               token_expirado:
 *                 summary: Token expirado
 *                 value: { "message": "El token ha expirado" }
 *               faltan_datos:
 *                 summary: Datos incompletos
 *                 value: { "message": "Faltan datos" }
 *               usuario_no_existe:
 *                 summary: Usuario no encontrado
 *                 value: { "message": "El usuario no existe" }
 *       500:
 *         description: Error al restablecer contraseña
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *             example:
 *               message: "Error al restablecer contraseña"
 */
router.post('/resetPassword', resetPassword)

module.exports = router