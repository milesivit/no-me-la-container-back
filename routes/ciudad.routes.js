const express = require('express');
const router = express.Router();
const { 
    getCiudades, 
    getCiudadById, 
    createCiudad, 
    updateCiudad, 
    deleteCiudad 
} = require('../controllers/ciudad.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Ciudad:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Ciudad
 *         nombre:
 *           type: string
 *           description: Nombre de la ciudad
 *         pais_id:
 *           type: integer
 *           description: País donde pertenece la ciudad
 *         latitud:
 *           type: number
 *           format: float
 *           description: Latitud de la ciudad
 *         longitud:
 *           type: number
 *           format: float
 *           description: Longitud de la ciudad
 *         openweather_id:
 *           type: integer
 *           description: Id de la ciudad en la API del Clima
 *       example:
 *         id: 1
 *         nombre: "Buenos Aires"
 *         pais_id: 1
 *         latitud: -34.6132
 *         longitud: -58.3772
 *         openweather_id: 3435910
 */
/**
 * @swagger
 * tags:
 *   name: Ciudad
 *   description: Documentación acerca de las distintas ciudades
 */
/**
 * @swagger
 * /ciudad:
 *   get:
 *     summary: Obtener todas las Ciudades
 *     tags: [Ciudad]
 *     responses:
 *       200:
 *         description: Ciudades encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ciudad'
 *       500:
 *         description: Error al obtener Ciudades
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener Ciudad."
 */
router.get('/', getCiudades);

/**
 * @swagger
 * /ciudad/{id}:
 *   get:
 *     summary: Obtener Ciudad por id
 *     tags: [Ciudad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id de la ciudad
 *     responses:
 *       200:
 *         description: Ciudad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ciudad'
 *       404:
 *         description: Ciudad no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ciudad no encontrada"
 *       500:
 *         description: Error al obtener Ciudad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener Ciudad."
 */
router.get('/:id', getCiudadById);

/**
 * @swagger
 * /ciudad:
 *   post:
 *     summary: Creación de ciudad
 *     description: Endpoint para crear una nueva ciudad.
 *     tags: [Ciudad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la ciudad
 *                 example: New York
 *               pais_id:
 *                 type: integer
 *                 description: País donde pertenece la ciudad
 *                 example: 2
 *               latitud:
 *                 type: float
 *                 description: Latitud de la ciudad
 *                 example: 40.7143
 *               longitud:
 *                 type: float
 *                 description: Longitud de la ciudad
 *                 example: -74.006
 *               openweather_id:
 *                 type: integer
 *                 description: Id de la ciudad en la API del Clima
 *                 example: 5128581
 *     responses:
 *       201:
 *         description: Ciudad creada exitosamente
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
 *                   $ref: '#/components/schemas/Ciudad'
 *             example:
 *               status: 201
 *               message: "Ciudad creada exitosamente"
 *               data:
 *                 id: 2
 *                 nombre: "New York"
 *                 pais_id: 2
 *                 latitud: 40.7143
 *                 longitud: -74.006
 *                 openweather_id: 5128581
 *                 updatedAt: "2025-11-12T04:45:49.227Z"
 *                 createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error Validación."
 *       500:
 *         description: Error al crear ciudad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear ciudad."
 */
router.post('/', createCiudad);

/**
 * @swagger
 * /ciudad/{id}:
 *   put:
 *     summary: Edición de ciudad por id
 *     tags: [Ciudad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id de la ciudad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ciudad'
 *     responses:
 *       200:
 *         description: Ciudad actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ciudad'
 *       404:
 *         description: Ciudad no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ciudad no encontrada."
 *       500:
 *         description: Error al actualizar ciudad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar ciudad."
 */
router.put('/:id', updateCiudad);

/**
 * @swagger
 * /ciudad/{id}:
 *   delete:
 *     summary: Eliminar una ciudad por id
 *     tags: [Ciudad]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id de la ciudad
 *     responses:
 *       200:
 *         description: Ciudad eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ciudad eliminada exitosamente."
 *       404:
 *         description: Ciudad no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ciudad no encontrada."
 *       500:
 *         description: Error al eliminar ciudad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar ciudad."
 */
router.delete('/:id', deleteCiudad);

module.exports = router;
