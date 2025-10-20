const { Persona, Sexo, Pais } = require('../models');

// Obtener todas las personas
const getPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll({
      include: [
        {
          model: Sexo,
          as: 'sexos',
          attributes: ['id', 'nombre']
        },
        {
          model: Pais,
          as: 'paises',
          attributes: ['id', 'nombre', 'codigo_iso']
        }
      ]
    });

    res.json({ status: 200, data: personas });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener personas', error: error.message });
  }
};

// Obtener una persona por ID
const getPersonaById = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id, {
      include: [
        {
          model: Sexo,
          as: 'sexos',
          attributes: ['id', 'nombre']
        },
        {
          model: Pais,
          as: 'paises',
          attributes: ['id', 'nombre', 'codigo_iso']
        }
      ]
    });

    if (!persona) {
      return res.status(404).json({ status: 404, message: 'Persona no encontrada' });
    }

    res.json({ status: 200, data: persona });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener persona', error: error.message });
  }
};

// Crear nueva persona
const createPersona = async (req, res) => {
  const { nombre, fecha_nacimiento, direccion, sexoId, dni, correo, paisId, activo } = req.body;

  try {
    if (!nombre || !sexoId || !dni || !paisId) {
      return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios (nombre, sexoId, dni, paisId)' });
    }

    // Verifica si ya existe una persona con el mismo DNI
    const personaExistente = await Persona.findOne({ where: { dni } });
    if (personaExistente) {
      return res.status(400).json({ status: 400, message: 'Ya existe una persona con ese DNI' });
    }

    const nuevaPersona = await Persona.create({
      nombre,
      fecha_nacimiento,
      direccion,
      sexoId,
      dni,
      correo,
      paisId,
      activo: activo !== undefined ? activo : true
    });

    res.status(201).json({
      status: 201,
      message: 'Persona creada exitosamente',
      data: nuevaPersona
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear persona', error: error.message });
  }
};

// Actualizar persona
const updatePersona = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) {
      return res.status(404).json({ status: 404, message: 'Persona no encontrada' });
    }

    const { nombre, fecha_nacimiento, direccion, sexoId, dni, correo, paisId, activo } = req.body;

    persona.nombre = nombre ?? persona.nombre;
    persona.fecha_nacimiento = fecha_nacimiento ?? persona.fecha_nacimiento;
    persona.direccion = direccion ?? persona.direccion;
    persona.sexoId = sexoId ?? persona.sexoId;
    persona.dni = dni ?? persona.dni;
    persona.correo = correo ?? persona.correo;
    persona.paisId = paisId ?? persona.paisId;
    persona.activo = activo ?? persona.activo;

    await persona.save();

    res.status(200).json({
      status: 200,
      message: 'Persona actualizada exitosamente',
      data: persona
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar persona', error: error.message });
  }
};

// Eliminar persona
const deletePersona = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) {
      return res.status(404).json({ status: 404, message: 'Persona no encontrada' });
    }

    await persona.destroy();
    res.status(200).json({ status: 200, message: 'Persona eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar persona', error: error.message });
  }
};

module.exports = {
  getPersonas,
  getPersonaById,
  createPersona,
  updatePersona,
  deletePersona
};
