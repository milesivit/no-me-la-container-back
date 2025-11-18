const express = require('express');
const router = express.Router();
const { 
  getViajeEmpleados,
  getViajeEmpleadoById,
  createViajeEmpleado,
  updateViajeEmpleado,
  deleteViajeEmpleado,
  getViajesByEmpleado
} = require('../controllers/viajeEmpleado.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     ViajeEmpleado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de ViajeEmpleado
 *         viajeId:
 *           type: integer
 *           description: Viaje asociado
 *         empleadoId:
 *           type: integer
 *           description: Empleado asociado
 *       example:
 *         id: 1
 *         viajeId: 2
 *         empleadoId: 3
 */

/**
 * @swagger
 * tags:
 *   name: ViajeEmpleado
 *   description: Documentacion acerca de los distintos viajeEmpleados
 */

/**
 * @swagger
 * /viajeEmpleado:
 *   get:
 *     summary: Obtener todos los ViajeEmpleado
 *     tags: [ViajeEmpleado]
 *     responses:
 *       200:
 *         description: ViajeEmpleado encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeEmpleado'
 *       500:
 *         description: Error al obtener ViajeEmpleado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ViajeEmpleado."
 */
router.get('/', getViajeEmpleados);


/**
 * @swagger
 * /viajeEmpleado/{id}:
 *   get:
 *     summary: Obtener ViajeEmpleado por id
 *     tags: [ViajeEmpleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ViajeEmpleado id
 *     responses:
 *       200:
 *         description: ViajeEmpleado encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeEmpleado'
 *       404:
 *         description: ViajeEmpleado no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEmpleado no encontrado"
 *       500:
 *         description: Error al obtener ViajeEmpleado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener ViajeEmpleado."
 */
router.get('/:id', getViajeEmpleadoById);


/**
 * @openapi
 * /viajeEmpleado:
 *   post:
 *     summary: Creacion de viajeEmpleado
 *     description: Endpoint para crear un nuevo viajeEmpleado.
 *     tags: [ViajeEmpleado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               viajeId:
 *                 type: string
 *                 description: Viaje asociado
 *                 example: 3
 *               empleadoId:
 *                 type: integer
 *                 description: Empleado asociado
 *                 example: 4
 *     responses:
 *       201:
 *         description: viajeEmpleado creado exitosamente
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
 *                     viajeId:
 *                       type: integer
 *                     empleadoId:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "viajeEmpleado creado exitosamente"
 *                 data:
 *                   id: 2
 *                   viajeId: 3
 *                   empleadoId: 4
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
 *         description: Error al crear viajeEmpleado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear viajeEmpleado."
 */
router.post('/', createViajeEmpleado);


/**
 * @swagger
 * /viajeEmpleado/{id}:
 *   put:
 *     summary: Edicion de viajeEmpleado por id
 *     tags: [ViajeEmpleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ViajeEmpleado id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ViajeEmpleado'
 *     responses:
 *       200:
 *         description: ViajeEmpleado actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ViajeEmpleado'
 *       404:
 *         description: ViajeEmpleado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEmpleado no encontrado."
 *       500:
 *         description: Error al actualizar viajeEmpleado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar viajeEmpleado."
 */
router.put('/:id', updateViajeEmpleado);


/**
 * @swagger
 * /viajeEmpleado/{id}:
 *   delete:
 *     summary: Eliminar un viajeEmpleado por id
 *     tags: [ViajeEmpleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ViajeEmpleado id
 *     responses:
 *       200:
 *         description: ViajeEmpleado eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEmpleado eliminado exitosamente."
 *       404:
 *         description: ViajeEmpleado no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ViajeEmpleado no encontrado."
 *       500:
 *         description: Error al eliminar viajeEmpleado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar viajeEmpleado."
 */
router.delete('/:id', deleteViajeEmpleado);
router.get('/empleado/:empleadoId', getViajesByEmpleado);


module.exports = router;
