const { Reserva_viaje: ReservaViaje, Reserva, Viaje } = require('../models');

// Obtener todas las asignaciones reserva-viaje con relaciones
const getReservaViajes = async (req, res) => {
    try {
        const asignaciones = await ReservaViaje.findAll({
            include: [
                { model: Reserva, as: 'reservas' },
                { model: Viaje, as: 'viajes' }
            ]
        });
        res.json({ status: 200, data: asignaciones });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignaciones', error: error.message });
    }
};

// Obtener asignación por ID
const getReservaViajeById = async (req, res) => {
    try {
        const asignacion = await ReservaViaje.findByPk(req.params.id, {
            include: [
                { model: Reserva, as: 'reservas' },
                { model: Viaje, as: 'viajes' }
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

// Crear nueva asignación reserva-viaje
const createReservaViaje = async (req, res) => {
    const { reservaId, viajeId } = req.body;
    try {
        if (!reservaId || !viajeId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        // Verificar si ya existe la asignación
        const existente = await ReservaViaje.findOne({ where: { reservaId, viajeId } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'La asignación ya existe' });
        }

        const nuevaAsignacion = await ReservaViaje.create({ reservaId, viajeId });

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
const updateReservaViaje = async (req, res) => {
    try {
        const asignacion = await ReservaViaje.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        const { reservaId, viajeId } = req.body;

        asignacion.reservaId = reservaId ?? asignacion.reservaId;
        asignacion.viajeId = viajeId ?? asignacion.viajeId;

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
const deleteReservaViaje = async (req, res) => {
    try {
        const asignacion = await ReservaViaje.findByPk(req.params.id);
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
    getReservaViajes,
    getReservaViajeById,
    createReservaViaje,
    updateReservaViaje,
    deleteReservaViaje
};
