const { Puerto, Ciudad } = require('../models');

// Obtener todos los puertos
const getPuertos = async (req, res) => {
  try {
    const puertos = await Puerto.findAll({
      include: [
        {
          model: Ciudad,
          as: 'ciudades',
          attributes: ['id', 'nombre']
        }
      ]
    });
    res.json({ status: 200, data: puertos });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener puertos',
      error: error.message
    });
  }
};

// Obtener puerto por ID
const getPuertoById = async (req, res) => {
  try {
    const puerto = await Puerto.findByPk(req.params.id, {
      include: [
        {
          model: Ciudad,
          as: 'ciudades',
          attributes: ['id', 'nombre']
        }
      ]
    });

    if (!puerto) {
      return res.status(404).json({ status: 404, message: 'Puerto no encontrado' });
    }

    res.json({ status: 200, data: puerto });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener puerto',
      error: error.message
    });
  }
};

// Crear nuevo puerto
const createPuerto = async (req, res) => {
  const { nombre, ciudadId } = req.body;

  try {
    if (!nombre || !ciudadId) {
      return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
    }

    const nuevoPuerto = await Puerto.create({ nombre, ciudadId });

    res.status(201).json({
      status: 201,
      message: 'Puerto creado exitosamente',
      data: nuevoPuerto
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear puerto', error: error.message });
  }
};

// Actualizar puerto
const updatePuerto = async (req, res) => {
  try {
    const puerto = await Puerto.findByPk(req.params.id);

    if (!puerto) {
      return res.status(404).json({ status: 404, message: 'Puerto no encontrado' });
    }

    const { nombre, ciudadId } = req.body;

    puerto.nombre = nombre ?? puerto.nombre;
    puerto.ciudadId = ciudadId ?? puerto.ciudadId;

    await puerto.save();

    res.status(200).json({
      status: 200,
      message: 'Puerto actualizado exitosamente',
      data: puerto
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar puerto', error: error.message });
  }
};

// Eliminar puerto
const deletePuerto = async (req, res) => {
  try {
    const puerto = await Puerto.findByPk(req.params.id);

    if (!puerto) {
      return res.status(404).json({ status: 404, message: 'Puerto no encontrado' });
    }

    await puerto.destroy();

    res.status(200).json({ status: 200, message: 'Puerto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar puerto', error: error.message });
  }
};

module.exports = {
  getPuertos,
  getPuertoById,
  createPuerto,
  updatePuerto,
  deletePuerto
};
