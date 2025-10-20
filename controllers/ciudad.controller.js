const { Ciudad, Pais } = require('../models');

// Obtener todas las ciudades
const getCiudades = async (req, res) => {
  try {
    const ciudades = await Ciudad.findAll({
      include: [
        {
          model: Pais,
          as: 'paises', // alias definido en el modelo
          attributes: ['id', 'nombre', 'codigo_iso']
        }
      ]
    });

    res.json({ status: 200, data: ciudades });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener ciudades', error: error.message });
  }
};

// Obtener una ciudad por ID
const getCiudadById = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id, {
      include: [
        {
          model: Pais,
          as: 'paises',
          attributes: ['id', 'nombre', 'codigo_iso']
        }
      ]
    });

    if (!ciudad) {
      return res.status(404).json({ status: 404, message: 'Ciudad no encontrada' });
    }

    res.json({ status: 200, data: ciudad });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener ciudad', error: error.message });
  }
};

// Crear nueva ciudad
const createCiudad = async (req, res) => {
  const { nombre, pais_id, latitud, longitud, openweather_id } = req.body;

  try {
    if (!nombre || !pais_id) {
      return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios (nombre, pais_id)' });
    }

    const nuevaCiudad = await Ciudad.create({
      nombre,
      pais_id,
      latitud,
      longitud,
      openweather_id
    });

    res.status(201).json({
      status: 201,
      message: 'Ciudad creada exitosamente',
      data: nuevaCiudad
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear ciudad', error: error.message });
  }
};

// Actualizar ciudad
const updateCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id);

    if (!ciudad) {
      return res.status(404).json({ status: 404, message: 'Ciudad no encontrada' });
    }

    const { nombre, pais_id, latitud, longitud, openweather_id } = req.body;

    ciudad.nombre = nombre ?? ciudad.nombre;
    ciudad.pais_id = pais_id ?? ciudad.pais_id;
    ciudad.latitud = latitud ?? ciudad.latitud;
    ciudad.longitud = longitud ?? ciudad.longitud;
    ciudad.openweather_id = openweather_id ?? ciudad.openweather_id;

    await ciudad.save();

    res.status(200).json({
      status: 200,
      message: 'Ciudad actualizada exitosamente',
      data: ciudad
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar ciudad', error: error.message });
  }
};

// Eliminar ciudad
const deleteCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByPk(req.params.id);
    if (!ciudad) {
      return res.status(404).json({ status: 404, message: 'Ciudad no encontrada' });
    }

    await ciudad.destroy();
    res.status(200).json({ status: 200, message: 'Ciudad eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar ciudad', error: error.message });
  }
};

module.exports = {
  getCiudades,
  getCiudadById,
  createCiudad,
  updateCiudad,
  deleteCiudad
};
