const { Remito, Cliente, Viaje, Viaje_container: ViajeContainer } = require('../models');

// Obtener todos los remitos con sus relaciones
const getRemitos = async (req, res) => {
    try {
        const remitos = await Remito.findAll({
            include: [
                { model: Cliente, as: 'clientes' },
                { model: Viaje, as: 'viajes' },
                { model: ViajeContainer, as: 'viajeContainer' }
            ]
        });
        res.json({ status: 200, data: remitos });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener remitos', error: error.message });
    }
};

// Obtener remito por ID con relaciones
const getRemitoById = async (req, res) => {
    try {
        const remito = await Remito.findByPk(req.params.id, {
            include: [
                { model: Cliente, as: 'clientes' },
                { model: Viaje, as: 'viajes' },
                { model: ViajeContainer, as: 'viajeContainer' }
            ]
        });
        if (!remito) {
            return res.status(404).json({ status: 404, message: 'Remito no encontrado' });
        }
        res.json({ status: 200, data: remito });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener remito', error: error.message });
    }
};

// Crear nuevo remito
const createRemito = async (req, res) => {
    const { nroRemito, clienteId, viajeId, viajeContainerId, descripcion, firmaReceptor, create_at } = req.body;
    try {
        if (!nroRemito || !clienteId || !viajeContainerId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        const nuevoRemito = await Remito.create({
            nroRemito,
            clienteId,
            viajeId: viajeId || null,
            viajeContainerId,
            descripcion: descripcion || null,
            firmaReceptor: firmaReceptor || null,
            create_at: create_at || new Date()
        });

        res.status(201).json({
            status: 201,
            data: nuevoRemito,
            message: 'Remito creado exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear remito', error: error.message });
    }
};

// Actualizar remito
const updateRemito = async (req, res) => {
    try {
        const remito = await Remito.findByPk(req.params.id);
        if (!remito) {
            return res.status(404).json({ status: 404, message: 'Remito no encontrado' });
        }

        const { nroRemito, clienteId, viajeId, viajeContainerId, descripcion, firmaReceptor, create_at } = req.body;

        remito.nroRemito = nroRemito ?? remito.nroRemito;
        remito.clienteId = clienteId ?? remito.clienteId;
        remito.viajeId = viajeId ?? remito.viajeId;
        remito.viajeContainerId = viajeContainerId ?? remito.viajeContainerId;
        remito.descripcion = descripcion ?? remito.descripcion;
        remito.firmaReceptor = firmaReceptor ?? remito.firmaReceptor;
        remito.create_at = create_at ?? remito.create_at;

        await remito.save();

        res.status(200).json({
            status: 200,
            message: 'Remito actualizado exitosamente',
            data: remito
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar remito', error: error.message });
    }
};

// Eliminar remito
const deleteRemito = async (req, res) => {
    try {
        const remito = await Remito.findByPk(req.params.id);
        if (!remito) {
            return res.status(404).json({ status: 404, message: 'Remito no encontrado' });
        }

        await remito.destroy();

        res.status(200).json({ status: 200, message: 'Remito eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar remito', error: error.message });
    }
};

module.exports = {
    getRemitos,
    getRemitoById,
    createRemito,
    updateRemito,
    deleteRemito
};
