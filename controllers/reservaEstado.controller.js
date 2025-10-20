const { reserva_estado: reservaEstado } = require('../models');

//obtener todos los estados de reserva
const getReservaEstados = async (req, res) => {
    try {
        const estados = await reservaEstado.findAll();
        res.json({ status: 200, data: estados });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al obtener los estados de reserva', 
            error: error.message 
        });
    }
};

//obtener un estado de reserva por ID
const getReservaEstadoById = async (req, res) => {
    try {
        const estado = await reservaEstado.findByPk(req.params.id);
        if (!estado) {
            return res.status(404).json({ 
                status: 404, 
                message: 'Estado de reserva no encontrado' 
            });
        }
        res.json({ status: 200, data: estado });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al obtener el estado de reserva', 
            error: error.message 
        });
    }
};

//crear un nuevo estado de reserva
const createReservaEstado = async (req, res) => {
    const { nombre } = req.body;

    try {
        if (!nombre) {
            return res.status(400).json({ 
                status: 400, 
                message: 'El campo "nombre" es obligatorio' 
            });
        }

        // Verificar si ya existe un estado con el mismo nombre
        const estadoExistente = await reservaEstado.findOne({ where: { nombre } });
        if (estadoExistente) {
            return res.status(400).json({ 
                status: 400, 
                message: 'Ya existe un estado de reserva con ese nombre' 
            });
        }

        const nuevoEstado = await reservaEstado.create({ nombre });

        res.status(201).json({
            status: 201,
            data: nuevoEstado,
            message: 'Estado de reserva creado exitosamente',
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al crear el estado de reserva', 
            error: error.message 
        });
    }
};

// Editar un estado de reserva
const updateReservaEstado = async (req, res) => {
    try {
        const estado = await reservaEstado.findByPk(req.params.id);
        if (!estado) {
            return res.status(404).json({ 
                status: 404, 
                message: 'Estado de reserva no encontrado' 
            });
        }

        const { nombre } = req.body;
        estado.nombre = nombre ?? estado.nombre;

        await estado.save();

        res.status(200).json({
            status: 200,
            message: 'Estado de reserva actualizado exitosamente',
            data: estado,
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al actualizar el estado de reserva', 
            error: error.message 
        });
    }
};

// Eliminar un estado de reserva
const deleteReservaEstado = async (req, res) => {
    try {
        const estado = await reservaEstado.findByPk(req.params.id);
        if (!estado) {
            return res.status(404).json({ 
                status: 404, 
                message: 'Estado de reserva no encontrado' 
            });
        }

        await estado.destroy();

        res.status(200).json({ 
            status: 200, 
            message: 'Estado de reserva eliminado exitosamente' 
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error al eliminar el estado de reserva', 
            error: error.message 
        });
    }
};

module.exports = {
    getReservaEstados,
    getReservaEstadoById,
    createReservaEstado,
    updateReservaEstado,
    deleteReservaEstado,
};
