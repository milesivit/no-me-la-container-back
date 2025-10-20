const { container_estado: ContainerEstado } = require('../models');

// Obtener todos los estados de container
const getContainerEstados = async (req, res) => {
  try {
    const estados = await ContainerEstado.findAll();
    res.json({ status: 200, data: estados });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener estados de container',
      error: error.message
    });
  }
};

// Obtener estado de container por ID
const getContainerEstadoById = async (req, res) => {
  try {
    const estado = await ContainerEstado.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({
        status: 404,
        message: 'Estado de container no encontrado'
      });
    }
    res.json({ status: 200, data: estado });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener estado de container',
      error: error.message
    });
  }
};

// Crear nuevo estado de container
const createContainerEstado = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({
        status: 400,
        message: 'Falta el campo obligatorio: nombre'
      });
    }

    // Verificar si ya existe un estado con el mismo nombre
    const estadoExistente = await ContainerEstado.findOne({ where: { nombre } });
    if (estadoExistente) {
      return res.status(400).json({
        status: 400,
        message: 'Ya existe un estado de container con ese nombre'
      });
    }

    const nuevoEstado = await ContainerEstado.create({ nombre });

    res.status(201).json({
      status: 201,
      message: 'Estado de container creado exitosamente',
      data: nuevoEstado
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear estado de container',
      error: error.message
    });
  }
};

// Actualizar estado de container
const updateContainerEstado = async (req, res) => {
  try {
    const estado = await ContainerEstado.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({
        status: 404,
        message: 'Estado de container no encontrado'
      });
    }

    const { nombre } = req.body;
    estado.nombre = nombre ?? estado.nombre;

    await estado.save();

    res.status(200).json({
      status: 200,
      message: 'Estado de container actualizado exitosamente',
      data: estado
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar estado de container',
      error: error.message
    });
  }
};

// Eliminar estado de container
const deleteContainerEstado = async (req, res) => {
  try {
    const estado = await ContainerEstado.findByPk(req.params.id);
    if (!estado) {
      return res.status(404).json({
        status: 404,
        message: 'Estado de container no encontrado'
      });
    }

    await estado.destroy();

    res.status(200).json({
      status: 200,
      message: 'Estado de container eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar estado de container',
      error: error.message
    });
  }
};

module.exports = {
  getContainerEstados,
  getContainerEstadoById,
  createContainerEstado,
  updateContainerEstado,
  deleteContainerEstado
};
