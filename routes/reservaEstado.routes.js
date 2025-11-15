const express = require('express');
const router = express.Router();
const { 
  getReservaEstados,
  getReservaEstadoById,
  createReservaEstado,
  updateReservaEstado,
  deleteReservaEstado,
} = require('../controllers/reservaEstado.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ReservaEstado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del estado de la reserva
 *         nombre:
 *           type: string
 *           description: Nombre del estado de la reserva
 *       example:
 *         id: 1
 *         nombre: "Capitan"
 */

/**
 * @swagger
 * tags:
 *   name: ReservaEstado
 *   description: Documentación sobre los distintos estados de reserva
 */

/**
 * @swagger
 * /reservaEstado:
 *   get:
 *     summary: Obtener todos los estados de reserva
 *     tags: [ReservaEstado]
 *     responses:
 *       200:
 *         description: Estados de reserva encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaEstado'
 *       500:
 *         description: Error al obtener estados de reserva
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener los estados de reserva."
 */
router.get('/', getReservaEstados);

/**
 * @swagger
 * /reservaEstado/{id}:
 *   get:
 *     summary: Obtener un estado de reserva por ID
 *     tags: [ReservaEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado de reserva
 *     responses:
 *       200:
 *         description: Estado de reserva encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaEstado'
 *       404:
 *         description: Estado de reserva no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Estado de reserva no encontrado."
 *       500:
 *         description: Error al obtener estado de reserva
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener el estado de reserva."
 */
router.get('/:id', getReservaEstadoById);

/**
 * @openapi
 * /reservaEstado:
 *   post:
 *     summary: Creación de un estado de reserva
 *     description: Endpoint para crear un nuevo estado de reserva.
 *     tags: [ReservaEstado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del estado de reserva
 *                 example: Pendiente
 *     responses:
 *       201:
 *         description: Estado de reserva creado exitosamente
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
 *             example:
 *               status: 201
 *               message: "Estado de reserva creado exitosamente."
 *               data:
 *                 id: 2
 *                 nombre: "Pendiente"
 *                 updatedAt: "2025-11-12T04:45:49.227Z"
 *                 createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error de validación. Puede deberse a campos obligatorios faltantes o intento de crear un estado ya existente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error de validación."
 *       500:
 *         description: Error al crear el estado de reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear el estado de reserva."
 */
router.post('/', createReservaEstado);

/**
 * @swagger
 * /reservaEstado/{id}:
 *   put:
 *     summary: Edición de un estado de reserva por ID
 *     tags: [ReservaEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado de reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReservaEstado'
 *     responses:
 *       200:
 *         description: Estado de reserva actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaEstado'
 *       404:
 *         description: Estado de reserva no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Estado de reserva no encontrado."
 *       500:
 *         description: Error al actualizar estado de reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar el estado de reserva."
 */
router.put('/:id', updateReservaEstado);

/**
 * @swagger
 * /reservaEstado/{id}:
 *   delete:
 *     summary: Eliminar un estado de reserva por ID
 *     tags: [ReservaEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado de reserva
 *     responses:
 *       200:
 *         description: Estado de reserva eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Estado de reserva eliminado exitosamente."
 *       404:
 *         description: Estado de reserva no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Estado de reserva no encontrado."
 *       500:
 *         description: Error al eliminar estado de reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar el estado de reserva."
 */
router.delete('/:id', deleteReservaEstado);

module.exports = router;
