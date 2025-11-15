const express = require('express');
const router = express.Router();
const { 
    getBarcos,
    getBarcoById,
    createBarco,
    updateBarco,
    deleteBarco,
} = require('../controllers/barco.controller');

const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin')

/**
 * @swagger
 * components:
 *   schemas:
 *     Barco:
 *       type: object
 *       security:
 *         - bearerAuth: []
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Usuario
 *         nombre:
 *           type: string
 *           description: Nombre de usuario
 *         nroRegistro:
 *           type: string
 *           description: Nro de Registro del Barco
 *         nroMatricula:
 *           type: string
 *           description: Nro de Matricula del Barco
 *         modelo:
 *           type: string
 *           description: modelo del Barco
 *         constructura:
 *           type: string
 *           description: Contructora del Barco
 *         capacidadMaxContainer:
 *           type: integer
 *           description: Cantidad Maxima de Containers Transportables
 *       example:
 *         id: 1
 *         nombre: "El Navegante"
 *         nroRegistro: "IMO 9123456"
 *         nroMatricula: "PA-5678-B"
 *         modelo: "CargoMaster 3000"
 *         constructora: "Astilleros del Atlántico"
 *         capacidadMaxContainer: 8500
 */

/**
 * @swagger
 * tags:
 *   name: Barco
 *   description: Documentacion acerca del manejo del modelo Barco
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /barco:
 *   get:
 *     summary: Obtener todos los barcos
 *     tags: [Barco]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Barcos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Barco'
 *       500:
 *         description: Error al obtener barcos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener barco."
 */
router.get('/', verifyToken, getBarcos);

/**
 * @swagger
 * /barco/{id}:
 *   get:
 *     summary: Obtener barco por id
 *     tags: [Barco]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Barco id
 *     responses:
 *       200:
 *         description: Barcos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Barco'
 *       404:
 *         description: Barco no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Barco no encontrado"
 *       500:
 *         description: Error al obtener barcos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener barco."
 */
router.get('/:id', verifyToken, getBarcoById);

/**
 * @openapi
 * /barco:
 *   post:
 *     summary: Creacion de Barco
 *     description: Endpoint para crear un nuevo barco.
 *     tags: [Barco]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de usuario
 *                 example: Gigante del Pacífico
 *               nroRegistro:
 *                 type: string
 *                 description: Nro de Registro del Barco
  *                 example: IMO 8899001
 *               nroMatricula:
 *                 type: string
 *                 description: Nro de Matricula del Barco
 *                 example: MA-1122-C
 *               modelo:
 *                 type: string
 *                 description: modelo del Barco
 *                 example: Oceanic Series X
 *               constructura:
 *                 type: string
 *                 description: Contructora del Barco
 *                 example: Global Shipbuilders S.A.
 *               capacidadMaxContainer:
 *                 type: integer
 *                 description: Cantidad Maxima de Containers Transportables
 *                 example: 21000
 *     responses:
 *       201:
 *         description: Barco creado exitosamente
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
 *                     nroRegistro:
 *                       type: string
 *                     nroMatricula:
 *                       type: string
 *                     modelo:
 *                       type: string
 *                     constructura:
 *                       type: string
 *                       nullable: true
 *                     capacidadMaxContainer:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "Barco creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "El Navegante 2"
 *                   nroRegistro: "IMO 9123456"
 *                   nroMatricula: "PA-5677-B"
 *                   modelo: "CargoMaster 3000"
 *                   constructura: null
 *                   capacidadMaxContainer: 8500
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un barco ya esxistente.
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
 *         description: Error al crear barco.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear barco."
 */
router.post('/', verifyToken, isAdmin, createBarco);

/**
 * @swagger
 * /barco/{id}:
 *   put:
 *     summary: Edicion de barco por id
 *     tags: [Barco]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Barco id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Barco'
 *     responses:
 *       200:
 *         description: Barco actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Barco'
 *       404:
 *         description: Barco no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Barco no encontrado."
 *       500:
 *         description: Error al actualizar barco.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar barco."
 */
router.put('/:id', verifyToken, isAdmin, updateBarco);

/**
 * @swagger
 * /barco/{id}:
 *   delete:
 *     summary: Eliminar un barco por id
 *     tags: [Barco]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Barco id
 *     responses:
 *       200:
 *         description: Barco eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Barco eliminado exitosamente."
 *       404:
 *         description: Barco no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Barco no encontrado."
 *       500:
 *         description: Error al eliminar barco.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar barco."
 */
router.delete('/:id', verifyToken, isAdmin, deleteBarco);

module.exports = router;
