const express = require('express');
const router = express.Router();
const { 
    getFacturaImpuestos,
    getFacturaImpuestoById,
    createFacturaImpuesto,
    updateFacturaImpuesto,
    deleteFacturaImpuesto
} = require('../controllers/facturaImpuesto.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     FacturaImpuesto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de FacturaImpuesto
 *         impuestoId:
 *           type: integer
 *           description: Impuesto aplicado sobre facturaImpuesto
 *         facturaId:
 *           type: integer
 *           description: Factura relacionan
 *       example:
 *         id: 1
 *         impuestoId: 2
 *         facturaId: 1
 */
/**
 * @swagger
 * tags:
 *   name: FacturaImpuesto
 *   description: Documentacion acerca de las distintas facturaImpuestos
 */
/**
 * @swagger
 * /facturaImpuesto:
 *   get:
 *     summary: Obtener todos los FacturaImpuestos
 *     tags: [FacturaImpuesto]
 *     responses:
 *       200:
 *         description: FacturaImpuestos encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FacturaImpuesto'
 *       500:
 *         description: Error al obtener FacturaImpuestos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener FacturaImpuesto."
 */
router.get('/', getFacturaImpuestos);

/**
 * @swagger
 * /facturaImpuesto/{id}:
 *   get:
 *     summary: Obtener FacturaImpuesto por id
 *     tags: [FacturaImpuesto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: FacturaImpuesto id
 *     responses:
 *       200:
 *         description: FacturaImpuestos encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FacturaImpuesto'
 *       404:
 *         description: FacturaImpuesto no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaImpuesto no encontrada"
 *       500:
 *         description: Error al obtener FacturaImpuestos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener FacturaImpuesto."
 */
router.get('/:id', getFacturaImpuestoById);

/**
 * @openapi
 * /facturaImpuesto:
 *   post:
 *     summary: Creacion de facturaImpuesto
 *     description: Endpoint para crear un nuevo facturaImpuesto.
 *     tags: [FacturaImpuesto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               impuestoId:
 *                 type: integer
 *                 description: Id del impuesto aplicado a la factura
 *                 example: 2
 *               facturaId:
 *                 type: integer
 *                 description: Id de la factura asociada
 *                 example: 1
 *     responses:
 *       201:
 *         description: facturaImpuesto creado exitosamente
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
 *                     impuestoId:
 *                       type: integer
 *                     facturaId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "facturaImpuesto creado exitosamente"
 *                 data:
 *                   id: 2
 *                   impuestoId: 2
 *                   facturaId: 1
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
 *         description: Error al crear facturaImpuesto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear facturaImpuesto."
 */
router.post('/', createFacturaImpuesto);

/**
 * @swagger
 * /facturaImpuesto/{id}:
 *   put:
 *     summary: Edicion de facturaImpuesto por id
 *     tags: [FacturaImpuesto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: FacturaImpuesto id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FacturaImpuesto'
 *     responses:
 *       200:
 *         description: FacturaImpuesto actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FacturaImpuesto'
 *       404:
 *         description: FacturaImpuesto no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaImpuesto no encontrada."
 *       500:
 *         description: Error al actualizar facturaImpuesto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar facturaImpuesto."
 */
router.put('/:id', updateFacturaImpuesto);

/**
 * @swagger
 * /facturaImpuesto/{id}:
 *   delete:
 *     summary: Eliminar un facturaImpuesto por id
 *     tags: [FacturaImpuesto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: FacturaImpuesto id
 *     responses:
 *       200:
 *         description: FacturaImpuesto eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaImpuesto eliminado exitosamente."
 *       404:
 *         description: FacturaImpuesto no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaImpuesto no encontrada."
 *       500:
 *         description: Error al eliminar facturaImpuesto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar facturaImpuesto."
 */
router.delete('/:id', deleteFacturaImpuesto);

module.exports = router;
