const {
    Cliente,
    razon_social: RazonSocial,
    condicion_fiscal: CondicionFiscal,
    Persona,
    Usuario,
    Reserva,
    Remito
  } = require('../models');
  
  // Obtener todos los clientes
  const getClientes = async (req, res) => {
    try {
      const clientes = await Cliente.findAll({
        include: [
          { model: RazonSocial, as: 'razonesSociales', attributes: ['id', 'nombre'] },
          { model: CondicionFiscal, as: 'condicionesFiscales', attributes: ['id', 'nombre'] },
          { model: Persona, as: 'personas', attributes: ['id', 'nombre', 'apellido', 'dni'] },
          { model: Usuario, as: 'usuarios', attributes: ['id', 'email', 'rol'] },
          { model: Reserva, as: 'clienteReservas', attributes: ['id', 'fecha'] },
          { model: Remito, as: 'remitos', attributes: ['id', 'fecha'] },
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
  
  //obtener cliente por ID
  const getClienteById = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id, {
        include: [
          { model: RazonSocial, as: 'razonesSociales', attributes: ['id', 'nombre'] },
          { model: CondicionFiscal, as: 'condicionesFiscales', attributes: ['id', 'nombre'] },
          { model: Persona, as: 'personas', attributes: ['id', 'nombre', 'apellido', 'dni'] },
          { model: Usuario, as: 'usuarios', attributes: ['id', 'email', 'rol'] },
          { model: Reserva, as: 'clienteReservas', attributes: ['id', 'fecha'] },
          { model: Remito, as: 'remitos', attributes: ['id', 'fecha'] },
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
      personaId,
      cuil,
      telefono,
      razonSocialId,
      condicionFiscalId,
      usuarioId,
      observacion,
      activo,
    } = req.body;
  
    try {
      if (!personaId || !razonSocialId || !condicionFiscalId) {
        return res.status(400).json({
          status: 400,
          message: 'Los campos personaId, razonSocialId y condicionFiscalId son obligatorios',
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
        personaId,
        cuil,
        telefono,
        razonSocialId,
        condicionFiscalId,
        usuarioId,
        observacion,
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
        personaId,
        cuil,
        telefono,
        razonSocialId,
        condicionFiscalId,
        usuarioId,
        observacion,
        activo,
      } = req.body;
  
      await cliente.update({
        personaId: personaId ?? cliente.personaId,
        cuil: cuil ?? cliente.cuil,
        telefono: telefono ?? cliente.telefono,
        razonSocialId: razonSocialId ?? cliente.razonSocialId,
        condicionFiscalId: condicionFiscalId ?? cliente.condicionFiscalId,
        usuarioId: usuarioId ?? cliente.usuarioId,
        observacion: observacion ?? cliente.observacion,
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
  