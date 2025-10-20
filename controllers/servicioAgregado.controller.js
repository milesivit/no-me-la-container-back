const { servicios_agregados: serviciosAgregados } = require('../models');

// Obtener todos los servicios agregados
const getServiciosAgregados = async (req, res) => {
    try {
        const servicios = await serviciosAgregados.findAll();
        res.json({ status: 200, data: servicios });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener los servicios agregados',
            error: error.message,
        });
    }
};

// Obtener un servicio agregado por ID
const getServicioAgregadoById = async (req, res) => {
    try {
        const servicio = await serviciosAgregados.findByPk(req.params.id);
        if (!servicio) {
            return res.status(404).json({
                status: 404,
                message: 'Servicio agregado no encontrado',
            });
        }

        res.json({ status: 200, data: servicio });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener el servicio agregado',
            error: error.message,
        });
    }
};

// Crear un nuevo servicio agregado
const createServicioAgregado = async (req, res) => {
    const { nombre, codServicio, coste } = req.body;

    try {
        if (!nombre || !codServicio || coste === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Faltan campos obligatorios: nombre, codServicio o coste',
            });
        }

        // Verificar si ya existe un servicio con el mismo código
        const servicioExistente = await serviciosAgregados.findOne({
            where: { codServicio },
        });

        if (servicioExistente) {
            return res.status(400).json({
                status: 400,
                message: 'Ya existe un servicio con ese código',
            });
        }

        const nuevoServicio = await serviciosAgregados.create({
            nombre,
            codServicio,
            coste,
        });

        res.status(201).json({
            status: 201,
            message: 'Servicio agregado creado exitosamente',
            data: nuevoServicio,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al crear el servicio agregado',
            error: error.message,
        });
    }
};

// Actualizar un servicio agregado
const updateServicioAgregado = async (req, res) => {
    try {
        const servicio = await serviciosAgregados.findByPk(req.params.id);

        if (!servicio) {
            return res.status(404).json({
                status: 404,
                message: 'Servicio agregado no encontrado',
            });
        }

        const { nombre, codServicio, coste } = req.body;

        servicio.nombre = nombre ?? servicio.nombre;
        servicio.codServicio = codServicio ?? servicio.codServicio;
        servicio.coste = coste ?? servicio.coste;

        await servicio.save();

        res.status(200).json({
            status: 200,
            message: 'Servicio agregado actualizado exitosamente',
            data: servicio,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al actualizar el servicio agregado',
            error: error.message,
        });
    }
};

// Eliminar un servicio agregado
const deleteServicioAgregado = async (req, res) => {
    try {
        const servicio = await serviciosAgregados.findByPk(req.params.id);

        if (!servicio) {
            return res.status(404).json({
                status: 404,
                message: 'Servicio agregado no encontrado',
            });
        }

        await servicio.destroy();

        res.status(200).json({
            status: 200,
            message: 'Servicio agregado eliminado exitosamente',
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al eliminar el servicio agregado',
            error: error.message,
        });
    }
};

module.exports = {
    getServiciosAgregados,
    getServicioAgregadoById,
    createServicioAgregado,
    updateServicioAgregado,
    deleteServicioAgregado,
};
