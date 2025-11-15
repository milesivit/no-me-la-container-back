const express = require('express');
const router = express.Router();
const { 
    getPuertos,
    getPuertoById,
    createPuerto,
    updatePuerto,
    deletePuerto
} = require('../controllers/puerto.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Puerto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Puerto
 *         nombre:
 *           type: string
 *           description: Nombre del puerto
 *         ciudadId:
 *           type: integer
 *           description: Id de Ciudad donde se ubica el puerto
 *       example:
 *         id: 1
 *         nombre: "Red Hook Container Terminal"
 *         ciudadId: 8
 */

/**
 * @swagger
 * tags:
 *   name: Puerto
 *   description: Documentacion acerca de los distintos puertos
 */

/**
 * @swagger
 * /puerto:
 *   get:
 *     summary: Obtener todos los Puertos
 *     tags: [Puerto]
 *     responses:
 *       200:
 *         description: Puertos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Puerto'
 *       500:
 *         description: Error al obtener Puertos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Puerto."
 */
router.get('/', getPuertos);

/**
 * @swagger
 * /puerto/{id}:
 *   get:
 *     summary: Obtener Puerto por id
 *     tags: [Puerto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Puerto id
 *     responses:
 *       200:
 *         description: Puertos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Puerto'
 *       404:
 *         description: Puerto no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Puerto no encontrado"
 *       500:
 *         description: Error al obtener Puertos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Puerto."
 */
router.get('/:id', getPuertoById);

/**
 * @openapi
 * /puerto:
 *   post:
 *     summary: Creacion de puerto
 *     description: Endpoint para crear un nuevo puerto.
 *     tags: [Puerto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de puerto
 *                 example: DP World Santos
 *               ciudadId:
 *                 type: integer
 *                 description: Id de Ciudad donde se ubica el puerto
 *                 example: 10
 *     responses:
 *       201:
 *         description: puerto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                     ciudadId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "puerto creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "DP World Santos"
 *                   ciudadId: 10
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error Validacion."
 *       500:
 *         description: Error al crear puerto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear puerto."
 */
router.post('/', createPuerto);

/**
 * @swagger
 * /puerto/{id}:
 *   put:
 *     summary: Edicion de puerto por id
 *     tags: [Puerto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Puerto id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Puerto'
 *     responses:
 *       200:
 *         description: Puerto actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Puerto'
 *       404:
 *         description: Puerto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Puerto no encontrado."
 *       500:
 *         description: Error al actualizar puerto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar puerto."
 */
router.put('/:id', updatePuerto);

/**
 * @swagger
 * /puerto/{id}:
 *   delete:
 *     summary: Eliminar un puerto por id
 *     tags: [Puerto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Puerto id
 *     responses:
 *       200:
 *         description: Puerto eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Puerto eliminado exitosamente."
 *       404:
 *         description: Puerto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Puerto no encontrado."
 *       500:
 *         description: Error al eliminar puerto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar puerto."
 */
router.delete('/:id', deletePuerto);

module.exports = router;
