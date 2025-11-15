const express = require('express');
const router = express.Router();
const { 
    getSexos,
    getSexoById,
    createSexo,
    updateSexo,
    deleteSexo
} = require('../controllers/sexo.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Sexo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Sexo
 *         nombre:
 *           type: string
 *           description: Nombre del sexo
 *       example:
 *         id: 1
 *         nombre: "Masculino"
 */
/**
 * @swagger
 * tags:
 *   name: Sexo
 *   description: Documentacion acerca de los distintos sexos 
 */
/**
 * @swagger
 * /sexo:
 *   get:
 *     summary: Obtener todos los Sexos
 *     tags: [Sexo]
 *     responses:
 *       200:
 *         description: Sexos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sexo'
 *       500:
 *         description: Error al obtener Sexos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Sexo."
 */
router.get('/', getSexos);

/**
 * @swagger
 * /sexo/{id}:
 *   get:
 *     summary: Obtener Sexo por id
 *     tags: [Sexo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sexo id
 *     responses:
 *       200:
 *         description: Sexos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sexo'
 *       404:
 *         description: Sexo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Sexo no encontrado"
 *       500:
 *         description: Error al obtener Sexos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Sexo."
 */
router.get('/:id', getSexoById);

/**
 * @openapi
 * /sexo:
 *   post:
 *     summary: Creacion de sexo
 *     description: Endpoint para crear un nuevo sexo.
 *     tags: [Sexo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de sexo
 *                 example: Femenino
 *     responses:
 *       201:
 *         description: sexo creado exitosamente
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
 *                 message: "sexo creado exitosamente"
 *                 data:
 *                   id: 2
 *                   nombre: "Femenino"
 *                   updatedAt: "2025-11-12T04:45:49.227Z"
 *                   createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error Validacion. Puede ser error por falta de campos olbigatorios o intento de crear un sexo ya esxistente.
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
 *         description: Error al crear sexo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear sexo."
 */
router.post('/', createSexo);

/**
 * @swagger
 * /sexo/{id}:
 *   put:
 *     summary: Edicion de sexo por id
 *     tags: [Sexo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sexo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sexo'
 *     responses:
 *       200:
 *         description: Sexo actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sexo'
 *       404:
 *         description: Sexo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Sexo no encontrado."
 *       500:
 *         description: Error al actualizar sexo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar sexo."
 */
router.put('/:id', updateSexo);

/**
 * @swagger
 * /sexo/{id}:
 *   delete:
 *     summary: Eliminar un sexo por id
 *     tags: [Sexo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sexo id
 *     responses:
 *       200:
 *         description: Sexo eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Sexo eliminado exitosamente."
 *       404:
 *         description: Sexo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Sexo no encontrado."
 *       500:
 *         description: Error al eliminar sexo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar sexo."
 */
router.delete('/:id', deleteSexo);

module.exports = router;
