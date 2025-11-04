const { carga_container } = require('../models');

// Todos los cargas
const getCargasContainer = async (req, res) => {
    try {
        const cargas = await carga_container.findAll();
        res.json({ status: 200, data: cargas });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener cargas', error: error.message });
    }
};

// Carga por ID
const getCargaContainerById = async (req, res) => {
    try {
        const carga = await carga_container.findByPk(req.params.id);
        if (!carga) {
            return res.status(404).json({ status: 404, message: 'Carga no encontrada' });
        }
        res.json({ status: 200, data: carga });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener carga', error: error.message });
    }
};

// Crear nueva carga
const createCargaContainer = async (req, res) => {
    const { container_id, descripcion, cantidad, peso, categoria_carga_id, observaciones } = req.body;
    try {
        if (!container_id || !descripcion || cantidad == null || peso == null || !categoria_carga_id) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        const nuevaCarga = await carga_container.create({
            container_id,
            descripcion,
            cantidad,
            peso,
            categoria_carga_id,
            observaciones: observaciones || null
        });

        res.status(201).json({
            status: 201,
            data: nuevaCarga,
            message: 'Carga creada exitosamente',
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear carga', error: error.message });
    }
};

// Editar carga
const updateCargaContainer = async (req, res) => {
    try {
        const carga = await carga_container.findByPk(req.params.id);
        if (!carga) {
            return res.status(404).json({ status: 404, message: 'Carga no encontrada' });
        }

        const { container_id, descripcion, cantidad, peso, categoria_carga_id, observaciones } = req.body;

        carga.container_id = container_id ?? carga.container_id;
        carga.descripcion = descripcion ?? carga.descripcion;
        carga.cantidad = cantidad ?? carga.cantidad;
        carga.peso = peso ?? carga.peso;
        carga.categoria_carga_id = categoria_carga_id ?? carga.categoria_carga_id;
        carga.observaciones = observaciones ?? carga.observaciones;

        await carga.save();

        res.status(200).json({
            status: 200,
            data: carga,
            message: 'Carga editada exitosamente',
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al editar carga', error: error.message });
    }
};

// Eliminar carga
const deleteCargaContainer = async (req, res) => {
    try {
        const carga = await carga_container.findByPk(req.params.id);
        if (!carga) {
            return res.status(404).json({ status: 404, message: 'Carga no encontrada' });
        }

        await carga.destroy();

        res.status(200).json({ status: 200, message: 'Carga eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar carga', error: error.message });
    }
};

module.exports = {
    getCargasContainer,
    getCargaContainerById,
    createCargaContainer,
    updateCargaContainer,
    deleteCargaContainer,
};
