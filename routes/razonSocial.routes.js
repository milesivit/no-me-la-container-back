const express = require('express');
const router = express.Router();
const { 
    getRazonSociales,
    getRazonSocialById,
    createRazonSocial,
    updateRazonSocial,
    deleteRazonSocial
} = require('../controllers/razonSocial.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     RazonSocial:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de RazonSocial
 *         nombre:
 *           type: string
 *           description: Nombre de la razon social
 *       example:
 *         id: 1
 *         nombre: "Logística del Sur S.A."
 */
/**
 * @swagger
 * tags:
 *   name: RazonSocial
 *   description: Documentacion acerca de Razon Social
 */
/**
 * @swagger
 * /razonSocial:
 *   get:
 *     summary: Obtener todas las Razonwa Sociales
 *     tags: [RazonSocial]
 *     responses:
 *       200:
 *         description: RazonSocial encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RazonSocial'
 *       500:
 *         description: Error al obtener RazonSocial
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener RazonSocial."
 */
router.get('/', getRazonSociales);

/**
 * @swagger
 * /razonSocial/{id}:
 *   get:
 *     summary: Obtener RazonSocial por id
 *     tags: [RazonSocial]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: RazonSocial id
 *     responses:
 *       200:
 *         description: RazonSocial encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RazonSocial'
 *       404:
 *         description: RazonSocial no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "RazonSocial no encontrada"
 *       500:
 *         description: Error al obtener RazonSocial
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener RazonSocial."
 */
router.get('/:id', getRazonSocialById);

/**
 * @openapi
 * /razonSocial:
 *   post:
 *     summary: Creacion de razonSocial
 *     description: Endpoint para crear un nuevo razonSocial.
 *     tags: [RazonSocial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Razon Social
 *                 example: Transporte Patagónico S.A.
 *     responses:
 *       201:
 *         description: razonSocial creada exitosamente
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
 *                 message: "Razon Social creada exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Transporte Patagónico S.A."
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un razonSocial ya esxistente.
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
 *         description: Error al crear razon social.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear razon social."
 */
router.post('/', createRazonSocial);

/**
 * @swagger
 * /razonSocial/{id}:
 *   put:
 *     summary: Edicion de razon social por id
 *     tags: [RazonSocial]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: RazonSocial id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RazonSocial'
 *     responses:
 *       200:
 *         description: Razon social actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RazonSocial'
 *       404:
 *         description: Razon social no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Razon social no encontrada."
 *       500:
 *         description: Error al actualizar razonSocial.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar razon social."
 */
router.put('/:id', updateRazonSocial);

/**
 * @swagger
 * /razonSocial/{id}:
 *   delete:
 *     summary: Eliminar un razonSocial por id
 *     tags: [RazonSocial]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: RazonSocial id
 *     responses:
 *       200:
 *         description: Razon social eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Razon social eliminado exitosamente."
 *       404:
 *         description: Razon social no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Razon social no encontrada."
 *       500:
 *         description: Error al eliminar razonSocial.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar razon social."
 */
router.delete('/:id', deleteRazonSocial);

module.exports = router;
