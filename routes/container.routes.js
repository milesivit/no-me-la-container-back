const express = require('express');
const router = express.Router();
const { 
    getContainers,
    getContainerById,
    createContainer,
    updateContainer,
    deleteContainer
} = require('../controllers/container.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Container:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Container
 *         codigo:
 *           type: string
 *           description: Codigo del container
 *         capacidad_max:
 *           type: float
 *           description: Capacidad de carga maxima del container
 *         container_estado_id:
 *           type: integer
 *           description: Estado del container
 *       example:
 *         id: 1
 *         codigo: "CT-00001"
 *         capacidad_max: 5000
 *         container_estado_id: 2
 */
/**
 * @swagger
 * tags:
 *   name: Container
 *   description: Documentacion acerca del manejo de containers
 */
/**
 * @swagger
 * /container:
 *   get:
 *     summary: Obtener todos los Containers
 *     tags: [Container]
 *     responses:
 *       200:
 *         description: Containers encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Container'
 *       500:
 *         description: Error al obtener Containers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Container."
 */
router.get('/', getContainers);

/**
 * @swagger
 * /container/{id}:
 *   get:
 *     summary: Obtener Container por id
 *     tags: [Container]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Container id
 *     responses:
 *       200:
 *         description: Containers encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Container'
 *       404:
 *         description: Container no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Container no encontrado"
 *       500:
 *         description: Error al obtener Containers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Container."
 */
router.get('/:id', getContainerById);

/**
 * @openapi
 * /container:
 *   post:
 *     summary: Creacion de container
 *     description: Endpoint para crear un nuevo container.
 *     tags: [Container]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *                 description: Codigo del container
 *                 example: CT-00001
 *               capacidad_max:
 *                 type: float
 *                 description: Capacidad de carga maxima del container
 *                 example: 5000
 *               container_estado_id:
 *                 type: integer
 *                 description: Estado del container
 *                 example: 1
 *     responses:
 *       201:
 *         description: container creado exitosamente
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
 *                     codigo:
 *                       type: string
 *                     capacidad_max:
 *                       type: float
 *                     container_estado_id:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "container creado exitosamente"
 *                 data:
 *                   id: 2
 *                   codigo: "CT-00001"
 *                   capacidad_max: 5000
 *                   container_estado_id: 1
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un container ya esxistente.
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
 *         description: Error al crear container.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear container."
 */
router.post('/', createContainer);

/**
 * @swagger
 * /container/{id}:
 *   put:
 *     summary: Edicion de container por id
 *     tags: [Container]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Container id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Container'
 *     responses:
 *       200:
 *         description: Container actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Container'
 *       404:
 *         description: Container no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Container no encontrado."
 *       500:
 *         description: Error al actualizar container.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar container."
 */
router.put('/:id', updateContainer);

/**
 * @swagger
 * /container/{id}:
 *   delete:
 *     summary: Eliminar un container por id
 *     tags: [Container]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Container id
 *     responses:
 *       200:
 *         description: Container eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Container eliminado exitosamente."
 *       404:
 *         description: Container no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Container no encontrado."
 *       500:
 *         description: Error al eliminar container.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar container."
 */
router.delete('/:id', deleteContainer);

module.exports = router;
