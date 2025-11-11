const {
  Cliente,
  razon_social: RazonSocial,
  condicion_fiscal: CondicionFiscal,
  Usuario,
  Sexo,
  Pais,
  Reserva,
  Remito,
} = require('../models');

// Obtener todos los clientes
const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: [
        { model: RazonSocial, as: 'razonesSociales', attributes: ['id', 'nombre'] },
        { model: CondicionFiscal, as: 'condicionesFiscales', attributes: ['id', 'nombre'] },
        { model: Usuario, as: 'usuarios', attributes: ['id', 'correo', 'rol'] },
        { model: Sexo, as: 'sexo', attributes: ['id', 'nombre'] },
        { model: Pais, as: 'pais', attributes: ['id', 'nombre'] },
        { model: Reserva, as: 'clienteReservas', attributes: ['id', 'fechaReserva'] },
        { model: Remito, as: 'remitos', attributes: ['id', 'nroRemito'] },
      ],
      order: [['id', 'ASC']],
    });

    res.status(200).json({ status: 200, data: clientes });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener clientes',
      error: error.message,
    });
  }
};

// Obtener cliente por ID
const getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id, {
      include: [
        { model: RazonSocial, as: 'razonesSociales', attributes: ['id', 'nombre'] },
        { model: CondicionFiscal, as: 'condicionesFiscales', attributes: ['id', 'nombre'] },
        { model: Usuario, as: 'usuarios', attributes: ['id', 'correo', 'rol'] },
        { model: Sexo, as: 'sexo', attributes: ['id', 'nombre'] },
        { model: Pais, as: 'pais', attributes: ['id', 'nombre'] },
        { model: Reserva, as: 'clienteReservas', attributes: ['id', 'fechaReserva'] },
        { model: Remito, as: 'remitos', attributes: ['id', 'nroRemito'] },
      ],
    });

    if (!cliente) {
      return res.status(404).json({ status: 404, message: 'Cliente no encontrado' });
    }

    res.status(200).json({ status: 200, data: cliente });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener cliente',
      error: error.message,
    });
  }
};

// Crear nuevo cliente
const createCliente = async (req, res) => {
  const {
    cuil,
    telefono,
    razonSocialId,
    condicionFiscalId,
    usuarioId,
    observacion,
    dni,
    sexoId,
    paisId,
    direccion,
    fecha_nacimiento,
    activo,
  } = req.body;

  try {
    if (!razonSocialId || !condicionFiscalId || !usuarioId) {
      return res.status(400).json({
        status: 400,
        message: 'Los campos razonSocialId, condicionFiscalId y usuarioId son obligatorios',
      });
    }

    // Evitar duplicados por CUIL
    if (cuil) {
      const clienteExistente = await Cliente.findOne({ where: { cuil } });
      if (clienteExistente) {
        return res.status(400).json({
          status: 400,
          message: 'Ya existe un cliente con ese CUIL',
        });
      }
    }

    const nuevoCliente = await Cliente.create({
      cuil,
      telefono,
      razonSocialId,
      condicionFiscalId,
      usuarioId,
      observacion,
      dni,
      sexoId,
      paisId,
      direccion,
      fecha_nacimiento,
      activo: activo ?? true,
    });

    res.status(201).json({
      status: 201,
      message: 'Cliente creado exitosamente',
      data: nuevoCliente,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al crear cliente',
      error: error.message,
    });
  }
};

// Actualizar cliente
const updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ status: 404, message: 'Cliente no encontrado' });
    }

    const {
      cuil,
      telefono,
      razonSocialId,
      condicionFiscalId,
      usuarioId,
      observacion,
      dni,
      sexoId,
      paisId,
      direccion,
      fecha_nacimiento,
      activo,
    } = req.body;

    await cliente.update({
      cuil: cuil ?? cliente.cuil,
      telefono: telefono ?? cliente.telefono,
      razonSocialId: razonSocialId ?? cliente.razonSocialId,
      condicionFiscalId: condicionFiscalId ?? cliente.condicionFiscalId,
      usuarioId: usuarioId ?? cliente.usuarioId,
      observacion: observacion ?? cliente.observacion,
      dni: dni ?? cliente.dni,
      sexoId: sexoId ?? cliente.sexoId,
      paisId: paisId ?? cliente.paisId,
      direccion: direccion ?? cliente.direccion,
      fecha_nacimiento: fecha_nacimiento ?? cliente.fecha_nacimiento,
      activo: activo ?? cliente.activo,
    });

    res.status(200).json({
      status: 200,
      message: 'Cliente actualizado exitosamente',
      data: cliente,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al actualizar cliente',
      error: error.message,
    });
  }
};

// Eliminar cliente
const deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ status: 404, message: 'Cliente no encontrado' });
    }

    await cliente.destroy();

    res.status(200).json({
      status: 200,
      message: 'Cliente eliminado exitosamente',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar cliente',
      error: error.message,
    });
  }
};

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
