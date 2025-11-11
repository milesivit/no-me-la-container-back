const {
  Empleado,
  Cargo,
  Usuario,
  Sexo,
  Pais,
  Viaje_empleado,
} = require('../models');

// Obtener todos los empleados
const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll({
      include: [
        { model: Cargo, as: 'cargo', attributes: ['id', 'nombre'] },
        { model: Usuario, as: 'usuario', attributes: ['id', 'correo', 'rol'] },
        { model: Sexo, as: 'sexo', attributes: ['id', 'nombre'] },
        { model: Pais, as: 'pais', attributes: ['id', 'nombre'] },
        { model: Viaje_empleado, as: 'viajesEmpleado', attributes: ['id', 'viajeId'] },
      ],
      order: [['id', 'ASC']],
    });

    res.json({ status: 200, data: empleados });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener empleados',
      error: error.message,
    });
  }
};

// Obtener empleado por ID
const getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id, {
      include: [
        { model: Cargo, as: 'cargo', attributes: ['id', 'nombre'] },
        { model: Usuario, as: 'usuario', attributes: ['id', 'correo', 'rol'] },
        { model: Sexo, as: 'sexo', attributes: ['id', 'nombre'] },
        { model: Pais, as: 'pais', attributes: ['id', 'nombre'] },
        { model: Viaje_empleado, as: 'viajesEmpleado', attributes: ['id', 'viajeId'] },
      ],
    });

    if (!empleado) {
      return res.status(404).json({ status: 404, message: 'Empleado no encontrado' });
    }

    res.json({ status: 200, data: empleado });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener empleado',
      error: error.message,
    });
  }
};

// Crear un nuevo empleado
const createEmpleado = async (req, res) => {
  const {
    cargoId,
    usuarioId,
    numeroLegajo,
    licencia,
    cbu,
    cuil,
    dni,
    sexoId,
    paisId,
    direccion,
    fecha_nacimiento,
    activo,
  } = req.body;

  try {
    // Validar campos obligatorios
    if (!cargoId || !numeroLegajo || !cuil || !usuarioId) {
      return res.status(400).json({
        status: 400,
        message: 'Los campos cargoId, numeroLegajo, cuil y usuarioId son obligatorios',
      });
    }

    // Verificar si ya existe un empleado con ese número de legajo o CUIL
    const existeEmpleado = await Empleado.findOne({ where: { cuil } });
    if (existeEmpleado) {
      return res.status(400).json({
        status: 400,
        message: 'Ya existe un empleado con ese CUIL',
      });
    }

    const nuevoEmpleado = await Empleado.create({
      cargoId,
      usuarioId,
      numeroLegajo,
      licencia: licencia ?? false,
      cbu: cbu ?? null,
      cuil,
      dni,
      sexoId,
      paisId,
      direccion,
      fecha_nacimiento,
      activo: activo ?? true,
    });

    res.status(201).json({
      status: 201,
      message: 'Empleado creado exitosamente',
      data: nuevoEmpleado,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear empleado',
      error: error.message,
    });
  }
};

// Actualizar empleado
const updateEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ status: 404, message: 'Empleado no encontrado' });
    }

    const {
      cargoId,
      usuarioId,
      numeroLegajo,
      licencia,
      cbu,
      cuil,
      dni,
      sexoId,
      paisId,
      direccion,
      fecha_nacimiento,
      activo,
    } = req.body;

    await empleado.update({
      cargoId: cargoId ?? empleado.cargoId,
      usuarioId: usuarioId ?? empleado.usuarioId,
      numeroLegajo: numeroLegajo ?? empleado.numeroLegajo,
      licencia: licencia ?? empleado.licencia,
      cbu: cbu ?? empleado.cbu,
      cuil: cuil ?? empleado.cuil,
      dni: dni ?? empleado.dni,
      sexoId: sexoId ?? empleado.sexoId,
      paisId: paisId ?? empleado.paisId,
      direccion: direccion ?? empleado.direccion,
      fecha_nacimiento: fecha_nacimiento ?? empleado.fecha_nacimiento,
      activo: activo ?? empleado.activo,
    });

    res.status(200).json({
      status: 200,
      message: 'Empleado actualizado exitosamente',
      data: empleado,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar empleado',
      error: error.message,
    });
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

    res.status(200).json({
      status: 200,
      message: 'Empleado eliminado exitosamente',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar empleado',
      error: error.message,
    });
  }
};

module.exports = {
  getEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
};
