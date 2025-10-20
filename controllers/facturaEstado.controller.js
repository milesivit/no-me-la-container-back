const { factura_estado: facturaEstado } = require('../models');

// Obtener todos los estados de factura
const getFacturaEstados = async (req, res) => {
    try {
        const estados = await facturaEstado.findAll();
        res.json({ status: 200, data: estados });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener los estados de factura', error: error.message });
    }
};

// Obtener un estado de factura por ID
const getFacturaEstadoById = async (req, res) => {
    try {
        const estado = await facturaEstado.findByPk(req.params.id);
        if (!estado) {
            return res.status(404).json({ status: 404, message: 'Estado de factura no encontrado' });
        }
        res.json({ status: 200, data: estado });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener estado de factura', error: error.message });
    }
};

// Crear un nuevo estado de factura
const createFacturaEstado = async (req, res) => {
    const { nombre } = req.body;
    try {
        if (!nombre) {
            return res.status(400).json({ status: 400, message: 'El campo nombre es obligatorio' });
        }

        // Verificar si ya existe un estado con el mismo nombre
        const existente = await facturaEstado.findOne({ where: { nombre } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'Ya existe un estado de factura con ese nombre' });
        }

        const nuevoEstado = await facturaEstado.create({ nombre });

        res.status(201).json({
            status: 201,
            data: nuevoEstado,
            message: 'Estado de factura creado exitosamente',
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear estado de factura', error: error.message });
    }
};

// Actualizar un estado de factura
const updateFacturaEstado = async (req, res) => {
    try {
        const estado = await facturaEstado.findByPk(req.params.id);
        if (!estado) {
            return res.status(404).json({ status: 404, message: 'Estado de factura no encontrado' });
        }

        const { nombre } = req.body;
        estado.nombre = nombre ?? estado.nombre;

        await estado.save();

        res.status(200).json({
            status: 200,
            message: 'Estado de factura actualizado exitosamente',
            data: estado,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar estado de factura', error: error.message });
    }
};

// Eliminar un estado de factura
const deleteFacturaEstado = async (req, res) => {
    try {
        const estado = await facturaEstado.findByPk(req.params.id);
        if (!estado) {
            return res.status(404).json({ status: 404, message: 'Estado de factura no encontrado' });
        }

        await estado.destroy();

        res.status(200).json({ status: 200, message: 'Estado de factura eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar estado de factura', error: error.message });
    }
};

module.exports = {
    getFacturaEstados,
    getFacturaEstadoById,
    createFacturaEstado,
    updateFacturaEstado,
    deleteFacturaEstado,
};
