const express = require('express');
const router = express.Router();
const { 
    getEmpleados,
    getEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
} = require('../controllers/empleado.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del empleado
 *         cargoId:
 *           type: integer
 *           description: ID del cargo asociado al empleado
 *         usuarioId:
 *           type: integer
 *           description: ID del usuario asociado al empleado
 *         numeroLegajo:
 *           type: string
 *           description: Número de legajo del empleado
 *         licencia:
 *           type: boolean
 *           description: Indica si el empleado se encuentra con licencia
 *         cbu:
 *           type: string
 *           description: CBU bancario del empleado
 *         cuil:
 *           type: string
 *           description: CUIL del empleado
 *         dni:
 *           type: string
 *           description: DNI del empleado
 *         sexoId:
 *           type: integer
 *           description: ID del sexo del empleado
 *         paisId:
 *           type: integer
 *           description: ID del país de origen del empleado
 *         direccion:
 *           type: string
 *           description: Dirección completa del empleado
 *         fecha_nacimiento:
 *           type: date
 *           description: Fecha de nacimiento del empleado
 *         activo:
 *           type: boolean
 *           description: Estado activo o inactivo del empleado
 *       example:
 *         id: 1
 *         cargoId: 3
 *         usuarioId: 6
 *         numeroLegajo: "EMP-2025-014"
 *         licencia: false
 *         cbu: "2850590940090412345671"
 *         cuil: "20-34567890-3"
 *         dni: "34567890"
 *         sexoId: 2
 *         paisId: 1
 *         direccion: "Av. Rivadavia 4500, CABA"
 *         fecha_nacimiento: "1991-06-12"
 *         activo: true
 */

/**
 * @swagger
 * tags:
 *   name: Empleado
 *   description: Documentación de empleados del sistema
 */

/**
 * @swagger
 * /empleado:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleado]
 *     responses:
 *       200:
 *         description: Lista de empleados obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error al obtener empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Empleado."
 */
router.get('/', getEmpleados);

/**
 * @swagger
 * /empleado/{id}:
 *   get:
 *     summary: Obtener un empleado mediante su ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado a consultar
 *     responses:
 *       200:
 *         description: Empleado encontrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: No se encontró un empleado con ese ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Empleado no encontrado"
 *       500:
 *         description: Error al obtener el empleado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Error al obtener Empleado."
 */
router.get('/:id', getEmpleadoById);

/**
 * @openapi
 * /empleado:
 *   post:
 *     summary: Crear un nuevo empleado
 *     description: Endpoint para registrar un nuevo empleado en el sistema.
 *     tags: [Empleado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cargoId:
 *                 type: integer
 *                 description: ID del cargo asignado al empleado
 *                 example: 1
 *               usuarioId:
 *                 type: integer
 *                 description: ID del usuario asociado al empleado
 *                 example: 7
 *               numeroLegajo:
 *                 type: string
 *                 description: Número de legajo del empleado
 *                 example: "EMP-2025-078"
 *               licencia:
 *                 type: boolean
 *                 description: Indica si el empleado se encuentra de licencia
 *                 example: true
 *               cbu:
 *                 type: string
 *                 description: CBU bancario del empleado
 *                 example: "0720588590000005674321"
 *               cuil:
 *                 type: string
 *                 description: CUIL del empleado
 *                 example: "27-29874561-9"
 *               dni:
 *                 type: string
 *                 description: DNI del empleado
 *                 example: "29874561"
 *               sexoId:
 *                 type: integer
 *                 description: ID del sexo del empleado
 *                 example: 2
 *               paisId:
 *                 type: integer
 *                 description: ID del país de origen del empleado
 *                 example: 3
 *               direccion:
 *                 type: string
 *                 description: Dirección completa del empleado
 *                 example: "San Martín 850, Córdoba Capital"
 *               fecha_nacimiento:
 *                 type: date
 *                 description: Fecha de nacimiento del empleado
 *                 example: "1984-03-28"
 *               activo:
 *                 type: boolean
 *                 description: Indica si el empleado está activo
 *                 example: false
 *     responses:
 *       201:
 *         description: Empleado creado exitosamente
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
 *             example:
 *               status: 201
 *               message: "empleado creado exitosamente"
 *               data:
 *                 id: 2
 *                 cargoId: 1
 *                 usuarioId: 7
 *                 numeroLegajo: "EMP-2025-078"
 *                 licencia: true
 *                 cbu: "0720588590000005674321"
 *                 cuil: "27-29874561-9"
 *                 dni: "29874561"
 *                 sexoId: 2
 *                 paisId: 3
 *                 direccion: "San Martín 850, Córdoba Capital"
 *                 fecha_nacimiento: "1984-03-28"
 *                 activo: false
 *                 updatedAt: "2025-11-12T04:45:49.227Z"
 *                 createdAt: "2025-11-12T04:45:49.227Z"
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error al crear el empleado
 */
router.post('/', createEmpleado);

/**
 * @swagger
 * /empleado/{id}:
 *   put:
 *     summary: Editar un empleado mediante su ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado actualizado correctamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error al actualizar empleado
 */
router.put('/:id', updateEmpleado);

/**
 * @swagger
 * /empleado/{id}:
 *   delete:
 *     summary: Eliminar un empleado mediante su ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado a eliminar
 *     responses:
 *       200:
 *         description: Empleado eliminado correctamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error al eliminar empleado
 */
router.delete('/:id', deleteEmpleado);

module.exports = router;
