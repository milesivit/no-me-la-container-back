const express = require('express');
const router = express.Router();
const { 
    getPaises,
    getPaisById,
    createPais,
    updatePais,
    deletePais
} = require('../controllers/pais.controller');

/**
 * @swagger
 * components:
 *   schemas:
*     Pais:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Pais
 *         nombre:
 *           type: string
 *           description: Nombre del pais
 *         codigo_iso:
 *           type: string
 *           description: Codigo ISO del pais tipo alfa-2
 *       example:
 *         id: 1
 *         nombre: "Argentina"
 *         codigo_iso: "AR"
 */
/**
 * @swagger
 * tags:
 *   name: Pais
 *   description: Documentacion acerca de los distintos paiss
 */
/**
 * @swagger
 * /pais:
 *   get:
 *     summary: Obtener todos los paises
 *     tags: [Pais]
 *     responses:
 *       200:
 *         description: Pais encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pais'
 *       500:
 *         description: Error al obtener Pais
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Pais."
 */
router.get('/', getPaises);

/**
 * @swagger
 * /pais/{id}:
 *   get:
 *     summary: Obtener pais por id
 *     tags: [Pais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pais id
 *     responses:
 *       200:
 *         description: Pais encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pais'
 *       404:
 *         description: Pais no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pais no encontrado"
 *       500:
 *         description: Error al obtener Pais
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Pais."
 */
router.get('/:id', getPaisById);

/**
 * @openapi
 * /pais:
 *   post:
 *     summary: Creacion de pais
 *     description: Endpoint para crear un nuevo pais.
 *     tags: [Pais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de pais
 *                 example: Brasil
 *               codigo_iso:
 *                 type: string
 *                 description: Codigo ISO de pais
 *                 example: BR
 *     responses:
 *       201:
 *         description: Pais creado exitosamente
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
 *                     codigo_iso:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "pais creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Brasil"
 *                   codigo_iso: "BR"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un pais ya esxistente.
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
 *         description: Error al crear pais.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear pais."
 */
router.post('/', createPais);
/**
 * @swagger
 * /pais/{id}:
 *   put:
 *     summary: Edicion de pais por id
 *     tags: [Pais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pais id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pais'
 *     responses:
 *       200:
 *         description: Pais actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pais'
 *       404:
 *         description: Pais no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pais no encontrado."
 *       500:
 *         description: Error al actualizar pais.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar pais."
 */
router.put('/:id', updatePais);

/**
 * @swagger
 * /pais/{id}:
 *   delete:
 *     summary: Eliminar un pais por id
 *     tags: [Pais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pais id
 *     responses:
 *       200:
 *         description: Pais eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pais eliminado exitosamente."
 *       404:
 *         description: Pais no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Pais no encontrado."
 *       500:
 *         description: Error al eliminar pais.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar pais."
 */
router.delete('/:id', deletePais);

module.exports = router;
