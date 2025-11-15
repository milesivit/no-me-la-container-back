const express = require('express');
const router = express.Router();
const { 
    getCargasContainer,
    getCargaContainerById,
    createCargaContainer,
    updateCargaContainer,
    deleteCargaContainer,
} = require('../controllers/cargaConteiner.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     CargaContainer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de la carga del contenedor
 *         container_id:
 *           type: integer
 *           description: Id del contenedor al que pertenece la carga
 *         descripcion:
 *           type: string
 *           description: Descripción de la carga
 *         cantidad:
 *           type: integer
 *           description: Cantidad de unidades en la carga
 *         peso:
 *           type: number
 *           format: float
 *           description: Peso total de la carga
 *         categoria_carga_id:
 *           type: integer
 *           description: Categoría de la carga
 *         observaciones:
 *           type: string
 *           description: Observaciones adicionales
 *       example:
 *         id: 1
 *         container_id: 5
 *         descripcion: "Cajas de repuestos"
 *         cantidad: 100
 *         peso: 250.5
 *         categoria_carga_id: 3
 *         observaciones: "Carga frágil"
 */
/**
 * @swagger
 * tags:
 *   name: CargaContainer
 *   description: Documentacion acerca de los distintos CargaContainers
 */
/**
 * @swagger
 * /CargaContainer:
 *   get:
 *     summary: Obtener todos los CargaContainers
 *     tags: [CargaContainer]
 *     responses:
 *       200:
 *         description: CargaContainers encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CargaContainer'
 *       500:
 *         description: Error al obtener CargaContainers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener CargaContainer."
 */
router.get('/', getCargasContainer);

/**
 * @swagger
 * /CargaContainer/{id}:
 *   get:
 *     summary: Obtener CargaContainer por id
 *     tags: [CargaContainer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CargaContainer id
 *     responses:
 *       200:
 *         description: CargaContainer encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CargaContainer'
 *       404:
 *         description: CargaContainer no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CargaContainer no encontrado"
 *       500:
 *         description: Error al obtener CargaContainer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener CargaContainer."
 */
router.get('/:id', getCargaContainerById);

/**
 * @openapi
 * /CargaContainer:
 *   post:
 *     summary: Creacion de CargaContainer
 *     description: Endpoint para crear un nuevo CargaContainer.
 *     tags: [CargaContainer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               container_id:
 *                 type: integer
 *                 example: 5
 *               descripcion:
 *                 type: string
 *                 example: "Cajas de herramientas"
 *               cantidad:
 *                 type: integer
 *                 example: 50
 *               peso:
 *                 type: number
 *                 format: float
 *                 example: 120.5
 *               categoria_carga_id:
 *                 type: integer
 *                 example: 2
 *               observaciones:
 *                 type: string
 *                 example: "Revisión pendiente"
 *     responses:
 *       201:
 *         description: CargaContainer creado exitosamente
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
 *                   $ref: '#/components/schemas/CargaContainer'
 *               example:
 *                 status: 201
 *                 message: "CargaContainer creado exitosamente"
 *                 data:
 *                   id: 2
 *                   container_id: 5
 *                   descripcion: "Cajas de herramientas"
 *                   cantidad: 50
 *                   peso: 120.5
 *                   categoria_carga_id: 2
 *                   observaciones: "Revisión pendiente"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos obligatorios o intento de crear un CargaContainer ya existente.
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
 *         description: Error al crear CargaContainer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear CargaContainer."
 */
router.post('/', createCargaContainer);

/**
 * @swagger
 * /CargaContainer/{id}:
 *   put:
 *     summary: Edicion de CargaContainer por id
 *     tags: [CargaContainer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CargaContainer id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CargaContainer'
 *     responses:
 *       200:
 *         description: CargaContainer actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CargaContainer'
 *       404:
 *         description: CargaContainer no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CargaContainer no encontrado."
 *       500:
 *         description: Error al actualizar CargaContainer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar CargaContainer."
 */
router.put('/:id', updateCargaContainer);

/**
 * @swagger
 * /CargaContainer/{id}:
 *   delete:
 *     summary: Eliminar un CargaContainer por id
 *     tags: [CargaContainer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CargaContainer id
 *     responses:
 *       200:
 *         description: CargaContainer eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CargaContainer eliminado exitosamente."
 *       404:
 *         description: CargaContainer no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CargaContainer no encontrado."
 *       500:
 *         description: Error al eliminar CargaContainer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar CargaContainer."
 */
router.delete('/:id', deleteCargaContainer);

module.exports = router;
