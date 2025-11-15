const express = require('express');
const router = express.Router();
const { 
    getServiciosAgregados,
    getServicioAgregadoById,
    createServicioAgregado,
    updateServicioAgregado,
    deleteServicioAgregado,
} = require('../controllers/servicioAgregado.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ServicioAgergado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de ServicioAgergado
 *         nombre:
 *           type: string
 *           description: Nombre del servicioAgergado
 *         codServicio:
 *           type: string
 *           description: Codigo del servicioAgergado
 *         coste:
 *           type: float
 *           description: Costo del servicioAgergado
 *       example:
 *         id: 1
 *         nombre: "Capitan Colo"
 *         codServicio: "SER-00001"
 *         coste: 500
 */
/**
 * @swagger
 * tags:
 *   name: ServicioAgergado
 *   description: Documentacion acerca de los distintos servicioAgergados
 */
/**
 * @swagger
 * /servicioagregado:
 *   get:
 *     summary: Obtener todos los ServicioAgergados
 *     tags: [ServicioAgergado]
 *     responses:
 *       200:
 *         description: ServicioAgergados encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServicioAgergado'
 *       500:
 *         description: Error al obtener ServicioAgergados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ServicioAgergado."
 */
router.get('/', getServiciosAgregados);

/**
 * @swagger
 * /servicioagregado/{id}:
 *   get:
 *     summary: Obtener ServicioAgergado por id
 *     tags: [ServicioAgergado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ServicioAgergado id
 *     responses:
 *       200:
 *         description: ServicioAgergados encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServicioAgergado'
 *       404:
 *         description: ServicioAgergado no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ServicioAgergado no encontrado"
 *       500:
 *         description: Error al obtener ServicioAgergados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ServicioAgergado."
 */
router.get('/:id', getServicioAgregadoById);

/**
 * @openapi
 * /servicioagregado:
 *   post:
 *     summary: Creacion de servicioAgergado
 *     description: Endpoint para crear un nuevo servicioAgergado.
 *     tags: [ServicioAgergado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de servicioAgergado
 *                 example: "Capitan Colo"
 *               codServicio:
 *                 type: string
 *                 description: Nombre de servicioAgergado
 *                 example: "SER-00002"
 *               coste:
 *                 type: float
 *                 description: Costo de servicioAgergado
 *                 example: 500
 *     responses:
 *       201:
 *         description: servicioAgergado creado exitosamente
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
 *                     codServicio:
 *                       type: string
 *                     coste:
 *                       type: float
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "servicioAgergado creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Capitan Colo"
 *                   codServicio: "SER-00002"
 *                   Csote: 500
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
 *         description: Error al crear servicioAgergado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear servicioAgergado."
 */
router.post('/', createServicioAgregado);

/**
 * @swagger
 * /servicioagregado/{id}:
 *   put:
 *     summary: Edicion de servicioAgergado por id
 *     tags: [ServicioAgergado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ServicioAgergado id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServicioAgergado'
 *     responses:
 *       200:
 *         description: ServicioAgergado actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServicioAgergado'
 *       404:
 *         description: ServicioAgergado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ServicioAgergado no encontrado."
 *       500:
 *         description: Error al actualizar servicioAgergado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar servicioAgergado."
 */
router.put('/:id', updateServicioAgregado);

/**
 * @swagger
 * /servicioagregado/{id}:
 *   delete:
 *     summary: Eliminar un servicioAgergado por id
 *     tags: [ServicioAgergado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ServicioAgergado id
 *     responses:
 *       200:
 *         description: ServicioAgergado eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ServicioAgergado eliminado exitosamente."
 *       404:
 *         description: ServicioAgergado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ServicioAgergado no encontrado."
 *       500:
 *         description: Error al eliminar servicioAgergado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar servicioAgergado."
 */
router.delete('/:id', deleteServicioAgregado);

module.exports = router;
