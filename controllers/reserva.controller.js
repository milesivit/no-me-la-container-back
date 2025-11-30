const {
    Reserva,
    Cliente,
    Viaje_container,
    Viaje,
    Puerto,
    Barco,
    Container,
    carga_container,
    reserva_estado,
    Reserva_servicios,
    Reserva_viaje,
    Usuario,
    Factura,
    Pago
} = require("../models");

// INCLUDE BASE
const reservaInclude = [
    { 
        model: Cliente, 
        as: "clientes",
        include: [
            { model: Usuario, as: "usuarios" }
        ]
    },
    { 
        model: Viaje_container, 
        as: "viajesContainer",
        include: [
            {
                model: Viaje,
                as: "viajes",
                include: [
                    { model: Puerto, as: "puertoOrigen" },
                    { model: Puerto, as: "puertoDestino" },
                    { model: Barco, as: "barcos" }
                ]
            },
            { model: Container, as: "containers" },
            { model: carga_container, as: "cargasContainer" }
        ]
    },
    { model: reserva_estado, as: "reservasEstado" },
    { model: Reserva_servicios, as: "ServiciosReserva" },
    { 
        model: Factura, 
        as: "Facturas",
        include: [
            { model: Pago, as: "Pagos" }
        ]
    }
];

// Obtener todas las reservas
const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({ include: reservaInclude });
        res.json({ status: 200, data: reservas });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error al obtener las reservas",
            error: error.message
        });
    }
};

// Obtener una reserva por ID
const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id, {
            include: reservaInclude
        });

        if (!reserva) {
            return res.status(404).json({ status: 404, message: "Reserva no encontrada" });
        }

        res.json({ status: 200, data: reserva });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error al obtener la reserva",
            error: error.message
        });
    }
};

// Crear reserva
const createReserva = async (req, res) => {
    const { clienteId, viajeContainerId, fechaReserva, reservaEstadoId } = req.body;

    try {
        if (!clienteId || !viajeContainerId || !fechaReserva || !reservaEstadoId) {
            return res.status(400).json({
                status: 400,
                message: "Faltan campos obligatorios (clienteId, viajeContainerId, fechaReserva, reservaEstadoId)"
            });
        }

        const nuevaReserva = await Reserva.create({
            clienteId,
            viajeContainerId,
            fechaReserva,
            reservaEstadoId
        });

        res.status(201).json({
            status: 201,
            data: nuevaReserva,
            message: "Reserva creada exitosamente"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error al crear la reserva",
            error: error.message
        });
    }
};

// Editar
const updateReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);

        if (!reserva) {
            return res.status(404).json({ status: 404, message: "Reserva no encontrada" });
        }

        const { clienteId, viajeContainerId, fechaReserva, reservaEstadoId } = req.body;

        reserva.clienteId = clienteId ?? reserva.clienteId;
        reserva.viajeContainerId = viajeContainerId ?? reserva.viajeContainerId;
        reserva.fechaReserva = fechaReserva ?? reserva.fechaReserva;
        reserva.reservaEstadoId = reservaEstadoId ?? reserva.reservaEstadoId;

        await reserva.save();

        res.status(200).json({
            status: 200,
            message: "Reserva actualizada exitosamente",
            data: reserva
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error al actualizar la reserva",
            error: error.message
        });
    }
};

// Eliminar
const deleteReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);

        if (!reserva) {
            return res.status(404).json({
                status: 404,
                message: "Reserva no encontrada"
            });
        }

        await reserva.destroy();

        res.status(200).json({
            status: 200,
            message: "Reserva eliminada exitosamente"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error al eliminar la reserva",
            error: error.message
        });
    }
};

// Factura por reserva
const getFacturaByReserva = async (req, res) => {
    const factura = await Factura.findOne({
        where: { reservaId: req.params.id }
    });

    if (!factura)
        return res.status(404).json({ message: "No existe factura para la reserva" });

    res.json({ data: factura });
};

// Obtener reservas por cliente
const getReservasByCliente = async (req, res) => {
    try {
        const { clienteId } = req.params;

        const reservas = await Reserva.findAll({
            where: { clienteId },
            include: reservaInclude
        });

        res.status(200).json({
            status: 200,
            data: reservas
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error al obtener reservas del cliente",
            error: error.message
        });
    }
};


// const getReservasByAdmin = async (req, res) => {
//     try {
//         const reservas = await Reserva.findAll({
//             where: { clienteId: req.params.clienteId },
//             include: reservaInclude
//         });

//         res.json({ status: 200, data: reservas });
//     } catch (error) {
//         res.status(500).json({
//             status: 500,
//             message: "Error al obtener las reservas",
//             error: error.message
//         });
//     }
// };

module.exports = {
    getReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva,
    getFacturaByReserva,
    getReservasByCliente
};
