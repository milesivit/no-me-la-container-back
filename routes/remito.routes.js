const express = require('express');
const router = express.Router();
const { 
    getRemitos,
    getRemitoById,
    createRemito,
    updateRemito,
    deleteRemito
} = require('../controllers/remito.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Remito:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Remito
 *         nroRemito:
 *           type: string
 *           description: Número del remito
 *         clienteId:
 *           type: integer
 *           description: Id del cliente
 *         viajeId:
 *           type: integer
 *           description: Id del viaje
 *         viajeContainerId:
 *           type: integer
 *           description: Id del contenedor del viaje
 *         descripcion:
 *           type: string
 *           description: Descripción del remito
 *         firmaReceptor:
 *           type: string
 *           description: Firma del receptor
 *         create_at:
 *           type: string
 *           format: date
 *           description: Fecha de creación
 *       example:
 *         id: 1
 *         nroRemito: "REM-00001"
 *         clienteId: 1
 *         viajeId: 2
 *         viajeContainerId: 1
 *         descripcion: "FRÁGIL - NO APILAR"
 *         firmaReceptor: "Firmado"
 *         create_at: "2024-11-12"
 */

/**
 * @swagger
 * tags:
 *   name: Remito
 *   description: Documentacion acerca de los distintos remitos
 */

/**
 * @swagger
 * /remito:
 *   get:
 *     summary: Obtener todos los Remitos
 *     tags: [Remito]
 *     responses:
 *       200:
 *         description: Remitos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Remito'
 *       500:
 *         description: Error al obtener Remitos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Remito."
 */
router.get('/', getRemitos);

/**
 * @swagger
 * /remito/{id}:
 *   get:
 *     summary: Obtener Remito por id
 *     tags: [Remito]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Remito id
 *     responses:
 *       200:
 *         description: Remito encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Remito'
 *       404:
 *         description: Remito no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Remito no encontrado"
 *       500:
 *         description: Error al obtener Remito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Remito."
 */
router.get('/:id', getRemitoById);

/**
 * @swagger
 * /remito:
 *   post:
 *     summary: Creación de remito
 *     description: Endpoint para crear un nuevo remito.
 *     tags: [Remito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nroRemito:
 *                 type: string
 *                 description: Número del remito
 *                 example: "REM-00001"
 *               clienteId:
 *                 type: integer
 *                 description: Id del cliente
 *                 example: 1
 *               viajeId:
 *                 type: integer
 *                 description: Id del viaje
 *                 example: 2
 *               viajeContainerId:
 *                 type: integer
 *                 description: Id del contenedor del viaje
 *                 example: 1
 *               descripcion:
 *                 type: string
 *                 description: Descripción del remito
 *                 example: "FRÁGIL - NO APILAR"
 *               firmaReceptor:
 *                 type: string
 *                 description: Firma del receptor
 *                 example: "Firmado"
 *               create_at:
 *                 type: string
 *                 format: date
 *                 description: Fecha de creación
 *                 example: "2024-11-12"
 *     responses:
 *       201:
 *         description: Remito creado exitosamente
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
 *                     nroRemito:
 *                       type: string
 *                     clienteId:
 *                       type: integer
 *                     viajeId:
 *                       type: integer
 *                     viajeContainerId:
 *                       type: integer
 *                     descripcion:
 *                       type: string
 *                     firmaReceptor:
 *                       type: string
 *                     create_at:
 *                       type: string
 *                       format: date
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "Remito creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nroRemito: "REM-00001"
 *                   clienteId: 1
 *                   viajeId: 2
 *                   viajeContainerId: 1
 *                   descripcion: "FRÁGIL - NO APILAR"
 *                   firmaReceptor: "Firmado"
 *                   create_at: "2024-11-12"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error de validación
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
 *         description: Error al crear remito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear remito."
 */
router.post('/', createRemito);

/**
 * @swagger
 * /remito/{id}:
 *   put:
 *     summary: Edición de remito por id
 *     tags: [Remito]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Remito id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Remito'
 *     responses:
 *       200:
 *         description: Remito actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Remito'
 *       404:
 *         description: Remito no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Remito no encontrado."
 *       500:
 *         description: Error al actualizar remito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar remito."
 */
router.put('/:id', updateRemito);

/**
 * @swagger
 * /remito/{id}:
 *   delete:
 *     summary: Eliminar un remito por id
 *     tags: [Remito]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Remito id
 *     responses:
 *       200:
 *         description: Remito eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Remito eliminado exitosamente."
 *       404:
 *         description: Remito no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Remito no encontrado."
 *       500:
 *         description: Error al eliminar remito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar remito."
 */
router.delete('/:id', deleteRemito);

module.exports = router;
