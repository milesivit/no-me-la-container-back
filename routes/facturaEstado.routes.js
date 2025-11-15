const express = require('express');
const router = express.Router();
const { 
    getFacturaEstados,
    getFacturaEstadoById,
    createFacturaEstado,
    updateFacturaEstado,
    deleteFacturaEstado,
} = require('../controllers/facturaEstado.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     FacturaEstado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de FacturaEstado
 *         nombre:
 *           type: string
 *           description: Nombre de la facturaEstado
 *       example:
 *         id: 1
 *         nombre: "Pendiente"
 */
/**
 * @swagger
 * tags:
 *   name: FacturaEstado
 *   description: Documentacion acerca de los distintos facturaEstados
 */
/**
 * @swagger
 * /facturaEstado:
 *   get:
 *     summary: Obtener todos los FacturaEstados
 *     tags: [FacturaEstado]
 *     responses:
 *       200:
 *         description: FacturaEstados encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FacturaEstado'
 *       500:
 *         description: Error al obtener FacturaEstados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener FacturaEstado."
 */
router.get('/', getFacturaEstados);

/**
 * @swagger
 * /facturaEstado/{id}:
 *   get:
 *     summary: Obtener FacturaEstado por id
 *     tags: [FacturaEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: FacturaEstado id
 *     responses:
 *       200:
 *         description: FacturaEstados encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FacturaEstado'
 *       404:
 *         description: FacturaEstado no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaEstado no encontrada"
 *       500:
 *         description: Error al obtener FacturaEstados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener FacturaEstado."
 */
router.get('/:id', getFacturaEstadoById);

/**
 * @openapi
 * /facturaEstado:
 *   post:
 *     summary: Creacion de facturaEstado
 *     description: Endpoint para crear un nuevo facturaEstado.
 *     tags: [FacturaEstado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Factura Estado
 *                 example: Pagada
 *     responses:
 *       201:
 *         description: facturaEstado creado exitosamente
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
 *                 message: "facturaEstado creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Pagada"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear una facturaEstado ya esxistente.
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
 *         description: Error al crear facturaEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear facturaEstado."
 */
router.post('/', createFacturaEstado);

/**
 * @swagger
 * /facturaEstado/{id}:
 *   put:
 *     summary: Edicion de facturaEstado por id
 *     tags: [FacturaEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: FacturaEstado id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FacturaEstado'
 *     responses:
 *       200:
 *         description: FacturaEstado actualizada exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FacturaEstado'
 *       404:
 *         description: FacturaEstado no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaEstado no encontrada."
 *       500:
 *         description: Error al actualizar facturaEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar facturaEstado."
 */
router.put('/:id', updateFacturaEstado);

/**
 * @swagger
 * /facturaEstado/{id}:
 *   delete:
 *     summary: Eliminar un facturaEstado por id
 *     tags: [FacturaEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: FacturaEstado id
 *     responses:
 *       200:
 *         description: FacturaEstado eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaEstado eliminado exitosamente."
 *       404:
 *         description: FacturaEstado no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "FacturaEstado no encontrada."
 *       500:
 *         description: Error al eliminar facturaEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar facturaEstado."
 */
router.delete('/:id', deleteFacturaEstado);

module.exports = router;
