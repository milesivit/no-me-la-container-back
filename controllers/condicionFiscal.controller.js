const { condicion_fiscal: CondicionFiscal} = require('../models');

// Obtener todas las condiciones fiscales
const getCondicionesFiscales = async (req, res) => {
  try {
    const condiciones = await CondicionFiscal.findAll();
    res.json({ status: 200, data: condiciones });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener condiciones fiscales',
      error: error.message
    });
  }
};

// Obtener una condición fiscal por ID
const getCondicionFiscalById = async (req, res) => {
  try {
    const condicion = await CondicionFiscal.findByPk(req.params.id);

    if (!condicion) {
      return res.status(404).json({
        status: 404,
        message: 'Condición fiscal no encontrada'
      });
    }

    res.json({ status: 200, data: condicion });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener condición fiscal',
      error: error.message
    });
  }
};

// Crear nueva condición fiscal
const createCondicionFiscal = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({
        status: 400,
        message: 'El campo "nombre" es obligatorio'
      });
    }

    // Verifica si ya existe una condición con el mismo nombre
    const condicionExistente = await CondicionFiscal.findOne({ where: { nombre } });
    if (condicionExistente) {
      return res.status(400).json({
        status: 400,
        message: 'Ya existe una condición fiscal con ese nombre'
      });
    }

    const nuevaCondicion = await CondicionFiscal.create({ nombre });

    res.status(201).json({
      status: 201,
      message: 'Condición fiscal creada exitosamente',
      data: nuevaCondicion
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear condición fiscal',
      error: error.message
    });
  }
};

// Actualizar una condición fiscal
const updateCondicionFiscal = async (req, res) => {
  try {
    const condicion = await CondicionFiscal.findByPk(req.params.id);
    if (!condicion) {
      return res.status(404).json({
        status: 404,
        message: 'Condición fiscal no encontrada'
      });
    }

    const { nombre } = req.body;
    condicion.nombre = nombre ?? condicion.nombre;

    await condicion.save();

    res.status(200).json({
      status: 200,
      message: 'Condición fiscal actualizada exitosamente',
      data: condicion
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar condición fiscal',
      error: error.message
    });
  }
};

// Eliminar una condición fiscal
const deleteCondicionFiscal = async (req, res) => {
  try {
    const condicion = await CondicionFiscal.findByPk(req.params.id);
    if (!condicion) {
      return res.status(404).json({
        status: 404,
        message: 'Condición fiscal no encontrada'
      });
    }

    await condicion.destroy();

    res.status(200).json({
      status: 200,
      message: 'Condición fiscal eliminada exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar condición fiscal',
      error: error.message
    });
  }
};

module.exports = {
  getCondicionesFiscales,
  getCondicionFiscalById,
  createCondicionFiscal,
  updateCondicionFiscal,
  deleteCondicionFiscal
};
