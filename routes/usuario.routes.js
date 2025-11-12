const express = require('express');
const router = express.Router();
const {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
} = require('../controllers/usuario.controller');


// /**
//  * @swagger
//  * tags:
//  *   name: Usuario
//  *   description: Documentacion de manejo de usuarios
//  */

// /**
//  * @openapi
//  * /usuario:
//  *   get:
//  *     summary: Ver todos los usuarios
//  *     description: Endpoint para ver todos los usuarios registrados en la base de datos.
//  *     tags: [Usuario]
//  *     parameters:
//  *       - in: query
//  *         name: nombre_param
//  *         required: false
//  *         schema:
//  *           type: string
//  *         description: Qué hace este parámetro
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               campo1:
//  *                 type: string
//  *               campo2:
//  *                 type: number
//  *     responses:
//  *       200:
//  *         description: Respuesta exitosa
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 mensaje:
//  *                   type: string
//  *       400:
//  *         description: Error en la solicitud
//  */
router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;