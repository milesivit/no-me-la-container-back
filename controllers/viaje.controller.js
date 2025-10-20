const { Viaje, Puerto, viaje_estado: ViajeEstado, Barco } = require('../models');

// Obtener todos los viajes
const getViajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll({
      include: [
        { model: Puerto, as: 'puertoOrigen', attributes: ['id', 'nombre'] },
        { model: Puerto, as: 'puertoDestino', attributes: ['id', 'nombre'] },
        { model: ViajeEstado, as: 'viajeEstado', attributes: ['id', 'nombre'] },
        { model: Barco, as: 'barcos', attributes: ['id', 'nombre'] }
      ]
    });

    res.json({ status: 200, data: viajes });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener viajes',
      error: error.message
    });
  }
};

// Obtener un viaje por ID
const getViajeById = async (req, res) => {
  try {
    const viaje = await Viaje.findByPk(req.params.id, {
      include: [
        { model: Puerto, as: 'puertoOrigen', attributes: ['id', 'nombre'] },
        { model: Puerto, as: 'puertoDestino', attributes: ['id', 'nombre'] },
        { model: ViajeEstado, as: 'viajeEstado', attributes: ['id', 'nombre'] },
        { model: Barco, as: 'barcos', attributes: ['id', 'nombre'] }
      ]
    });

    if (!viaje) {
      return res.status(404).json({
        status: 404,
        message: 'Viaje no encontrado'
      });
    }

    res.json({ status: 200, data: viaje });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener viaje',
      error: error.message
    });
  }
};

// Crear un nuevo viaje
const createViaje = async (req, res) => {
  const { barco, puertoOrigenId, puertoDestinoId, fechaSalida, promesaDeEntrega, viajeEstadoID } = req.body;

  try {
    if (!barco || !puertoOrigenId || !puertoDestinoId || !fechaSalida || !viajeEstadoID) {
      return res.status(400).json({
        status: 400,
        message: 'Faltan campos obligatorios (barco, puertoOrigenId, puertoDestinoId, fechaSalida o viajeEstadoID)'
      });
    }

    const nuevoViaje = await Viaje.create({
      barco,
      puertoOrigenId,
      puertoDestinoId,
      fechaSalida,
      promesaDeEntrega,
      viajeEstadoID
    });

    res.status(201).json({
      status: 201,
      message: 'Viaje creado exitosamente',
      data: nuevoViaje
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear viaje',
      error: error.message
    });
  }
};

// Actualizar un viaje
const updateViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByPk(req.params.id);
    if (!viaje) {
      return res.status(404).json({
        status: 404,
        message: 'Viaje no encontrado'
      });
    }

    const { barco, puertoOrigenId, puertoDestinoId, fechaSalida, promesaDeEntrega, viajeEstadoID } = req.body;

    viaje.barco = barco ?? viaje.barco;
    viaje.puertoOrigenId = puertoOrigenId ?? viaje.puertoOrigenId;
    viaje.puertoDestinoId = puertoDestinoId ?? viaje.puertoDestinoId;
    viaje.fechaSalida = fechaSalida ?? viaje.fechaSalida;
    viaje.promesaDeEntrega = promesaDeEntrega ?? viaje.promesaDeEntrega;
    viaje.viajeEstadoID = viajeEstadoID ?? viaje.viajeEstadoID;

    await viaje.save();

    res.status(200).json({
      status: 200,
      message: 'Viaje actualizado exitosamente',
      data: viaje
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar viaje',
      error: error.message
    });
  }
};

// Eliminar un viaje
const deleteViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByPk(req.params.id);
    if (!viaje) {
      return res.status(404).json({
        status: 404,
        message: 'Viaje no encontrado'
      });
    }

    await viaje.destroy();

    res.status(200).json({
      status: 200,
      message: 'Viaje eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar viaje',
      error: error.message
    });
  }
};

module.exports = {
  getViajes,
  getViajeById,
  createViaje,
  updateViaje,
  deleteViaje
};
