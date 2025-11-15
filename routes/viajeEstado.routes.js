const express = require('express');
const router = express.Router();
const { 
    getViajeEstados,
    getViajeEstadoById,
    createViajeEstado,
    updateViajeEstado,
    deleteViajeEstado
} = require('../controllers/viajeEstado.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     ViajeEstado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de ViajeEstado
 *         nombre:
 *           type: string
 *           description: Nombre del viajeEstado
 *       example:
 *         id: 1
 *         nombre: "Programado"
 */
/**
 * @swagger
 * tags:
 *   name: ViajeEstado
 *   description: Documentacion acerca de los distintos viajeEstados
 */
/**
 * @swagger
 * /viajeEstado:
 *   get:
 *     summary: Obtener todos los ViajeEstados
 *     tags: [ViajeEstado]
 *     responses:
 *       200:
 *         description: ViajeEstados encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeEstado'
 *       500:
 *         description: Error al obtener ViajeEstados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ViajeEstado."
 */
router.get('/', getViajeEstados);

/**
 * @swagger
 * /viajeEstado/{id}:
 *   get:
 *     summary: Obtener ViajeEstado por id
 *     tags: [ViajeEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ViajeEstado id
 *     responses:
 *       200:
 *         description: ViajeEstados encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeEstado'
 *       404:
 *         description: ViajeEstado no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEstado no encontrado"
 *       500:
 *         description: Error al obtener ViajeEstados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ViajeEstado."
 */
router.get('/:id', getViajeEstadoById);

/**
 * @openapi
 * /viajeEstado:
 *   post:
 *     summary: Creacion de viajeEstado
 *     description: Endpoint para crear un nuevo viajeEstado.
 *     tags: [ViajeEstado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Viaje Estado
 *                 example: Programado
 *     responses:
 *       201:
 *         description: viajeEstado creado exitosamente
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
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "viajeEstado creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Programado"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un viajeEstado ya esxistente.
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
 *         description: Error al crear viajeEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear viajeEstado."
 */
router.post('/', createViajeEstado);

/**
 * @swagger
 * /viajeEstado/{id}:
 *   put:
 *     summary: Edicion de viajeEstado por id
 *     tags: [ViajeEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ViajeEstado id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ViajeEstado'
 *     responses:
 *       200:
 *         description: ViajeEstado actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeEstado'
 *       404:
 *         description: ViajeEstado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEstado no encontrado."
 *       500:
 *         description: Error al actualizar viajeEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar viajeEstado."
 */
router.put('/:id', updateViajeEstado);

/**
 * @swagger
 * /viajeEstado/{id}:
 *   delete:
 *     summary: Eliminar un viajeEstado por id
 *     tags: [ViajeEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ViajeEstado id
 *     responses:
 *       200:
 *         description: ViajeEstado eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEstado eliminado exitosamente."
 *       404:
 *         description: ViajeEstado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEstado no encontrado."
 *       500:
 *         description: Error al eliminar viajeEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar viajeEstado."
 */
router.delete('/:id', deleteViajeEstado);

module.exports = router;
