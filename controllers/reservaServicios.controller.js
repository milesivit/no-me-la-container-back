const { Reserva_servicios: ReservaServicios, Reserva, servicios_agregados: serviciosAgregados } = require('../models');

// Obtener todas las asignaciones reserva-servicio con relaciones
const getReservaServicios = async (req, res) => {
    try {
        const asignaciones = await ReservaServicios.findAll({
            include: [
                { model: Reserva, as: 'reservas' },
                { model: serviciosAgregados, as: 'servicios' }
            ]
        });
        res.json({ status: 200, data: asignaciones });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignaciones', error: error.message });
    }
};

// Obtener asignación por ID
const getReservaServicioById = async (req, res) => {
    try {
        const asignacion = await ReservaServicios.findByPk(req.params.id, {
            include: [
                { model: Reserva, as: 'reservas' },
                { model: serviciosAgregados, as: 'servicios' }
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

// Crear nueva asignación reserva-servicio
const createReservaServicio = async (req, res) => {
    const { reservaId, servicioId } = req.body;
    try {
        if (!reservaId || !servicioId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        // Verificar si ya existe la asignación
        const existente = await ReservaServicios.findOne({ where: { reservaId, servicioId } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'La asignación ya existe' });
        }

        const nuevaAsignacion = await ReservaServicios.create({ reservaId, servicioId });

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
const updateReservaServicio = async (req, res) => {
    try {
        const asignacion = await ReservaServicios.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        const { reservaId, servicioId } = req.body;

        asignacion.reservaId = reservaId ?? asignacion.reservaId;
        asignacion.servicioId = servicioId ?? asignacion.servicioId;

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
const deleteReservaServicio = async (req, res) => {
    try {
        const asignacion = await ReservaServicios.findByPk(req.params.id);
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
    getReservaServicios,
    getReservaServicioById,
    createReservaServicio,
    updateReservaServicio,
    deleteReservaServicio
};
