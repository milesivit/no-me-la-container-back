const express = require('express');
const router = express.Router();
const { 
    getViajes,
    getViajeById,
    createViaje,
    updateViaje,
    deleteViaje
} = require('../controllers/viaje.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Viaje:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Viaje
 *         barco:
 *           type: integer
 *           description: Barco asociado al viaje
 *         puertoOrigenId:
 *           type: integer
 *           description: Puero origen del viaje
 *         puertoDestinoId:
 *           type: integer
 *           description: Puerto de destino del viaje
 *         fechaSalida:
 *           type: date
 *           description: Fecha de inicio del viaje
 *         promesaDeEntrega:
 *           type: date
 *           description: Fecha Estimada de fin del viaje
 *         viajeEstadoID:
 *           type: integer
 *           description: Estado del viaje
 *       example:
 *         id: 1
 *         barco: 1
 *         puertoOrigenId: 2
 *         puertoDestinoId: 3
 *         fechaSalida: 2025-11-13
 *         promesaDeEntrega: 2025-11-23
 *         viajeEstadoID: 1
*/
/**
 * @swagger
 * tags:
 *   name: Viaje
 *   description: Documentacion acerca de los distintos viajes
 */
/**
 * @swagger
 * /viaje:
 *   get:
 *     summary: Obtener todos los Viajes
 *     tags: [Viaje]
 *     responses:
 *       200:
 *         description: Viajes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Viaje'
 *       500:
 *         description: Error al obtener Viajes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Viaje."
 */
router.get('/', getViajes);

/**
 * @swagger
 * /viaje/{id}:
 *   get:
 *     summary: Obtener Viaje por id
 *     tags: [Viaje]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Viaje id
 *     responses:
 *       200:
 *         description: Viaje encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Viaje'
 *       404:
 *         description: Viaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Viaje no encontrado"
 *       500:
 *         description: Error al obtener Viajes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Viaje."
 */
router.get('/:id', getViajeById);

/**
 * @openapi
 * /viaje:
 *   post:
 *     summary: Creacion de viaje
 *     description: Endpoint para crear un nuevo viaje.
 *     tags: [Viaje]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               barco:
 *                 type: integer
 *                 description: Barco asociado al viaje
 *                 example: 1
 *               puertoOrigenId:
 *                 type: integer
 *                 description: Puero origen del viaje
 *                 example: 2
 *               puertoDestinoId:
 *                 type: integer
 *                 description: Puerto de destino del viaje
 *                 example: 3
 *               fechaSalida:
 *                 type: date
 *                 description: Fecha de inicio del viaje
 *                 example: 2025-11-13
 *               promesaDeEntrega:
 *                 type: date
 *                 description: Fecha Estimada de fin del viaje
 *                 example: 2025-11-23
 *               viajeEstadoID:
 *                 type: integer
 *                 description: Estado del viaje
 *                 example: 1
 *     responses:
 *       201:
 *         description: viaje creado exitosamente
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
 *                     barco:
 *                       type: integer
 *                     puertoOrigenId:
 *                       type: integer
 *                     puertoDestinoId:
 *                       type: integer
 *                     fechaSalida:
 *                       type: date
 *                     promesaDeEntrega:
 *                       type: date
 *                     viajeEstadoID:
 *                       type: integer
 *               example:
 *                 status: 201
 *                 message: "viaje creado exitosamente"
 *                 data:
 *                   id: 1                   
 *                   barco: 1
 *                   puertoOrigenId:  2
 *                   puertoDestinoId: 3
 *                   fechaSalida: 2025-11-13
 *                   promesaDeEntrega: 2025-11-23
 *                   viajeEstadoID: 1
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
 *         description: Error al crear viaje.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear viaje."
 */
router.post('/', createViaje);

/**
 * @swagger
 * /viaje/{id}:
 *   put:
 *     summary: Edicion de viaje por id
 *     tags: [Viaje]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Viaje id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Viaje'
 *     responses:
 *       200:
 *         description: Viaje actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Viaje'
 *       404:
 *         description: Viaje no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Viaje no encontrado."
 *       500:
 *         description: Error al actualizar viaje.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar viaje."
 */
router.put('/:id', updateViaje);

/**
 * @swagger
 * /viaje/{id}:
 *   delete:
 *     summary: Eliminar un viaje por id
 *     tags: [Viaje]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Viaje id
 *     responses:
 *       200:
 *         description: Viaje eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Viaje eliminado exitosamente."
 *       404:
 *         description: Viaje no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Viaje no encontrado."
 *       500:
 *         description: Error al eliminar viaje.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar viaje."
 */
router.delete('/:id', deleteViaje);

module.exports = router;
