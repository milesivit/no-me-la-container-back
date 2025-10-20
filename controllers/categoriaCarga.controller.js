const { categoria_carga: CategoriaCarga } = require('../models');

// Obtener todas las categorías de carga
const getCategoriasCarga = async (req, res) => {
  try {
    const categorias = await CategoriaCarga.findAll();
    res.json({ status: 200, data: categorias });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener categorías de carga',
      error: error.message
    });
  }
};

// Obtener categoría de carga por ID
const getCategoriaCargaById = async (req, res) => {
  try {
    const categoria = await CategoriaCarga.findByPk(req.params.id);
    if (!categoria) {
      return res.status(404).json({
        status: 404,
        message: 'Categoría de carga no encontrada'
      });
    }
    res.json({ status: 200, data: categoria });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener categoría de carga',
      error: error.message
    });
  }
};

// Crear nueva categoría de carga
const createCategoriaCarga = async (req, res) => {
  const { nombre } = req.body;

  try {
    if (!nombre) {
      return res.status(400).json({
        status: 400,
        message: 'Falta el campo obligatorio: nombre'
      });
    }

    // Verificar si ya existe una categoría con el mismo nombre
    const categoriaExistente = await CategoriaCarga.findOne({ where: { nombre } });
    if (categoriaExistente) {
      return res.status(400).json({
        status: 400,
        message: 'Ya existe una categoría de carga con ese nombre'
      });
    }

    const nuevaCategoria = await CategoriaCarga.create({ nombre });

    res.status(201).json({
      status: 201,
      message: 'Categoría de carga creada exitosamente',
      data: nuevaCategoria
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear categoría de carga',
      error: error.message
    });
  }
};

// Actualizar categoría de carga
const updateCategoriaCarga = async (req, res) => {
  try {
    const categoria = await CategoriaCarga.findByPk(req.params.id);
    if (!categoria) {
      return res.status(404).json({
        status: 404,
        message: 'Categoría de carga no encontrada'
      });
    }

    const { nombre } = req.body;
    categoria.nombre = nombre ?? categoria.nombre;

    await categoria.save();

    res.status(200).json({
      status: 200,
      message: 'Categoría de carga actualizada exitosamente',
      data: categoria
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar categoría de carga',
      error: error.message
    });
  }
};

// Eliminar categoría de carga
const deleteCategoriaCarga = async (req, res) => {
  try {
    const categoria = await CategoriaCarga.findByPk(req.params.id);
    if (!categoria) {
      return res.status(404).json({
        status: 404,
        message: 'Categoría de carga no encontrada'
      });
    }

    await categoria.destroy();

    res.status(200).json({
      status: 200,
      message: 'Categoría de carga eliminada exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar categoría de carga',
      error: error.message
    });
  }
};

module.exports = {
  getCategoriasCarga,
  getCategoriaCargaById,
  createCategoriaCarga,
  updateCategoriaCarga,
  deleteCategoriaCarga
};
