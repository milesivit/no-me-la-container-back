const express = require('express');
const router = express.Router();
const { 
    getFacturas,
    getFacturaById,
    createFactura,
    updateFactura,
    deleteFactura
} = require('../controllers/factura.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Factura:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Factura
 *         numeroFactura:
 *           type: string
 *           description: Numero del factura
 *         reservaId:
 *           type: integer
 *           description: Id de la Reserva
 *         fechaEmision:
 *           type: date
 *           description: Fecha de emision de la factura
 *         fechaVencimiento:
 *           type: date
 *           description: Fecha de vencimiento de la factura
 *         observacion:
 *           type: string
 *           description: Observacion de la factura
 *         facturaEstadoId:
 *           type: integer
 *           description: Id Estado de la factura
 *       example:
 *         id: 1
 *         numeroFactura: "FC-00001"
 *         reservaId: 1
 *         fechaEmision: 2025-01-15
 *         fechaVencimiento: 2025-02-15
 *         Observacion: Factura generada automáticamente.
 *         facturaEstadoId: 1
 */
/**
 * @swagger
 * tags:
 *   name: Factura
 *   description: Documentacion acerca de los facturas
 */
/**
 * @swagger
 * /factura:
 *   get:
 *     summary: Obtener todas las Facturas
 *     tags: [Factura]
 *     responses:
 *       200:
 *         description: Facturas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Factura'
 *       500:
 *         description: Error al obtener Facturas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Factura."
 */
router.get('/', getFacturas);

/**
 * @swagger
 * /factura/{id}:
 *   get:
 *     summary: Obtener Factura por id
 *     tags: [Factura]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Factura id
 *     responses:
 *       200:
 *         description: Factura encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Factura'
 *       404:
 *         description: Factura no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Factura no encontrada"
 *       500:
 *         description: Error al obtener Facturas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Factura."
 */
router.get('/:id', getFacturaById);

/**
 * @openapi
 * /factura:
 *   post:
 *     summary: Creacion de factura
 *     description: Endpoint para crear un nuevo factura.
 *     tags: [Factura]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroFactura:
 *                 type: string
 *                 description: Numero del factura
 *                 example: "FC-00001"
 *               reservaId:
 *                 type: integer
 *                 description: Id de la Reserva
 *                 example: 1
 *               fechaEmision:
 *                 type: date
 *                 description: Fecha de emision de la factura
 *                 example: 2025-01-15
 *               fechaVencimiento:
 *                 type: date
 *                 description: Fecha de vencimiento de la factura
 *                 example: 2025-02-15
 *               observacion:
 *                 type: string
 *                 description: Observacion de la factura
 *                 example: Factura generada automáticamente.
 *               facturaEstadoId:
 *                 type: integer
 *                 description: Id Estado de la factura
 *                 example: 1
 *     responses:
 *       201:
 *         description: factura creado exitosamente
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
 *                     fechaEmision:
 *                       type: date
 *                     fechaVencimiento:
 *                       type: date
 *                     observacion:
 *                       type: string
 *                     facturaEstadoId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "factura creado exitosamente"
 *                 data:
 *                   id: 2
 *                   numeroFactura: FC-00001
 *                   reservaId: 1
 *                   fechaEmision: 2025-01-15
 *                   fechaVencimiento: 2025-02-15
 *                   observacion: Factura generada automáticamente.
 *                   facturaEstadoId: 1
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un factura ya esxistente.
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
 *         description: Error al crear factura.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear factura."
 */
router.post('/', createFactura);

/**
 * @swagger
 * /factura/{id}:
 *   put:
 *     summary: Edicion de factura por id
 *     tags: [Factura]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Factura id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Factura'
 *     responses:
 *       200:
 *         description: Factura actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Factura'
 *       404:
 *         description: Factura no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Factura no encontrada."
 *       500:
 *         description: Error al actualizar factura.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar factura."
 */
router.put('/:id', updateFactura);

/**
 * @swagger
 * /factura/{id}:
 *   delete:
 *     summary: Eliminar un factura por id
 *     tags: [Factura]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Factura id
 *     responses:
 *       200:
 *         description: Factura eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Factura eliminado exitosamente."
 *       404:
 *         description: Factura no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Factura no encontrada."
 *       500:
 *         description: Error al eliminar factura.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar factura."
 */
router.delete('/:id', deleteFactura);

module.exports = router;
