const { Container, container_estado: ContainerEstado } = require('../models');

// Obtener todos los containers
const getContainers = async (req, res) => {
  try {
    const containers = await Container.findAll({
      include: [
        {
          model: ContainerEstado,
          as: 'containersEstados',
          attributes: ['id', 'nombre']
        }
      ]
    });
    res.json({ status: 200, data: containers });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener containers',
      error: error.message
    });
  }
};

// Obtener container por ID
const getContainerById = async (req, res) => {
  try {
    const container = await Container.findByPk(req.params.id, {
      include: [
        {
          model: ContainerEstado,
          as: 'containersEstados',
          attributes: ['id', 'nombre']
        }
      ]
    });

    if (!container) {
      return res.status(404).json({ status: 404, message: 'Container no encontrado' });
    }

    res.json({ status: 200, data: container });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener container',
      error: error.message
    });
  }
};

// Crear nuevo container
const createContainer = async (req, res) => {
  const { codigo, capacidad_max, container_estado_id } = req.body;

  try {
    if (!codigo || !capacidad_max || !container_estado_id) {
      return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
    }

    const nuevoContainer = await Container.create({
      codigo,
      capacidad_max,
      container_estado_id
    });

    res.status(201).json({
      status: 201,
      message: 'Container creado exitosamente',
      data: nuevoContainer
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear container', error: error.message });
  }
};

// Actualizar container
const updateContainer = async (req, res) => {
  try {
    const container = await Container.findByPk(req.params.id);

    if (!container) {
      return res.status(404).json({ status: 404, message: 'Container no encontrado' });
    }

    const { codigo, capacidad_max, container_estado_id } = req.body;

    container.codigo = codigo ?? container.codigo;
    container.capacidad_max = capacidad_max ?? container.capacidad_max;
    container.container_estado_id = container_estado_id ?? container.container_estado_id;

    await container.save();

    res.status(200).json({
      status: 200,
      message: 'Container actualizado exitosamente',
      data: container
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar container', error: error.message });
  }
};

// Eliminar container
const deleteContainer = async (req, res) => {
  try {
    const container = await Container.findByPk(req.params.id);

    if (!container) {
      return res.status(404).json({ status: 404, message: 'Container no encontrado' });
    }

    await container.destroy();

    res.status(200).json({ status: 200, message: 'Container eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar container', error: error.message });
  }
};

module.exports = {
  getContainers,
  getContainerById,
  createContainer,
  updateContainer,
  deleteContainer
};
