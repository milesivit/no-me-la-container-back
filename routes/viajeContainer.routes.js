const express = require('express');
const router = express.Router();
const { 
    getViajeContainers,
    getViajeContainerById,
    createViajeContainer,
    updateViajeContainer,
    deleteViajeContainer
} = require('../controllers/viajeContainer.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ViajeContainer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del registro ViajeContainer
 *         viajeId:
 *           type: integer
 *           description: ID del viaje asociado
 *         containerId:
 *           type: integer
 *           description: ID del container asociado
 *         cargaContainerId:
 *           type: integer
 *           description: ID de la carga del container
 *       example:
 *         id: 1
 *         viajeId: 10
 *         containerId: 5
 *         cargaContainerId: 3
 */

/**
 * @swagger
 * tags:
 *   name: ViajeContainer
 *   description: Documentación de los ViajeContainers
 */


/**
 * @swagger
 * /viajecontainer:
 *   get:
 *     summary: Obtener todos los ViajeContainers
 *     tags: [ViajeContainer]
 *     responses:
 *       200:
 *         description: ViajeContainers encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeContainer'
 *       500:
 *         description: Error al obtener ViajeContainers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ViajeContainer."
 */
router.get('/', getViajeContainers);


/**
 * @swagger
 * /viajecontainer/{id}:
 *   get:
 *     summary: Obtener ViajeContainer por id
 *     tags: [ViajeContainer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de ViajeContainer
 *     responses:
 *       200:
 *         description: ViajeContainers encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeContainer'
 *       404:
 *         description: ViajeContainer no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeContainer no encontrado"
 *       500:
 *         description: Error al obtener ViajeContainers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ViajeContainer."
 */
router.get('/:id', getViajeContainerById);


/**
 * @openapi
 * /viajecontainer:
 *   post:
 *     summary: Creación de ViajeContainer
 *     description: Endpoint para crear un nuevo ViajeContainer.
 *     tags: [ViajeContainer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               viajeId:
 *                 type: integer
 *                 description: ID del viaje asociado
 *                 example: 10
 *               containerId:
 *                 type: integer
 *                 description: ID del container asociado
 *                 example: 5
 *               cargaContainerId:
 *                 type: integer
 *                 description: ID de la carga del container
 *                 example: 3
 *     responses:
 *       201:
 *         description: viajeContainer creado exitosamente
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
 *                   $ref: '#/components/schemas/ViajeContainer'
 *               example:
 *                 status: 201
 *                 message: "viajeContainer creado exitosamente"
 *                 data:
 *                   id: 2
 *                   viajeId: 10
 *                   containerId: 5
 *                   cargaContainerId: 3
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
 *         description: Error al crear viajeContainer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear viajeContainer."
 */
router.post('/', createViajeContainer);


/**
 * @swagger
 * /viajecontainer/{id}:
 *   put:
 *     summary: Edición de ViajeContainer por id
 *     tags: [ViajeContainer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de ViajeContainer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ViajeContainer'
 *     responses:
 *       200:
 *         description: ViajeContainer actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeContainer'
 *       404:
 *         description: ViajeContainer no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeContainer no encontrado."
 *       500:
 *         description: Error al actualizar viajeContainer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar viajeContainer."
 */
router.put('/:id', updateViajeContainer);


/**
 * @swagger
 * /viajecontainer/{id}:
 *   delete:
 *     summary: Eliminar un ViajeContainer por id
 *     tags: [ViajeContainer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del ViajeContainer
 *     responses:
 *       200:
 *         description: ViajeContainer eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeContainer eliminado exitosamente."
 *       404:
 *         description: ViajeContainer no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeContainer no encontrado."
 *       500:
 *         description: Error al eliminar viajeContainer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar viajeContainer."
 */
router.delete('/:id', deleteViajeContainer);

module.exports = router;
