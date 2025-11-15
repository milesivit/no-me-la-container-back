const express = require('express');
const router = express.Router();
const { 
    getCategoriasCarga,
    getCategoriaCargaById,
    createCategoriaCarga,
    updateCategoriaCarga,
    deleteCategoriaCarga
} = require('../controllers/categoriaCarga.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     CategoriaCarga:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de CategoriaCarga
 *         nombre:
 *           type: string
 *           description: Nombre de la categoriaCarga
 *       example:
 *         id: 1
 *         nombre: "Pesada"
 */
/**
 * @swagger
 * tags:
 *   name: CategoriaCarga
 *   description: Documentacion acerca de las distintnas categoriaCargas
 */
/**
 * @swagger
 * /categoriaCarga:
 *   get:
 *     summary: Obtener todas las CategoriaCargas
 *     tags: [CategoriaCarga]
 *     responses:
 *       200:
 *         description: CategoriaCargas encontradas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoriaCarga'
 *       500:
 *         description: Error al obtener CategoriaCarga
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener categoria de carga."
 */
router.get('/', getCategoriasCarga);

/**
 * @swagger
 * /categoriaCarga/{id}:
 *   get:
 *     summary: Obtener CategoriaCarga por id
 *     tags: [CategoriaCarga]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CategoriaCarga id
 *     responses:
 *       200:
 *         description: CategoriaCargas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoriaCarga'
 *       404:
 *         description: CategoriaCarga no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CategoriaCarga no encontrado"
 *       500:
 *         description: Error al obtener CategoriaCargas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener CategoriaCarga."
 */
router.get('/:id', getCategoriaCargaById);

/**
 * @openapi
 * /categoriaCarga:
 *   post:
 *     summary: Creacion de categoriaCarga
 *     description: Endpoint para crear una nueva categoriaCarga.
 *     tags: [CategoriaCarga]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de categoria de carga
 *                 example: estandar
 *     responses:
 *       201:
 *         description: categoriaCarga creado exitosamente
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
 *                 message: "categoriaCarga creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "estandar"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear una categoriaCarga ya esxistente.
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
 *         description: Error al crear categoriaCarga.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear categoriaCarga."
 */
router.post('/', createCategoriaCarga);

/**
 * @swagger
 * /categoriaCarga/{id}:
 *   put:
 *     summary: Edicion de categoriaCarga por id
 *     tags: [CategoriaCarga]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CategoriaCarga id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoriaCarga'
 *     responses:
 *       200:
 *         description: CategoriaCarga actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoriaCarga'
 *       404:
 *         description: CategoriaCarga no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CategoriaCarga no encontrado."
 *       500:
 *         description: Error al actualizar categoriaCarga.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar categoriaCarga."
 */
router.put('/:id', updateCategoriaCarga);

/**
 * @swagger
 * /categoriaCarga/{id}:
 *   delete:
 *     summary: Eliminar una categoriaCarga por id
 *     tags: [CategoriaCarga]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CategoriaCarga id
 *     responses:
 *       200:
 *         description: CategoriaCarga eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CategoriaCarga eliminada exitosamente."
 *       404:
 *         description: CategoriaCarga no encontrad.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "CategoriaCarga no encontrado."
 *       500:
 *         description: Error al eliminar categoriaCarga.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar categoriaCarga."
 */
router.delete('/:id', deleteCategoriaCarga);

module.exports = router;
