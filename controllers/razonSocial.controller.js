const { razon_social: RazonSocial } = require('../models');

// Obtener todas las razones sociales
const getRazonSociales = async (req, res) => {
  try {
    const razonesSociales = await RazonSocial.findAll();
    res.json({ status: 200, data: razonesSociales });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener razones sociales',
      error: error.message
    });
  }
};

// Obtener una razón social por ID
const getRazonSocialById = async (req, res) => {
  try {
    const razonSocial = await RazonSocial.findByPk(req.params.id);

    if (!razonSocial) {
      return res.status(404).json({
        status: 404,
        message: 'Razón social no encontrada'
      });
    }

    res.json({ status: 200, data: razonSocial });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener razón social',
      error: error.message
    });
  }
};

// Crear nueva razón social
const createRazonSocial = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({
        status: 400,
        message: 'El campo "nombre" es obligatorio'
      });
    }

    // Verifica si ya existe una razón social con el mismo nombre
    const razonExistente = await RazonSocial.findOne({ where: { nombre } });
    if (razonExistente) {
      return res.status(400).json({
        status: 400,
        message: 'Ya existe una razón social con ese nombre'
      });
    }

    const nuevaRazonSocial = await RazonSocial.create({ nombre });

    res.status(201).json({
      status: 201,
      message: 'Razón social creada exitosamente',
      data: nuevaRazonSocial
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear razón social',
      error: error.message
    });
  }
};

// Actualizar razón social
const updateRazonSocial = async (req, res) => {
  try {
    const razonSocial = await RazonSocial.findByPk(req.params.id);
    if (!razonSocial) {
      return res.status(404).json({
        status: 404,
        message: 'Razón social no encontrada'
      });
    }

    const { nombre } = req.body;
    razonSocial.nombre = nombre ?? razonSocial.nombre;

    await razonSocial.save();

    res.status(200).json({
      status: 200,
      message: 'Razón social actualizada exitosamente',
      data: razonSocial
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar razón social',
      error: error.message
    });
  }
};

// Eliminar razón social
const deleteRazonSocial = async (req, res) => {
  try {
    const razonSocial = await RazonSocial.findByPk(req.params.id);
    if (!razonSocial) {
      return res.status(404).json({
        status: 404,
        message: 'Razón social no encontrada'
      });
    }

    await razonSocial.destroy();

    res.status(200).json({
      status: 200,
      message: 'Razón social eliminada exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar razón social',
      error: error.message
    });
  }
};

module.exports = {
  getRazonSociales,
  getRazonSocialById,
  createRazonSocial,
  updateRazonSocial,
  deleteRazonSocial
};
