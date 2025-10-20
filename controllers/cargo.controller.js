const { Cargo } = require('../models');

// Obtener todos los cargos
const getCargos = async (req, res) => {
    try {
        const cargos = await Cargo.findAll();
        res.json({ status: 200, data: cargos });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener los cargos',
            error: error.message
        });
    }
};

// Obtener cargo por ID
const getCargoById = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (!cargo) {
            return res.status(404).json({ status: 404, message: 'Cargo no encontrado' });
        }
        res.json({ status: 200, data: cargo });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener el cargo',
            error: error.message
        });
    }
};

// Crear nuevo cargo
const createCargo = async (req, res) => {
    const { nombre } = req.body;

    try {
        if (!nombre) {
            return res.status(400).json({
                status: 400,
                message: 'Falta el campo obligatorio: nombre'
            });
        }

        // Verificar si ya existe un cargo con el mismo nombre
        const cargoExistente = await Cargo.findOne({ where: { nombre } });
        if (cargoExistente) {
            return res.status(400).json({
                status: 400,
                message: 'Ya existe un cargo con ese nombre'
            });
        }

        const nuevoCargo = await Cargo.create({ nombre });

        res.status(201).json({
            status: 201,
            message: 'Cargo creado exitosamente',
            data: nuevoCargo
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al crear el cargo',
            error: error.message
        });
    }
};

// Editar cargo
const updateCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (!cargo) {
            return res.status(404).json({ status: 404, message: 'Cargo no encontrado' });
        }

        const { nombre } = req.body;

        cargo.nombre = nombre ?? cargo.nombre;

        await cargo.save();

        res.status(200).json({
            status: 200,
            message: 'Cargo actualizado exitosamente',
            data: cargo
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al editar el cargo',
            error: error.message
        });
    }
};

// Eliminar cargo
const deleteCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (!cargo) {
            return res.status(404).json({ status: 404, message: 'Cargo no encontrado' });
        }

        await cargo.destroy();

        res.status(200).json({
            status: 200,
            message: 'Cargo eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al eliminar el cargo',
            error: error.message
        });
    }
};

module.exports = {
    getCargos,
    getCargoById,
    createCargo,
    updateCargo,
    deleteCargo
};
