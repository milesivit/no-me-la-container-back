const { Empleado, Persona, Cargo, Usuario } = require('../models');

// Obtener todos los empleados
const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll({
      include: [
        { model: Persona, as: 'persona' },
        { model: Cargo, as: 'cargo' },
        { model: Usuario, as: 'usuario' },
      ],
    });
    res.json({ status: 200, data: empleados });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener empleados', error: error.message });
  }
};

// Obtener empleado por ID
const getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id, {
      include: [
        { model: Persona, as: 'persona' },
        { model: Cargo, as: 'cargo' },
        { model: Usuario, as: 'usuario' },
      ],
    });

    if (!empleado) {
      return res.status(404).json({ status: 404, message: 'Empleado no encontrado' });
    }

    res.json({ status: 200, data: empleado });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al obtener empleado', error: error.message });
  }
};

// Crear un nuevo empleado
const createEmpleado = async (req, res) => {
  const { personaId, cargoId, usuarioId, numeroLegajo, licencia, cbu, cuil, activo } = req.body;

  try {
    // Validar campos obligatorios
    if (!personaId || !cargoId || !numeroLegajo || !cuil) {
      return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
    }

    // Verificar si ya existe un empleado con ese número de legajo o CUIL
    const existeEmpleado = await Empleado.findOne({
      where: { cuil },
    });

    if (existeEmpleado) {
      return res.status(400).json({ status: 400, message: 'Ya existe un empleado con ese CUIL' });
    }

    const nuevoEmpleado = await Empleado.create({
      personaId,
      cargoId,
      usuarioId,
      numeroLegajo,
      licencia: licencia ?? false,
      cbu: cbu ?? null,
      cuil,
      activo: activo ?? true,
    });

    res.status(201).json({
      status: 201,
      message: 'Empleado creado exitosamente',
      data: nuevoEmpleado,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al crear empleado', error: error.message });
  }
};

// Actualizar empleado
const updateEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);

    if (!empleado) {
      return res.status(404).json({ status: 404, message: 'Empleado no encontrado' });
    }

    const { personaId, cargoId, usuarioId, numeroLegajo, licencia, cbu, cuil, activo } = req.body;

    empleado.personaId = personaId ?? empleado.personaId;
    empleado.cargoId = cargoId ?? empleado.cargoId;
    empleado.usuarioId = usuarioId ?? empleado.usuarioId;
    empleado.numeroLegajo = numeroLegajo ?? empleado.numeroLegajo;
    empleado.licencia = licencia ?? empleado.licencia;
    empleado.cbu = cbu ?? empleado.cbu;
    empleado.cuil = cuil ?? empleado.cuil;
    empleado.activo = activo ?? empleado.activo;

    await empleado.save();

    res.status(200).json({
      status: 200,
      message: 'Empleado actualizado exitosamente',
      data: empleado,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al actualizar empleado', error: error.message });
  }
};

// Eliminar empleado
const deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);

    if (!empleado) {
      return res.status(404).json({ status: 404, message: 'Empleado no encontrado' });
    }

    await empleado.destroy();

    res.status(200).json({ status: 200, message: 'Empleado eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error al eliminar empleado', error: error.message });
  }
};

module.exports = {
  getEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
};
