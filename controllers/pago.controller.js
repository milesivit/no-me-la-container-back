const { Pago, Factura, medio_pago: medioPago } = require('../models');

// Obtener todos los pagos con sus relaciones
const getPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll({
            include: [
                { model: Factura, as: 'facturas' },
                { model: medioPago, as: 'mediosPago' }
            ]
        });
        res.json({ status: 200, data: pagos });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener pagos', error: error.message });
    }
};

// Obtener pago por ID con relaciones
const getPagoById = async (req, res) => {
    try {
        const pago = await Pago.findByPk(req.params.id, {
            include: [
                { model: Factura, as: 'facturas' },
                { model: medioPago, as: 'mediosPago' }
            ]
        });
        if (!pago) {
            return res.status(404).json({ status: 404, message: 'Pago no encontrado' });
        }
        res.json({ status: 200, data: pago });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener pago', error: error.message });
    }
};

// Crear nuevo pago
const createPago = async (req, res) => {
    const { facturaId, medioPagoId, monto, fecha, estado } = req.body;
    try {
        if (!facturaId || !medioPagoId || monto == null || !fecha || !estado) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        const nuevoPago = await Pago.create({
            facturaId,
            medioPagoId,
            monto,
            fecha,
            estado
        });

        res.status(201).json({
            status: 201,
            data: nuevoPago,
            message: 'Pago creado exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear pago', error: error.message });
    }
};

// Actualizar pago
const updatePago = async (req, res) => {
    try {
        const pago = await Pago.findByPk(req.params.id);
        if (!pago) {
            return res.status(404).json({ status: 404, message: 'Pago no encontrado' });
        }

        const { facturaId, medioPagoId, monto, fecha, estado } = req.body;

        pago.facturaId = facturaId ?? pago.facturaId;
        pago.medioPagoId = medioPagoId ?? pago.medioPagoId;
        pago.monto = monto ?? pago.monto;
        pago.fecha = fecha ?? pago.fecha;
        pago.estado = estado ?? pago.estado;

        await pago.save();

        res.status(200).json({
            status: 200,
            message: 'Pago actualizado exitosamente',
            data: pago
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar pago', error: error.message });
    }
};

// Eliminar pago
const deletePago = async (req, res) => {
    try {
        const pago = await Pago.findByPk(req.params.id);
        if (!pago) {
            return res.status(404).json({ status: 404, message: 'Pago no encontrado' });
        }

        await pago.destroy();

        res.status(200).json({ status: 200, message: 'Pago eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar pago', error: error.message });
    }
};

module.exports = {
    getPagos,
    getPagoById,
    createPago,
    updatePago,
    deletePago
};
