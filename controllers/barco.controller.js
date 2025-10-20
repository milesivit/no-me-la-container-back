const { Barco } = require('../models');

// Obtener todos los barcos
const getBarcos = async (req, res) => {
  try {
    const barcos = await Barco.findAll();
    res.json({ status: 200, data: barcos });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener barcos', error: error.message });
  }
};

// Obtener barco por ID
const getBarcoById = async (req, res) => {
  try {
    const barco = await Barco.findByPk(req.params.id);

    if (!barco) {
      return res.status(404).json({ status: 404, message: 'Barco no encontrado' });
    }

    res.json({ status: 200, data: barco });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener barco', error: error.message });
  }
};

// Crear un nuevo barco
const createBarco = async (req, res) => {
  const { nombre, nroRegistro, nroMatricula, modelo, constructura, capacidadMaxContainer } = req.body;

  try {
    // Validar campos obligatorios
    if (!nombre || !nroRegistro || !nroMatricula) {
      return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
    }

    // Verificar si ya existe un barco con el mismo número de registro o matrícula
    const barcoExistente = await Barco.findOne({
      where: { nroMatricula },
    });

    if (barcoExistente) {
      return res.status(400).json({ status: 400, message: 'Ya existe un barco con esa matrícula' });
    }

    const nuevoBarco = await Barco.create({
      nombre,
      nroRegistro,
      nroMatricula,
      modelo: modelo ?? null,
      constructura: constructura ?? null,
      capacidadMaxContainer: capacidadMaxContainer ?? 0,
    });

    res.status(201).json({
      status: 201,
      message: 'Barco creado exitosamente',
      data: nuevoBarco,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear barco', error: error.message });
  }
};

// Actualizar un barco
const updateBarco = async (req, res) => {
  try {
    const barco = await Barco.findByPk(req.params.id);

    if (!barco) {
      return res.status(404).json({ status: 404, message: 'Barco no encontrado' });
    }

    const { nombre, nroRegistro, nroMatricula, modelo, constructura, capacidadMaxContainer } = req.body;

    barco.nombre = nombre ?? barco.nombre;
    barco.nroRegistro = nroRegistro ?? barco.nroRegistro;
    barco.nroMatricula = nroMatricula ?? barco.nroMatricula;
    barco.modelo = modelo ?? barco.modelo;
    barco.constructura = constructura ?? barco.constructura;
    barco.capacidadMaxContainer = capacidadMaxContainer ?? barco.capacidadMaxContainer;

    await barco.save();

    res.status(200).json({
      status: 200,
      message: 'Barco actualizado exitosamente',
      data: barco,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar barco', error: error.message });
  }
};

// Eliminar un barco
const deleteBarco = async (req, res) => {
  try {
    const barco = await Barco.findByPk(req.params.id);

    if (!barco) {
      return res.status(404).json({ status: 404, message: 'Barco no encontrado' });
    }

    await barco.destroy();

    res.status(200).json({ status: 200, message: 'Barco eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar barco', error: error.message });
  }
};

module.exports = {
  getBarcos,
  getBarcoById,
  createBarco,
  updateBarco,
  deleteBarco,
};
