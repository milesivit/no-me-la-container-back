const express = require('express');
const router = express.Router();
const { 
    getReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva,
    getFacturaByReserva
} = require('../controllers/reserva.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la reserva
 *         clienteId:
 *           type: integer
 *           description: ID del cliente que realiza la reserva
 *         cargaContainerId:
 *           type: integer
 *           description: ID de la carga asociada a la reserva
 *         fechaReserva:
 *           type: date
 *           description: Fecha de la reserva
 *         reservaEstadoId:
 *           type: integer
 *           description: ID del estado de la reserva
 *       example:
 *         id: 1
 *         clienteId: 1
 *         cargaContainerId: 1
 *         fechaReserva: 2025-11-15
 *         reservaEstadoId: 2
 */
/**
 * @swagger
 * tags:
 *   name: Reserva
 *   description: Documentacion acerca de los distintos reservas
 */
/**
 * @swagger
 * /reserva:
 *   get:
 *     summary: Obtener todos los Reservas
 *     tags: [Reserva]
 *     responses:
 *       200:
 *         description: Reservas encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       500:
 *         description: Error al obtener Reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Reserva."
 */
router.get('/', getReservas);

/**
 * @swagger
 * /reserva/{id}:
 *   get:
 *     summary: Obtener Reserva por id
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Reserva id
 *     responses:
 *       200:
 *         description: Reservas encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Reserva no encontrado"
 *       500:
 *         description: Error al obtener Reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Reserva."
 */
router.get('/:id', getReservaById);

/**
 * @openapi
 * /reserva:
 *   post:
 *     summary: Creacion de reserva
 *     description: Endpoint para crear un nuevo reserva.
 *     tags: [Reserva]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: integer
 *                 description: ID del cliente que realiza la reserva
 *                 example: 1
 *               cargaContainerId:
 *                 type: integer
 *                 description: ID de la carga asociada a la reserva
 *                 example: 1
 *               fechaReserva:
 *                 type: date
 *                 description: Fecha de la reserva
 *                 example: 2025-11-22 
 *               reservaEstadoId:
 *                 type: integer
 *                 description: ID del estado de la reserva
 *                 example: 2
 *     responses:
 *       201:
 *         description: reserva creado exitosamente
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
 *                     clienteId:
 *                       type: integer
 *                     cargaContainerId:
 *                       type: integer
 *                     fechaReserva:
 *                       type: date
 *                     reservaEstadoId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "reserva creado exitosamente"
 *                 data:
 *                   id: 2
 *                   clienteId: 1
 *                   cargaContainerId: 1
 *                   fechaReserva: 2025-11-22 
 *                   reservaEstadoId: 1 
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
 *         description: Error al crear reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear reserva."
 */
router.post('/', createReserva);

/**
 * @swagger
 * /reserva/{id}:
 *   put:
 *     summary: Edicion de reserva por id
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Reserva id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Reserva no encontrado."
 *       500:
 *         description: Error al actualizar reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar reserva."
 */
router.put('/:id', updateReserva);

/**
 * @swagger
 * /reserva/{id}:
 *   delete:
 *     summary: Eliminar un reserva por id
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Reserva id
 *     responses:
 *       200:
 *         description: Reserva eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Reserva eliminado exitosamente."
 *       404:
 *         description: Reserva no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Reserva no encontrado."
 *       500:
 *         description: Error al eliminar reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar reserva."
 */
router.delete('/:id', deleteReserva);
router.get('/:id/factura', getFacturaByReserva);

module.exports = router;
