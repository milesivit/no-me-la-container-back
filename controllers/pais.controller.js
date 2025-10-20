const { Pais } = require('../models');

// Obtener todos los países
const getPaises = async (req, res) => {
    try {
        const paises = await Pais.findAll();
        res.json({ status: 200, data: paises });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al obtener los países', 
            error: error.message 
        });
    }
};

// Obtener país por ID
const getPaisById = async (req, res) => {
    try {
        const pais = await Pais.findByPk(req.params.id);
        if (!pais) {
            return res.status(404).json({ status: 404, message: 'País no encontrado' });
        }
        res.json({ status: 200, data: pais });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al obtener el país', 
            error: error.message 
        });
    }
};

// Crear nuevo país
const createPais = async (req, res) => {
    const { nombre, codigo_iso } = req.body;

    try {
        if (!nombre || !codigo_iso) {
            return res.status(400).json({ 
                status: 400, 
                message: 'Faltan campos obligatorios: nombre o código ISO' 
            });
        }

        // Verificar si ya existe un país con el mismo código ISO
        const paisExistente = await Pais.findOne({ where: { codigo_iso } });
        if (paisExistente) {
            return res.status(400).json({ 
                status: 400, 
                message: 'Ya existe un país con ese código ISO' 
            });
        }

        const nuevoPais = await Pais.create({ nombre, codigo_iso });

        res.status(201).json({
            status: 201,
            message: 'País creado exitosamente',
            data: nuevoPais
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al crear país', 
            error: error.message 
        });
    }
};

// Editar país
const updatePais = async (req, res) => {
    try {
        const pais = await Pais.findByPk(req.params.id);
        if (!pais) {
            return res.status(404).json({ status: 404, message: 'País no encontrado' });
        }

        const { nombre, codigo_iso } = req.body;

        pais.nombre = nombre ?? pais.nombre;
        pais.codigo_iso = codigo_iso ?? pais.codigo_iso;

        await pais.save();

        res.status(200).json({
            status: 200,
            message: 'País actualizado exitosamente',
            data: pais
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al editar país', 
            error: error.message 
        });
    }
};

// Eliminar país
const deletePais = async (req, res) => {
    try {
        const pais = await Pais.findByPk(req.params.id);
        if (!pais) {
            return res.status(404).json({ status: 404, message: 'País no encontrado' });
        }

        await pais.destroy();

        res.status(200).json({ 
            status: 200, 
            message: 'País eliminado exitosamente' 
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al eliminar país', 
            error: error.message 
        });
    }
};

module.exports = {
    getPaises,
    getPaisById,
    createPais,
    updatePais,
    deletePais,
};
