const express = require('express');
const router = express.Router();
const { 
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
} = require('../controllers/cliente.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de Cliente
 *         cuil:
 *           type: string
 *           description: Cuil del cliente
 *         telefono:
 *           type: string
 *           description: Telefono del cliente
 *         razonSocialId:
 *           type: integer
 *           description: Razon Social del cliente
 *         condicionFiscalId:
 *           type: integer
 *           description: Condicion fiscal del cliente
 *         usuarioId:
 *           type: integer
 *           description: Usuario del cliente
 *         observacion:
 *           type: string
 *           description: Observacion
 *         dni:
 *           type: string
 *           description: documento del cliente
 *         sexoId:
 *           type: integer
 *           description: Sexo del cliente
 *         paisId:
 *           type: integer
 *           description: Pais del cliente
 *         direccion:
 *           type: string
 *           description: Direccion del cliente
 *         fecha_nacimiento:
 *           type: date
 *           description: Fecha de nacimiento del cliente
 *         activo:
 *           type: boolean
 *           description: Estado del cliente
 *       example:
 *         id: 1
 *         cuil: "20-34567890-3"
 *         telefono: "1132457890"
 *         razonSocialId: 1
 *         condicionFiscalId: 1
 *         usuarioId: 4
 *         observacion: "Cliente frecuente, sin deudas."
 *         dni: "34567890"
 *         sexoId: 2
 *         paisId: 1
 *         direccion: "Av. Corrientes 1234, CABA"
 *         fecha_nacimiento: "1990-07-15"
 *         activo: true  
 */
/**
 * @swagger
 * tags:
 *   name: Cliente
 *   description: Documentacion acerca de los distintos clientes
 */
/**
 * @swagger
 * /cliente:
 *   get:
 *     summary: Obtener todos los Clientes
 *     tags: [Cliente]
 *     responses:
 *       200:
 *         description: Clientes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error al obtener Clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Clientes."
 */
router.get('/', getClientes);

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     summary: Obtener Cliente por id
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cliente id
 *     responses:
 *       200:
 *         description: Cliente encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cliente no encontrado"
 *       500:
 *         description: Error al obtener Cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Cliente."
 */
router.get('/:id', getClienteById);

/**
 * @openapi
 * /cliente:
 *   post:
 *     summary: Creacion de cliente
 *     description: Endpoint para crear un nuevo cliente.
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cuil:
 *                 type: string
 *                 description: Cuil del cliente
 *                 example: "20-34567890-3"
 *               telefono:
 *                 type: string
 *                 description: Telefono del cliente
 *                 example: "1132457890"
 *               razonSocialId:
 *                 type: integer
 *                 description: Razon Social del cliente
 *                 example: 1
 *               condicionFiscalId:
 *                 type: integer
 *                 description: Condicion fiscal del cliente
 *                 example: 1
 *               usuarioId:
 *                 type: integer
 *                 description: Usuario del cliente
 *                 example: 4
 *               observacion:
 *                 type: string
 *                 description: Observacion
 *                 example: "Cliente frecuente, sin deudas."
 *               dni:
 *                 type: string
 *                 description: documento del cliente
 *                 example: "34567890"
 *               sexoId:
 *                 type: integer
 *                 description: Sexo del cliente
 *                 example: 2
 *               paisId:
 *                 type: integer
 *                 description: Pais del cliente
 *                 example: 1
 *               direccion:
 *                 type: string
 *                 description: Direccion del cliente
 *                 example: "Av. Corrientes 1234, CABA"
 *               fecha_nacimiento:
 *                 type: date
 *                 description: Fecha de nacimiento del cliente
 *                 example: "1990-07-15"
 *               activo:
 *                 type: boolean
 *                 description: Estado del cliente
 *                 example: true  
 *     responses:
 *       201:
 *         description: cliente creado exitosamente
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
 *                     cuil:
 *                       type: string
 *                     telefono:
 *                       type: string
 *                     razonSocialId:
 *                       type: integer
 *                     condicionFiscalId:
 *                       type: integer
 *                     usuarioId:
 *                       type: integer
 *                     observacion:
 *                       type: string
 *                     dni:
 *                       type: string
 *                     sexoId:
 *                       type: integer
 *                     paisId:
 *                       type: integer
 *                     direccion:
 *                       type: string
 *                     fecha_nacimiento:
 *                       type: date
 *                     activo:
 *                       type: boolean
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *               example:
 *                 status: 201
 *                 message: "cliente creado exitosamente"
 *                 data:
 *                   id: 2
 *                   cuil: "27-28945612-7"
 *                   telefono: "1167894321"
 *                   razonSocialId: 1
 *                   condicionFiscalId: 1
 *                   usuarioId: 4
 *                   observacion: "Requiere factura A. Compra mayorista."
 *                   dni: "28945612"
 *                   sexoId: 3
 *                   paisId: 3
 *                   direccion: "Bv. Oroño 2450, Rosario, Santa Fe"
 *                   fecha_nacimiento: "1985-11-02"
 *                   activo: true  
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
 *         description: Error al crear cliente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al crear cliente."
 */
router.post('/', createCliente);

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Edicion de cliente por id
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cliente id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cliente no encontrado."
 *       500:
 *         description: Error al actualizar cliente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al actualizar cliente."
 */
router.put('/:id', updateCliente);

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Eliminar un cliente por id
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cliente id
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cliente eliminado exitosamente."
 *       404:
 *         description: Cliente no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cliente no encontrado."
 *       500:
 *         description: Error al eliminar cliente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al eliminar cliente."
 */
router.delete('/:id', deleteCliente);

module.exports = router;
