const express = require('express');
const router = express.Router();
const { 
    getCargos,
    getCargoById,
    createCargo,
    updateCargo,
    deleteCargo
} = require('../controllers/cargo.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cargo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Cargo
 *         nombre:
 *           type: string
 *           description: Nombre del cargo
 *       example:
 *         id: 1
 *         nombre: "Capitan"
 */

/**
 * @swagger
 * tags:
 *   name: Cargo
 *   description: Documentacion acerca de los distintos cargos de los empleados
 */

/**
 * @swagger
 * /cargo:
 *   get:
 *     summary: Obtener todos los Cargos
 *     tags: [Cargo]
 *     responses:
 *       200:
 *         description: Cargos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cargo'
 *       500:
 *         description: Error al obtener Cargos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Cargo."
 */
router.get('/', getCargos);

/**
 * @swagger
 * /cargo/{id}:
 *   get:
 *     summary: Obtener Cargo por id
 *     tags: [Cargo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cargo id
 *     responses:
 *       200:
 *         description: Cargos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cargo'
 *       404:
 *         description: Cargo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cargo no encontrado"
 *       500:
 *         description: Error al obtener Cargos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Cargo."
 */
router.get('/:id', getCargoById);

/**
 * @openapi
 * /cargo:
 *   post:
 *     summary: Creacion de cargo
 *     description: Endpoint para crear un nuevo cargo.
 *     tags: [Cargo]
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
 *                 example: Timonel
 *     responses:
 *       201:
 *         description: cargo creado exitosamente
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
 *                 message: "cargo creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Timonel"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un cargo ya esxistente.
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
 *         description: Error al crear cargo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear cargo."
 */
router.post('/', createCargo);

/**
 * @swagger
 * /cargo/{id}:
 *   put:
 *     summary: Edicion de cargo por id
 *     tags: [Cargo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cargo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cargo'
 *     responses:
 *       200:
 *         description: Cargo actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cargo'
 *       404:
 *         description: Cargo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cargo no encontrado."
 *       500:
 *         description: Error al actualizar cargo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar cargo."
 */
router.put('/:id', updateCargo);

/**
 * @swagger
 * /cargo/{id}:
 *   delete:
 *     summary: Eliminar un cargo por id
 *     tags: [Cargo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cargo id
 *     responses:
 *       200:
 *         description: Cargo eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cargo eliminado exitosamente."
 *       404:
 *         description: Cargo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cargo no encontrado."
 *       500:
 *         description: Error al eliminar cargo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar cargo."
 */
router.delete('/:id', deleteCargo);

module.exports = router;
