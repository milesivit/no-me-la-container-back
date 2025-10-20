const { Factura, Reserva, factura_estado: facturaEstado, Factura_impuesto: FacturaImpuesto, Pago } = require('../models');

// Obtener todas las facturas con sus relaciones
const getFacturas = async (req, res) => {
    try {
        const facturas = await Factura.findAll({
            include: [
                { model: Reserva, as: 'reservas' },
                { model: facturaEstado, as: 'facturasEstado' },
                { model: FacturaImpuesto, as: 'facturaImpuesto' },
                { model: Pago, as: 'Pagos' }
            ]
        });
        res.json({ status: 200, data: facturas });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener facturas', error: error.message });
    }
};

// Obtener factura por ID con relaciones
const getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id, {
            include: [
                { model: Reserva, as: 'reservas' },
                { model: facturaEstado, as: 'facturasEstado' },
                { model: FacturaImpuesto, as: 'facturaImpuesto' },
                { model: Pago, as: 'Pagos' }
            ]
        });
        if (!factura) {
            return res.status(404).json({ status: 404, message: 'Factura no encontrada' });
        }
        res.json({ status: 200, data: factura });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener factura', error: error.message });
    }
};

// Crear nueva factura
const createFactura = async (req, res) => {
    const { numeroFactura, reservaId, fechaEmision, fechaVencimiento, observacion, facturaEstadoId } = req.body;
    try {
        if (!numeroFactura || !reservaId || !fechaEmision || !fechaVencimiento || !facturaEstadoId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        const nuevaFactura = await Factura.create({
            numeroFactura,
            reservaId,
            fechaEmision,
            fechaVencimiento,
            observacion: observacion || null,
            facturaEstadoId
        });

        res.status(201).json({
            status: 201,
            data: nuevaFactura,
            message: 'Factura creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear factura', error: error.message });
    }
};

// Actualizar factura
const updateFactura = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id);
        if (!factura) {
            return res.status(404).json({ status: 404, message: 'Factura no encontrada' });
        }

        const { numeroFactura, reservaId, fechaEmision, fechaVencimiento, observacion, facturaEstadoId } = req.body;

        factura.numeroFactura = numeroFactura ?? factura.numeroFactura;
        factura.reservaId = reservaId ?? factura.reservaId;
        factura.fechaEmision = fechaEmision ?? factura.fechaEmision;
        factura.fechaVencimiento = fechaVencimiento ?? factura.fechaVencimiento;
        factura.observacion = observacion ?? factura.observacion;
        factura.facturaEstadoId = facturaEstadoId ?? factura.facturaEstadoId;

        await factura.save();

        res.status(200).json({
            status: 200,
            message: 'Factura actualizada exitosamente',
            data: factura
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar factura', error: error.message });
    }
};

// Eliminar factura
const deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id);
        if (!factura) {
            return res.status(404).json({ status: 404, message: 'Factura no encontrada' });
        }

        await factura.destroy();

        res.status(200).json({ status: 200, message: 'Factura eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar factura', error: error.message });
    }
};

module.exports = {
    getFacturas,
    getFacturaById,
    createFactura,
    updateFactura,
    deleteFactura
};
