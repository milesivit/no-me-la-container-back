const { Reserva, Cliente, carga_container, reserva_estado, Reserva_servicios, Reserva_viaje, Factura } = require('../models');

// Obtener todas las reservas
const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            include: [
                { model: Cliente, as: 'clientes' },
                { model: carga_container, as: 'cargasContainer' },
                { model: reserva_estado, as: 'reservasEstado' },
                { model: Reserva_servicios, as: 'ServiciosReserva' },
                { model: Reserva_viaje, as: 'ViajesReserva' },
                { model: Factura, as: 'Facturas' },
            ],
        });

        res.json({ status: 200, data: reservas });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener las reservas',
            error: error.message,
        });
    }
};

// Obtener una reserva por ID
const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id, {
            include: [
                { model: Cliente, as: 'clientes' },
                { model: carga_container, as: 'cargasContainer' },
                { model: reserva_estado, as: 'reservasEstado' },
                { model: Reserva_servicios, as: 'ServiciosReserva' },
                { model: Reserva_viaje, as: 'ViajesReserva' },
                { model: Factura, as: 'Facturas' },
            ],
        });

        if (!reserva) {
            return res.status(404).json({ status: 404, message: 'Reserva no encontrada' });
        }

        res.json({ status: 200, data: reserva });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener la reserva',
            error: error.message,
        });
    }
};

// Crear una nueva reserva
const createReserva = async (req, res) => {
    const { clienteId, cargaContainerId, fechaReserva, reservaEstadoId } = req.body;

    try {
        if (!clienteId || !cargaContainerId || !fechaReserva || !reservaEstadoId) {
            return res.status(400).json({
                status: 400,
                message: 'Faltan campos obligatorios (clienteId, cargaContainerId, fechaReserva, reservaEstadoId)',
            });
        }

        const nuevaReserva = await Reserva.create({
            clienteId,
            cargaContainerId,
            fechaReserva,
            reservaEstadoId,
        });

        res.status(201).json({
            status: 201,
            data: nuevaReserva,
            message: 'Reserva creada exitosamente',
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al crear la reserva',
            error: error.message,
        });
    }
};

// Editar una reserva
const updateReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);

        if (!reserva) {
            return res.status(404).json({
                status: 404,
                message: 'Reserva no encontrada',
            });
        }

        const { clienteId, cargaContainerId, fechaReserva, reservaEstadoId } = req.body;

        reserva.clienteId = clienteId ?? reserva.clienteId;
        reserva.cargaContainerId = cargaContainerId ?? reserva.cargaContainerId;
        reserva.fechaReserva = fechaReserva ?? reserva.fechaReserva;
        reserva.reservaEstadoId = reservaEstadoId ?? reserva.reservaEstadoId;

        await reserva.save();

        res.status(200).json({
            status: 200,
            message: 'Reserva actualizada exitosamente',
            data: reserva,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al actualizar la reserva',
            error: error.message,
        });
    }
};

// Eliminar una reserva
const deleteReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);

        if (!reserva) {
            return res.status(404).json({
                status: 404,
                message: 'Reserva no encontrada',
            });
        }

        await reserva.destroy();

        res.status(200).json({
            status: 200,
            message: 'Reserva eliminada exitosamente',
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al eliminar la reserva',
            error: error.message,
        });
    }
};

module.exports = {
    getReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva,
};
