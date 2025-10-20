const { viaje_estado: ViajeEstado } = require('../models');

// Obtener todos los estados de viaje
const getViajeEstados = async (req, res) => {
  try {
    const estados = await ViajeEstado.findAll();
    res.json({ status: 200, data: estados });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener estados de viaje',
      error: error.message
    });
  }
};

// Obtener estado de viaje por ID
const getViajeEstadoById = async (req, res) => {
  try {
    const estado = await ViajeEstado.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ status: 404, message: 'Estado de viaje no encontrado' });
    }
    res.json({ status: 200, data: estado });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener estado de viaje',
      error: error.message
    });
  }
};

// Crear nuevo estado de viaje
const createViajeEstado = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({ status: 400, message: 'Falta el campo obligatorio: nombre' });
    }

    const estadoExistente = await ViajeEstado.findOne({ where: { nombre } });
    if (estadoExistente) {
      return res.status(400).json({ status: 400, message: 'Ya existe un estado de viaje con ese nombre' });
    }

    const nuevoEstado = await ViajeEstado.create({ nombre });

    res.status(201).json({
      status: 201,
      message: 'Estado de viaje creado exitosamente',
      data: nuevoEstado
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear estado de viaje', error: error.message });
  }
};

// Actualizar estado de viaje
const updateViajeEstado = async (req, res) => {
  try {
    const estado = await ViajeEstado.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ status: 404, message: 'Estado de viaje no encontrado' });
    }

    const { nombre } = req.body;
    estado.nombre = nombre ?? estado.nombre;

    await estado.save();

    res.status(200).json({
      status: 200,
      message: 'Estado de viaje actualizado exitosamente',
      data: estado
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar estado de viaje', error: error.message });
  }
};

// Eliminar estado de viaje
const deleteViajeEstado = async (req, res) => {
  try {
    const estado = await ViajeEstado.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({ status: 404, message: 'Estado de viaje no encontrado' });
    }

    await estado.destroy();

    res.status(200).json({ status: 200, message: 'Estado de viaje eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar estado de viaje', error: error.message });
  }
};

module.exports = {
  getViajeEstados,
  getViajeEstadoById,
  createViajeEstado,
  updateViajeEstado,
  deleteViajeEstado
};
