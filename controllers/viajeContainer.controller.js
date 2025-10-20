const { Viaje_container: ViajeContainer, Viaje, Container } = require('../models');

// Obtener todas las asignaciones de viaje-container con sus relaciones
const getViajeContainers = async (req, res) => {
    try {
        const asignaciones = await ViajeContainer.findAll({
            include: [
                { model: Viaje, as: 'viajes' },
                { model: Container, as: 'containers' }
            ]
        });
        res.json({ status: 200, data: asignaciones });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignaciones', error: error.message });
    }
};

// Obtener asignación por ID
const getViajeContainerById = async (req, res) => {
    try {
        const asignacion = await ViajeContainer.findByPk(req.params.id, {
            include: [
                { model: Viaje, as: 'viajes' },
                { model: Container, as: 'containers' }
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

// Crear nueva asignación viaje-container
const createViajeContainer = async (req, res) => {
    const { viajeId, containerId } = req.body;
    try {
        if (!viajeId || !containerId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        // Opcional: verificar si ya existe la asignación
        const existente = await ViajeContainer.findOne({ where: { viajeId, containerId } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'La asignación ya existe' });
        }

        const nuevaAsignacion = await ViajeContainer.create({ viajeId, containerId });

        res.status(201).json({
            status: 201,
            data: nuevaAsignacion,
            message: 'Asignación creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear asignación', error: error.message });
    }
};

// Actualizar asignación (por si se quiere cambiar viaje o container)
const updateViajeContainer = async (req, res) => {
    try {
        const asignacion = await ViajeContainer.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        const { viajeId, containerId } = req.body;

        asignacion.viajeId = viajeId ?? asignacion.viajeId;
        asignacion.containerId = containerId ?? asignacion.containerId;

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
const deleteViajeContainer = async (req, res) => {
    try {
        const asignacion = await ViajeContainer.findByPk(req.params.id);
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
    getViajeContainers,
    getViajeContainerById,
    createViajeContainer,
    updateViajeContainer,
    deleteViajeContainer
};
