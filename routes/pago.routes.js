const express = require('express');
const router = express.Router();
const {
    getPagos,
    getPagoById,
    createPago,
    updatePago,
    deletePago
} = require('../controllers/pago.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Pago:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Pago
 *         facturaId:
 *           type: integer
 *           description: Factura Id asociada al pago
 *         medioPagoId:
 *           type: integer
 *           description: Medio de pago utilizado
 *         monto:
 *           type: float
 *           description: monto del pago
 *         fecha:
 *           type: date
 *           description: fecha de pago
 *         estado:
 *           type: string
 *           description: Estado del pago
 *       example:
 *         id: 1
 *         facturaId: 1
 *         medioPagoId: 1
 *         monto: 50000
 *         fecha: 2025-11-20
 *         estado: "Pendiente"
 */
/**
 * @swagger
 * tags:
 *   name: Pago
 *   description: Documentacion acerca de los distintos pagos
 */
/**
 * @swagger
 * /pago:
 *   get:
 *     summary: Obtener todos los Pagos
 *     tags: [Pago]
 *     responses:
 *       200:
 *         description: Pagos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 *       500:
 *         description: Error al obtener Pagos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Pago."
 */
router.get('/', getPagos);

/**
 * @swagger
 * /pago/{id}:
 *   get:
 *     summary: Obtener Pago por id
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pago id
 *     responses:
 *       200:
 *         description: Pagos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 *       404:
 *         description: Pago no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pago no encontrado"
 *       500:
 *         description: Error al obtener Pagos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Pago."
 */
router.get('/:id', getPagoById);

/**
 * @openapi
 * /pago:
 *   post:
 *     summary: Creacion de pago
 *     description: Endpoint para crear un nuevo pago.
 *     tags: [Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               facturaId:
 *                 type: integer
 *                 description: Factura Id asociada al pago
 *                 example: 1
 *               medioPagoId:
 *                 type: integer
 *                 description: Medio de pago utilizado
 *                 example: 1
 *               monto:
 *                 type: float
 *                 description: monto del pago
 *                 example: 50000
 *               fecha:
 *                 type: date
 *                 description: fecha de pago
 *                 example: 2025-11-20
 *               estado:
 *                 type: string
 *                 description: Estado del pago
 *       example: "Pendiente"
 *     responses:
 *       201:
 *         description: pago creado exitosamente
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
 *                     facturaId:
 *                       type: integer
 *                     medioPagoId:
 *                       type: integer
 *                     monto:
 *                       type: float
 *                     fecha:
 *                       type: date
 *                     estado:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "pago creado exitosamente"
 *                 data:
 *                   id: 2
 *                   facturaId: 1
 *                   medioPagoId: 1
 *                   monto: 50000
 *                   fecha: 2025-11-20
 *                   estado: "Pendiente"
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
 *         description: Error al crear pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear pago."
 */
router.post('/', createPago);

/**
 * @swagger
 * /pago/{id}:
 *   put:
 *     summary: Edicion de pago por id
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pago id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pago'
 *     responses:
 *       200:
 *         description: Pago actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pago'
 *       404:
 *         description: Pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pago no encontrado."
 *       500:
 *         description: Error al actualizar pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar pago."
 */
router.put('/:id', updatePago);

/**
 * @swagger
 * /pago/{id}:
 *   delete:
 *     summary: Eliminar un pago por id
 *     tags: [Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pago id
 *     responses:
 *       200:
 *         description: Pago eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pago eliminado exitosamente."
 *       404:
 *         description: Pago no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pago no encontrado."
 *       500:
 *         description: Error al eliminar pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar pago."
 */
router.delete('/:id', deletePago);

module.exports = router;
