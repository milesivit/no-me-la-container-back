const { medio_pago: medioPago } = require('../models');

// Obtener todos los medios de pago
const getMediosPago = async (req, res) => {
    try {
        const medios = await medioPago.findAll();
        res.json({ status: 200, data: medios });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener los medios de pago', error: error.message });
    }
};

// Obtener medio de pago por ID
const getMedioPagoById = async (req, res) => {
    try {
        const medio = await medioPago.findByPk(req.params.id);
        if (!medio) {
            return res.status(404).json({ status: 404, message: 'Medio de pago no encontrado' });
        }
        res.json({ status: 200, data: medio });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener medio de pago', error: error.message });
    }
};

// Crear nuevo medio de pago
const createMedioPago = async (req, res) => {
    const { nombre } = req.body;
    try {
        if (!nombre) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios: nombre' });
        }

        // Verificar si ya existe un medio de pago con el mismo nombre
        const existente = await medioPago.findOne({ where: { nombre } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'Ya existe un medio de pago con ese nombre' });
        }

        const nuevoMedio = await medioPago.create({ nombre });

        res.status(201).json({
            status: 201,
            data: nuevoMedio,
            message: 'Medio de pago creado exitosamente',
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear medio de pago', error: error.message });
    }
};

// Actualizar medio de pago
const updateMedioPago = async (req, res) => {
    try {
        const medio = await medioPago.findByPk(req.params.id);
        if (!medio) {
            return res.status(404).json({ status: 404, message: 'Medio de pago no encontrado' });
        }

        const { nombre } = req.body;
        medio.nombre = nombre ?? medio.nombre;

        await medio.save();

        res.status(200).json({
            status: 200,
            message: 'Medio de pago actualizado exitosamente',
            data: medio,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar medio de pago', error: error.message });
    }
};

// Eliminar medio de pago
const deleteMedioPago = async (req, res) => {
    try {
        const medio = await medioPago.findByPk(req.params.id);
        if (!medio) {
            return res.status(404).json({ status: 404, message: 'Medio de pago no encontrado' });
        }

        await medio.destroy();

        res.status(200).json({ status: 200, message: 'Medio de pago eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar medio de pago', error: error.message });
    }
};

module.exports = {
    getMediosPago,
    getMedioPagoById,
    createMedioPago,
    updateMedioPago,
    deleteMedioPago,
};
