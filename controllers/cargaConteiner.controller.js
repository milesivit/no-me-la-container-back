const { carga_container: cargaContainer, Container, categoria_carga: categoriaCarga, Reserva, Remito } = require('../models');

// Obtener todos los cargaContainer con sus relaciones
const getCargaContainers = async (req, res) => {
    try {
        const cargas = await cargaContainer.findAll({
            include: [
                { model: Container, as: 'containers' },
                { model: categoriaCarga, as: 'categoriasCarga' },
                { model: Reserva, as: 'Reservas' },
                { model: Remito, as: 'remitos' }
            ]
        });
        res.json({ status: 200, data: cargas });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener cargas', error: error.message });
    }
};

// Obtener cargaContainer por ID con relaciones
const getCargaContainerById = async (req, res) => {
    try {
        const carga = await cargaContainer.findByPk(req.params.id, {
            include: [
                { model: Container, as: 'containers' },
                { model: categoriaCarga, as: 'categoriasCarga' },
                { model: Reserva, as: 'Reservas' },
                { model: Remito, as: 'remitos' }
            ]
        });
        if (!carga) {
            return res.status(404).json({ status: 404, message: 'Carga no encontrada' });
        }
        res.json({ status: 200, data: carga });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener carga', error: error.message });
    }
};

// Crear nuevo cargaContainer
const createCargaContainer = async (req, res) => {
    const { container_id, descripcion, cantidad, peso, categoriaCarga_id, observaciones } = req.body;
    try {
        if (!container_id || !descripcion || cantidad == null || peso == null || !categoriaCarga_id) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        const nuevaCarga = await cargaContainer.create({
            container_id,
            descripcion,
            cantidad,
            peso,
            categoriaCarga_id,
            observaciones: observaciones || null
        });

        res.status(201).json({
            status: 201,
            data: nuevaCarga,
            message: 'Carga creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear carga', error: error.message });
    }
};

// Actualizar cargaContainer
const updateCargaContainer = async (req, res) => {
    try {
        const carga = await cargaContainer.findByPk(req.params.id);
        if (!carga) {
            return res.status(404).json({ status: 404, message: 'Carga no encontrada' });
        }

        const { container_id, descripcion, cantidad, peso, categoriaCarga_id, observaciones } = req.body;

        carga.container_id = container_id ?? carga.container_id;
        carga.descripcion = descripcion ?? carga.descripcion;
        carga.cantidad = cantidad ?? carga.cantidad;
        carga.peso = peso ?? carga.peso;
        carga.categoriaCarga_id = categoriaCarga_id ?? carga.categoriaCarga_id;
        carga.observaciones = observaciones ?? carga.observaciones;

        await carga.save();

        res.status(200).json({
            status: 200,
            message: 'Carga actualizada exitosamente',
            data: carga
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar carga', error: error.message });
    }
};

// Eliminar cargaContainer
const deleteCargaContainer = async (req, res) => {
    try {
        const carga = await cargaContainer.findByPk(req.params.id);
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
    getCargaContainers,
    getCargaContainerById,
    createCargaContainer,
    updateCargaContainer,
    deleteCargaContainer
};
