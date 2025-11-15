const express = require('express');
const router = express.Router();
const { 
    getMediosPago,
    getMedioPagoById,
    createMedioPago,
    updateMedioPago,
    deleteMedioPago,
} = require('../controllers/medioPago.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     MedioPago:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de MedioPago
 *         nombre:
 *           type: string
 *           description: Nombre del medioPago
 *       example:
 *         id: 1
 *         nombre: "Criptomonedas"
 */
/**
 * @swagger
 * tags:
 *   name: MedioPago
 *   description: Documentacion acerca de los distintos medios de pago
 */
/**
 * @swagger
 * /medioPago:
 *   get:
 *     summary: Obtener todos los medios de pagos
 *     tags: [MedioPago]
 *     responses:
 *       200:
 *         description: medios de pago encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedioPago'
 *       500:
 *         description: Error al obtener medios de pago
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener medios de pago."
 */
router.get('/', getMediosPago);

/**
 * @swagger
 * /medioPago/{id}:
 *   get:
 *     summary: Obtener medios de pago por id
 *     tags: [MedioPago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: MedioPago id
 *     responses:
 *       200:
 *         description: medios de pago encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedioPago'
 *       404:
 *         description: medios de pago no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "medios de pago no encontrado"
 *       500:
 *         description: Error al obtener medios de pago
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener medios de pago."
 */
router.get('/:id', getMedioPagoById);

/**
 * @openapi
 * /medioPago:
 *   post:
 *     summary: Creacion de medioPago
 *     description: Endpoint para crear un nuevo medioPago.
 *     tags: [MedioPago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Medio de Pago
 *                 example: Cheque
 *     responses:
 *       201:
 *         description: Medio de pago creado exitosamente
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
 *                 message: "Medio de pago creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Cheque"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un medioPago ya esxistente.
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
 *         description: Error al crear medioPago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear medio de pago."
 */
router.post('/', createMedioPago);

/**
 * @swagger
 * /medioPago/{id}:
 *   put:
 *     summary: Edicion de medio de pago por id
 *     tags: [MedioPago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: MedioPago id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedioPago'
 *     responses:
 *       200:
 *         description: Medio de pago actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedioPago'
 *       404:
 *         description: Medio de pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Medio de pago no encontrado."
 *       500:
 *         description: Error al actualizar medioPago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar medio de pago."
 */
router.put('/:id', updateMedioPago);

/**
 * @swagger
 * /medioPago/{id}:
 *   delete:
 *     summary: Eliminar un medio de pago por id
 *     tags: [MedioPago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: MedioPago id
 *     responses:
 *       200:
 *         description: Medio de pago eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Medio de pago eliminado exitosamente."
 *       404:
 *         description: Medio de pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Medio de pago no encontrado."
 *       500:
 *         description: Error al eliminar medioPago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar medioPago."
 */
router.delete('/:id', deleteMedioPago);

module.exports = router;
