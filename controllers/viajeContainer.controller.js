const {
    Viaje_container: ViajeContainer,
    Viaje,
    Container,
    carga_container: CargaContainer
  } = require('../models');
  
  //obtener todas las asignaciones de viaje-container con sus relaciones
  const getViajeContainers = async (req, res) => {
    try {
      const asignaciones = await ViajeContainer.findAll({
        include: [
          { model: Viaje, as: 'viajes' },
          { model: Container, as: 'containers' },
          { model: CargaContainer, as: 'cargasContainer' }
        ]
      });
      res.json({ status: 200, data: asignaciones });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Error al obtener asignaciones',
        error: error.message
      });
    }
  };
  
  //obtener asignación por ID
  const getViajeContainerById = async (req, res) => {
    try {
      const asignacion = await ViajeContainer.findByPk(req.params.id, {
        include: [
          { model: Viaje, as: 'viajes' },
          { model: Container, as: 'containers' },
          { model: CargaContainer, as: 'cargasContainer' }
        ]
      });
  
      if (!asignacion) {
        return res
          .status(404)
          .json({ status: 404, message: 'Asignación no encontrada' });
      }
  
      res.json({ status: 200, data: asignacion });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Error al obtener asignación',
        error: error.message
      });
    }
  };
  
  //crear nueva asignación viaje-container
  const createViajeContainer = async (req, res) => {
    const { viajeId, containerId, cargaContainerId } = req.body;
  
    try {
      if (!viajeId || !containerId || !cargaContainerId) {
        return res.status(400).json({
          status: 400,
          message: 'Faltan campos obligatorios (viajeId, containerId, cargaContainerId)'
        });
      }
  
      //opcional: verificar si ya existe la misma asignación
      const existente = await ViajeContainer.findOne({
        where: { viajeId, containerId, cargaContainerId }
      });
  
      if (existente) {
        return res
          .status(400)
          .json({ status: 400, message: 'La asignación ya existe' });
      }
  
      const nuevaAsignacion = await ViajeContainer.create({
        viajeId,
        containerId,
        cargaContainerId
      });
  
      res.status(201).json({
        status: 201,
        data: nuevaAsignacion,
        message: 'Asignación creada exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Error al crear asignación',
        error: error.message
      });
    }
  };
  
  //actualizar asignación
  const updateViajeContainer = async (req, res) => {
    try {
      const asignacion = await ViajeContainer.findByPk(req.params.id);
      if (!asignacion) {
        return res
          .status(404)
          .json({ status: 404, message: 'Asignación no encontrada' });
      }
  
      const { viajeId, containerId, cargaContainerId } = req.body;
  
      asignacion.viajeId = viajeId ?? asignacion.viajeId;
      asignacion.containerId = containerId ?? asignacion.containerId;
      asignacion.cargaContainerId = cargaContainerId ?? asignacion.cargaContainerId;
  
      await asignacion.save();
  
      res.status(200).json({
        status: 200,
        message: 'Asignación actualizada exitosamente',
        data: asignacion
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Error al actualizar asignación',
        error: error.message
      });
    }
  };
  
  //eliminar asignación
  const deleteViajeContainer = async (req, res) => {
    try {
      const asignacion = await ViajeContainer.findByPk(req.params.id);
      if (!asignacion) {
        return res
          .status(404)
          .json({ status: 404, message: 'Asignación no encontrada' });
      }
  
      await asignacion.destroy();
  
      res
        .status(200)
        .json({ status: 200, message: 'Asignación eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Error al eliminar asignación',
        error: error.message
      });
    }
  };
  
  module.exports = {
    getViajeContainers,
    getViajeContainerById,
    createViajeContainer,
    updateViajeContainer,
    deleteViajeContainer
  };