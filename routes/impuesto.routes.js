const express = require('express');
const router = express.Router();
const { 
    getImpuestos,
    getImpuestoById,
    createImpuesto,
    updateImpuesto,
    deleteImpuesto,
} = require('../controllers/impuesto.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Impuesto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Impuesto
 *         codImpuesto:
 *           type: string
 *           description: Codigo del impuesto
 *         nombre:
 *           type: string
 *           description: Nombre del impuesto
 *         importe:
 *           type: float
 *           description: Importe del impuesto
 *       example:
 *         id: 1
 *         codImpuesto: "IMP-00001"
 *         nombre: "Aduana"
 *         importe: 150000
 */
/**
 * @swagger
 * tags:
 *   name: Impuesto
 *   description: Documentacion acerca de los distintos impuestos
 */
/**
 * @swagger
 * /impuesto:
 *   get:
 *     summary: Obtener todos los Impuestos
 *     tags: [Impuesto]
 *     responses:
 *       200:
 *         description: Impuestos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Impuesto'
 *       500:
 *         description: Error al obtener Impuestos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Impuesto."
 */
router.get('/', getImpuestos);

/**
 * @swagger
 * /impuesto/{id}:
 *   get:
 *     summary: Obtener Impuesto por id
 *     tags: [Impuesto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Impuesto id
 *     responses:
 *       200:
 *         description: Impuesto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Impuesto'
 *       404:
 *         description: Impuesto no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Impuesto no encontrado"
 *       500:
 *         description: Error al obtener Impuestos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Impuesto."
 */
router.get('/:id', getImpuestoById);

/**
 * @openapi
 * /impuesto:
 *   post:
 *     summary: Creacion de impuesto
 *     description: Endpoint para crear un nuevo impuesto.
 *     tags: [Impuesto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codImpuesto:
 *                 type: string
 *                 description: Codigo del impuesto
 *                 example: "IMP-00001"
 *               nombre:
 *                 type: string
 *                 description: Nombre del impuesto
 *                 example: "Aduana"
 *               importe:
 *                 type: float
 *                 description: Importe del impuesto
 *                 example: 150000
 *     responses:
 *       201:
 *         description: impuesto creado exitosamente
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
 *                 message: "impuesto creado exitosamente"
 *                 data:
 *                   id: 2
 *                   codImpuesto: "IMP-00001"
 *                   nombre: "Aduana"
 *                   importe: 150000
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un impuesto ya esxistente.
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
 *         description: Error al crear impuesto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear impuesto."
 */
router.post('/', createImpuesto);

/**
 * @swagger
 * /impuesto/{id}:
 *   put:
 *     summary: Edicion de impuesto por id
 *     tags: [Impuesto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Impuesto id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Impuesto'
 *     responses:
 *       200:
 *         description: Impuesto actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Impuesto'
 *       404:
 *         description: Impuesto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Impuesto no encontrado."
 *       500:
 *         description: Error al actualizar impuesto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar impuesto."
 */
router.put('/:id', updateImpuesto);

/**
 * @swagger
 * /impuesto/{id}:
 *   delete:
 *     summary: Eliminar un impuesto por id
 *     tags: [Impuesto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Impuesto id
 *     responses:
 *       200:
 *         description: Impuesto eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Impuesto eliminado exitosamente."
 *       404:
 *         description: Impuesto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Impuesto no encontrado."
 *       500:
 *         description: Error al eliminar impuesto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar impuesto."
 */
router.delete('/:id', deleteImpuesto);

module.exports = router;
