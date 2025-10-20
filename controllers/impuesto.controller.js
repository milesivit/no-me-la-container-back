const { Impuesto } = require('../models');

// Obtener todos los impuestos
const getImpuestos = async (req, res) => {
    try {
        const impuestos = await Impuesto.findAll();
        res.json({ status: 200, data: impuestos });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener los impuestos', error: error.message });
    }
};

// Obtener un impuesto por ID
const getImpuestoById = async (req, res) => {
    try {
        const impuesto = await Impuesto.findByPk(req.params.id);
        if (!impuesto) {
            return res.status(404).json({ status: 404, message: 'Impuesto no encontrado' });
        }
        res.json({ status: 200, data: impuesto });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener impuesto', error: error.message });
    }
};

// Crear un nuevo impuesto
const createImpuesto = async (req, res) => {
    const { codImpuesto, nombre, importe } = req.body;
    try {
        if (!codImpuesto || !nombre || importe === undefined) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        // Verificar si ya existe un impuesto con el mismo código
        const existente = await Impuesto.findOne({ where: { codImpuesto } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'Ya existe un impuesto con ese código' });
        }

        const nuevoImpuesto = await Impuesto.create({ codImpuesto, nombre, importe });

        res.status(201).json({
            status: 201,
            data: nuevoImpuesto,
            message: 'Impuesto creado exitosamente',
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear impuesto', error: error.message });
    }
};

// Actualizar un impuesto
const updateImpuesto = async (req, res) => {
    try {
        const impuesto = await Impuesto.findByPk(req.params.id);
        if (!impuesto) {
            return res.status(404).json({ status: 404, message: 'Impuesto no encontrado' });
        }

        const { codImpuesto, nombre, importe } = req.body;
        impuesto.codImpuesto = codImpuesto ?? impuesto.codImpuesto;
        impuesto.nombre = nombre ?? impuesto.nombre;
        impuesto.importe = importe ?? impuesto.importe;

        await impuesto.save();

        res.status(200).json({
            status: 200,
            message: 'Impuesto actualizado exitosamente',
            data: impuesto,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar impuesto', error: error.message });
    }
};

// Eliminar un impuesto
const deleteImpuesto = async (req, res) => {
    try {
        const impuesto = await Impuesto.findByPk(req.params.id);
        if (!impuesto) {
            return res.status(404).json({ status: 404, message: 'Impuesto no encontrado' });
        }

        await impuesto.destroy();

        res.status(200).json({ status: 200, message: 'Impuesto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar impuesto', error: error.message });
    }
};

module.exports = {
    getImpuestos,
    getImpuestoById,
    createImpuesto,
    updateImpuesto,
    deleteImpuesto,
};
