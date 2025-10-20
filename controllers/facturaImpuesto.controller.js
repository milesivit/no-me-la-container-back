const { Factura_impuesto: FacturaImpuesto, Factura, Impuesto } = require('../models');

// Obtener todas las asignaciones factura-impuesto con relaciones
const getFacturaImpuestos = async (req, res) => {
    try {
        const asignaciones = await FacturaImpuesto.findAll({
            include: [
                { model: Factura, as: 'facturas' },
                { model: Impuesto, as: 'impuestos' }
            ]
        });
        res.json({ status: 200, data: asignaciones });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignaciones', error: error.message });
    }
};

// Obtener asignación por ID
const getFacturaImpuestoById = async (req, res) => {
    try {
        const asignacion = await FacturaImpuesto.findByPk(req.params.id, {
            include: [
                { model: Factura, as: 'facturas' },
                { model: Impuesto, as: 'impuestos' }
            ]
        });
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }
        res.json({ status: 200, data: asignacion });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignación', error: error.message });
    }
};

// Crear nueva asignación factura-impuesto
const createFacturaImpuesto = async (req, res) => {
    const { facturaId, impuestoId } = req.body;
    try {
        if (!facturaId || !impuestoId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        // Verificar si ya existe la asignación
        const existente = await FacturaImpuesto.findOne({ where: { facturaId, impuestoId } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'La asignación ya existe' });
        }

        const nuevaAsignacion = await FacturaImpuesto.create({ facturaId, impuestoId });

        res.status(201).json({
            status: 201,
            data: nuevaAsignacion,
            message: 'Asignación creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear asignación', error: error.message });
    }
};

// Actualizar asignación
const updateFacturaImpuesto = async (req, res) => {
    try {
        const asignacion = await FacturaImpuesto.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        const { facturaId, impuestoId } = req.body;

        asignacion.facturaId = facturaId ?? asignacion.facturaId;
        asignacion.impuestoId = impuestoId ?? asignacion.impuestoId;

        await asignacion.save();

        res.status(200).json({
            status: 200,
            message: 'Asignación actualizada exitosamente',
            data: asignacion
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar asignación', error: error.message });
    }
};

// Eliminar asignación
const deleteFacturaImpuesto = async (req, res) => {
    try {
        const asignacion = await FacturaImpuesto.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        await asignacion.destroy();

        res.status(200).json({ status: 200, message: 'Asignación eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar asignación', error: error.message });
    }
};

module.exports = {
    getFacturaImpuestos,
    getFacturaImpuestoById,
    createFacturaImpuesto,
    updateFacturaImpuesto,
    deleteFacturaImpuesto
};
