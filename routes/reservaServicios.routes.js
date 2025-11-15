const express = require('express');
const router = express.Router();
const { 
    getReservaServicios,
    getReservaServicioById,
    createReservaServicio,
    updateReservaServicio,
    deleteReservaServicio
} = require('../controllers/reservaServicios.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ReservaServicio:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de ReservaServicio
 *         reservaId:
 *           type: integer
 *           description: Id de la reserva asociada
 *         servicioId:
 *           type: integer
 *           description: Id del servicio asociado
 *       example:
 *         id: 1
 *         reservaId: 1
 *         servicioId: 1
 */

/**
 * @swagger
 * tags:
 *   name: ReservaServicio
 *   description: Documentacion acerca de los distintos reservaServicios
 */

/**
 * @swagger
 * /reservaservicio:
 *   get:
 *     summary: Obtener todos los ReservaServicios
 *     tags: [ReservaServicio]
 *     responses:
 *       200:
 *         description: ReservaServicios encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaServicio'
 *       500:
 *         description: Error al obtener ReservaServicios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ReservaServicio."
 */
router.get('/', getReservaServicios);

/**
 * @swagger
 * /reservaservicio/{id}:
 *   get:
 *     summary: Obtener ReservaServicio por id
 *     tags: [ReservaServicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ReservaServicio id
 *     responses:
 *       200:
 *         description: ReservaServicio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaServicio'
 *       404:
 *         description: ReservaServicio no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaServicio no encontrado"
 *       500:
 *         description: Error al obtener ReservaServicio
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ReservaServicio."
 */
router.get('/:id', getReservaServicioById);

/**
 * @swagger
 * /reservaservicio:
 *   post:
 *     summary: Creacion de reservaServicio
 *     description: Endpoint para crear un nuevo reservaServicio.
 *     tags: [ReservaServicio]
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
 *               servicioId:
 *                 type: integer
 *                 description: Id del servicio asociado
 *                 example: 1
 *     responses:
 *       201:
 *         description: reservaServicio creado exitosamente
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
 *                     servicioId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "reservaServicio creado exitosamente"
 *                 data:
 *                   id: 2
 *                   reservaId: 1
 *                   servicioId: 1
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
 *         description: Error al crear reservaServicio.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear reservaServicio."
 */
router.post('/', createReservaServicio);

/**
 * @swagger
 * /reservaservicio/{id}:
 *   put:
 *     summary: Edicion de reservaServicio por id
 *     tags: [ReservaServicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ReservaServicio id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReservaServicio'
 *     responses:
 *       200:
 *         description: ReservaServicio actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReservaServicio'
 *       404:
 *         description: ReservaServicio no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaServicio no encontrado."
 *       500:
 *         description: Error al actualizar reservaServicio.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar reservaServicio."
 */
router.put('/:id', updateReservaServicio);

/**
 * @swagger
 * /reservaservicio/{id}:
 *   delete:
 *     summary: Eliminar un reservaServicio por id
 *     tags: [ReservaServicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ReservaServicio id
 *     responses:
 *       200:
 *         description: ReservaServicio eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaServicio eliminado exitosamente."
 *       404:
 *         description: ReservaServicio no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ReservaServicio no encontrado."
 *       500:
 *         description: Error al eliminar reservaServicio.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar reservaServicio."
 */
router.delete('/:id', deleteReservaServicio);

module.exports = router;
