const express = require('express');
const router = express.Router();
const { 
    getCondicionesFiscales,
    getCondicionFiscalById,
    createCondicionFiscal,
    updateCondicionFiscal,
    deleteCondicionFiscal
} = require('../controllers/condicionFiscal.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     CondicionFiscal:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de CondicionFiscal
 *         nombre:
 *           type: string
 *           description: Nombre de la condicion fiscal
 *       example:
 *         id: 1
 *         nombre: "Monotributista"
 */
/**
 * @swagger
 * tags:
 *   name: CondicionFiscal
 *   description: Documentacion acerca de los distintos condicionFiscals de los empleados
 */
/**
 * @swagger
 * /condicionFiscal:
 *   get:
 *     summary: Obtener todos los CondicionFiscals
 *     tags: [CondicionFiscal]
 *     responses:
 *       200:
 *         description: CondicionFiscals encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CondicionFiscal'
 *       500:
 *         description: Error al obtener CondicionFiscals
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener CondicionFiscal."
 */
router.get('/', getCondicionesFiscales);

/**
 * @swagger
 * /condicionFiscal/{id}:
 *   get:
 *     summary: Obtener CondicionFiscal por id
 *     tags: [CondicionFiscal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CondicionFiscal id
 *     responses:
 *       200:
 *         description: CondicionFiscals encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CondicionFiscal'
 *       404:
 *         description: CondicionFiscal no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CondicionFiscal no encontrada"
 *       500:
 *         description: Error al obtener CondicionFiscals
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener CondicionFiscal."
 */
router.get('/:id', getCondicionFiscalById);

/**
 * @openapi
 * /condicionFiscal:
 *   post:
 *     summary: Creacion de condicionFiscal
 *     description: Endpoint para crear un nuevo condicionFiscal.
 *     tags: [CondicionFiscal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Condicion Fiscal
 *                 example: Monotributista
 *     responses:
 *       201:
 *         description: condicionFiscal creado exitosamente
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
 *                 message: "condicionFiscal creado exitosamente"
 *                 data:
 *                   id: 1
 *                   nombre: "Monotributista"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un condicionFiscal ya esxistente.
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
 *         description: Error al crear condicionFiscal.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear condicionFiscal."
 */
router.post('/', createCondicionFiscal);

/**
 * @swagger
 * /condicionFiscal/{id}:
 *   put:
 *     summary: Edicion de condicionFiscal por id
 *     tags: [CondicionFiscal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CondicionFiscal id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CondicionFiscal'
 *     responses:
 *       200:
 *         description: CondicionFiscal actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CondicionFiscal'
 *       404:
 *         description: CondicionFiscal no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CondicionFiscal no encontrada."
 *       500:
 *         description: Error al actualizar condicionFiscal.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar condicionFiscal."
 */
router.put('/:id', updateCondicionFiscal);

/**
 * @swagger
 * /condicionFiscal/{id}:
 *   delete:
 *     summary: Eliminar una condicionFiscal por id
 *     tags: [CondicionFiscal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CondicionFiscal id
 *     responses:
 *       200:
 *         description: CondicionFiscal eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CondicionFiscal eliminada exitosamente."
 *       404:
 *         description: CondicionFiscal no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CondicionFiscal no encontrada."
 *       500:
 *         description: Error al eliminar condicionFiscal.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar condicionFiscal."
 */
router.delete('/:id', deleteCondicionFiscal);

module.exports = router;
