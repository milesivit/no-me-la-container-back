const { Sexo} = require('../models');

// Obtener todos los sexos
const getSexos = async (req, res) => {
  try {
    const sexos = await Sexo.findAll();
    res.json({ status: 200, data: sexos });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener sexos', error: error.message });
  }
};

// Obtener sexo por ID
const getSexoById = async (req, res) => {
  try {
    const sexo = await Sexo.findByPk(req.params.id);

    if (!sexo) {
      return res.status(404).json({ status: 404, message: 'Sexo no encontrado' });
    }

    res.json({ status: 200, data: sexo });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener sexo', error: error.message });
  }
};

// Crear un nuevo sexo
const createSexo = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({ status: 400, message: 'El campo "nombre" es obligatorio' });
    }

    // Verifica si ya existe un sexo con el mismo nombre
    const sexoExistente = await Sexo.findOne({ where: { nombre } });
    if (sexoExistente) {
      return res.status(400).json({ status: 400, message: 'Ya existe un sexo con ese nombre' });
    }

    const nuevoSexo = await Sexo.create({ nombre });

    res.status(201).json({
      status: 201,
      message: 'Sexo creado exitosamente',
      data: nuevoSexo
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear sexo', error: error.message });
  }
};

// Actualizar un sexo
const updateSexo = async (req, res) => {
  try {
    const sexo = await Sexo.findByPk(req.params.id);
    if (!sexo) {
      return res.status(404).json({ status: 404, message: 'Sexo no encontrado' });
    }

    const { nombre } = req.body;
    sexo.nombre = nombre ?? sexo.nombre;

    await sexo.save();

    res.status(200).json({
      status: 200,
      message: 'Sexo actualizado exitosamente',
      data: sexo
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar sexo', error: error.message });
  }
};

// Eliminar un sexo
const deleteSexo = async (req, res) => {
  try {
    const sexo = await Sexo.findByPk(req.params.id);
    if (!sexo) {
      return res.status(404).json({ status: 404, message: 'Sexo no encontrado' });
    }

    await sexo.destroy();
    res.status(200).json({ status: 200, message: 'Sexo eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar sexo', error: error.message });
  }
};

module.exports = {
  getSexos,
  getSexoById,
  createSexo,
  updateSexo,
  deleteSexo
};
