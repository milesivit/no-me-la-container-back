const express = require('express');
const router = express.Router();
const { 
    getReservaViajes,
    getReservaViajeById,
    createReservaViaje,
    updateReservaViaje,
    deleteReservaViaje
} = require('../controllers/reservaViaje.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ReservaViaje:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de ReservaViaje
 *         reservaId:
 *           type: integer
 *           description: Id de la reserva asociada
 *         viajeId:
 *           type: integer
 *           description: Id del viaje asociado
 *       example:
 *         id: 1
 *         reservaId: 1
 *         viajeId: 1
 */

/**
 * @swagger
 * tags:
 *   name: ReservaViaje
 *   description: Documentacion acerca de los distintos reservaViajes
 */

/**
 * @swagger
 * /reservaViaje:
 *   get:
 *     summary: Obtener todos los ReservaViajes
 *     tags: [ReservaViaje]
 *     responses:
 *       200:
 *         description: ReservaViajes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaViaje'
 *       500:
 *         description: Error al obtener ReservaViajes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ReservaViaje."
 */
router.get('/', getReservaViajes);

/**
 * @swagger
 * /reservaViaje/{id}:
 *   get:
 *     summary: Obtener ReservaViaje por id
 *     tags: [ReservaViaje]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ReservaViaje id
 *     responses:
 *       200:
 *         description: ReservaViaje encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaViaje'
 *       404:
 *         description: ReservaViaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaViaje no encontrado"
 *       500:
 *         description: Error al obtener ReservaViaje
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ReservaViaje."
 */
router.get('/:id', getReservaViajeById);

/**
 * @swagger
 * /reservaViaje:
 *   post:
 *     summary: Creacion de reservaViaje
 *     description: Endpoint para crear un nuevo reservaViaje.
 *     tags: [ReservaViaje]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reservaId:
 *                 type: integer
 *                 description: Id de la reserva asociada
 *                 example: 1
 *               viajeId:
 *                 type: integer
 *                 description: Id del viaje asociado
 *                 example: 1
 *     responses:
 *       201:
 *         description: reservaViaje creado exitosamente
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
 *                     reservaId:
 *                       type: integer
 *                     viajeId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "reservaViaje creado exitosamente"
 *                 data:
 *                   id: 2
 *                   reservaId: 1
 *                   viajeId: 1
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
 *         description: Error al crear reservaViaje.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear reservaViaje."
 */
router.post('/', createReservaViaje);

/**
 * @swagger
 * /reservaViaje/{id}:
 *   put:
 *     summary: Edicion de reservaViaje por id
 *     tags: [ReservaViaje]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ReservaViaje id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReservaViaje'
 *     responses:
 *       200:
 *         description: ReservaViaje actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaViaje'
 *       404:
 *         description: ReservaViaje no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaViaje no encontrado."
 *       500:
 *         description: Error al actualizar reservaViaje.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar reservaViaje."
 */
router.put('/:id', updateReservaViaje);

/**
 * @swagger
 * /reservaViaje/{id}:
 *   delete:
 *     summary: Eliminar un reservaViaje por id
 *     tags: [ReservaViaje]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ReservaViaje id
 *     responses:
 *       200:
 *         description: ReservaViaje eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaViaje eliminado exitosamente."
 *       404:
 *         description: ReservaViaje no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaViaje no encontrado."
 *       500:
 *         description: Error al eliminar reservaViaje.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar reservaViaje."
 */
router.delete('/:id', deleteReservaViaje);

module.exports = router;
