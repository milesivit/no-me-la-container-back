const express = require('express');
const router = express.Router();
const { 
    getContainerEstados,
    getContainerEstadoById,
    createContainerEstado,
    updateContainerEstado,
    deleteContainerEstado
} = require('../controllers/containerEstado.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ContainerEstado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de ContainerEstado
 *         nombre:
 *           type: string
 *           description: Nombre del containerEstado
 *       example:
 *         id: 1
 *         nombre: "Reservado"
 */
/**
 * @swagger
 * tags:
 *   name: ContainerEstado
 *   description: Documentacion acerca de los distintos containerEstados
 */
/**
 * @swagger
 * /containerEstado:
 *   get:
 *     summary: Obtener todos los ContainerEstados
 *     tags: [ContainerEstado]
 *     responses:
 *       200:
 *         description: ContainerEstados encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContainerEstado'
 *       500:
 *         description: Error al obtener ContainerEstados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ContainerEstado."
 */
router.get('/', getContainerEstados);

/**
 * @swagger
 * /containerEstado/{id}:
 *   get:
 *     summary: Obtener ContainerEstado por id
 *     tags: [ContainerEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ContainerEstado id
 *     responses:
 *       200:
 *         description: ContainerEstados encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContainerEstado'
 *       404:
 *         description: ContainerEstado no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ContainerEstado no encontrado"
 *       500:
 *         description: Error al obtener ContainerEstados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ContainerEstado."
 */
router.get('/:id', getContainerEstadoById);

/**
 * @openapi
 * /containerEstado:
 *   post:
 *     summary: Creacion de containerEstado
 *     description: Endpoint para crear un nuevo containerEstado.
 *     tags: [ContainerEstado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Container Estado
 *                 example: Reservado
 *     responses:
 *       201:
 *         description: containerEstado creado exitosamente
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
 *                 message: "containerEstado creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Reservado"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un containerEstado ya esxistente.
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
 *         description: Error al crear containerEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear containerEstado."
 */
router.post('/', createContainerEstado);

/**
 * @swagger
 * /containerEstado/{id}:
 *   put:
 *     summary: Edicion de containerEstado por id
 *     tags: [ContainerEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ContainerEstado id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContainerEstado'
 *     responses:
 *       200:
 *         description: ContainerEstado actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContainerEstado'
 *       404:
 *         description: ContainerEstado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ContainerEstado no encontrado."
 *       500:
 *         description: Error al actualizar containerEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar containerEstado."
 */
router.put('/:id', updateContainerEstado);

/**
 * @swagger
 * /containerEstado/{id}:
 *   delete:
 *     summary: Eliminar un containerEstado por id
 *     tags: [ContainerEstado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ContainerEstado id
 *     responses:
 *       200:
 *         description: ContainerEstado eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ContainerEstado eliminado exitosamente."
 *       404:
 *         description: ContainerEstado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ContainerEstado no encontrado."
 *       500:
 *         description: Error al eliminar containerEstado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar containerEstado."
 */
router.delete('/:id', deleteContainerEstado);

module.exports = router;
