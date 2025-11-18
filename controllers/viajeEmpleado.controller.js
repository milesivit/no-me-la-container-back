const { 
    Viaje_empleado: ViajeEmpleado, 
    Viaje, 
    Empleado,
    Puerto,
    viaje_estado: ViajeEstado,
    Barco 
} = require('../models');


// Obtener todas las asignaciones viaje-empleado con relaciones
const getViajeEmpleados = async (req, res) => {
    try {
        const asignaciones = await ViajeEmpleado.findAll({
            include: [
                { 
                    model: Viaje,
                    as: 'viajes',
                    include: [
                        { model: Puerto, as: 'puertoOrigen', attributes: ['id', 'nombre'] },
                        { model: Puerto, as: 'puertoDestino', attributes: ['id', 'nombre'] },
                        { model: Barco,  as: 'barcos',       attributes: ['id', 'nombre'] },
                        { model: ViajeEstado, as: 'viajeEstado', attributes: ['id', 'nombre'] }
                    ]
                },
                { 
                    model: Empleado,
                    as: 'empleados'
                }
            ]
        });

        res.json({ status: 200, data: asignaciones });

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignaciones', error: error.message });
    }
};


// Obtener asignación por ID
const getViajeEmpleadoById = async (req, res) => {
    try {
        const asignacion = await ViajeEmpleado.findByPk(req.params.id, {
            include: [
                { 
                    model: Viaje,
                    as: 'viajes',
                    include: [
                        { model: Puerto, as: 'puertoOrigen', attributes: ['id', 'nombre'] },
                        { model: Puerto, as: 'puertoDestino', attributes: ['id', 'nombre'] },
                        { model: Barco,  as: 'barcos',       attributes: ['id', 'nombre'] },
                        { model: ViajeEstado, as: 'viajeEstado', attributes: ['id', 'nombre'] }
                    ]
                },
                { 
                    model: Empleado,
                    as: 'empleados'
                }
            ]
        });

        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        res.json({ status: 200, data: asignacion });

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al obtener asignación', error: error.message });
    }
};


// Crear nueva asignación viaje-empleado
const createViajeEmpleado = async (req, res) => {
    const { viajeId, empleadoId } = req.body;
    try {
        if (!viajeId || !empleadoId) {
            return res.status(400).json({ status: 400, message: 'Faltan campos obligatorios' });
        }

        // Verificar si ya existe la asignación
        const existente = await ViajeEmpleado.findOne({ where: { viajeId, empleadoId } });
        if (existente) {
            return res.status(400).json({ status: 400, message: 'La asignación ya existe' });
        }

        const nuevaAsignacion = await ViajeEmpleado.create({ viajeId, empleadoId });

        res.status(201).json({
            status: 201,
            data: nuevaAsignacion,
            message: 'Asignación creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al crear asignación', error: error.message });
    }
};

// Actualizar asignación
const updateViajeEmpleado = async (req, res) => {
    try {
        const asignacion = await ViajeEmpleado.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        const { viajeId, empleadoId } = req.body;

        asignacion.viajeId = viajeId ?? asignacion.viajeId;
        asignacion.empleadoId = empleadoId ?? asignacion.empleadoId;

        await asignacion.save();

        res.status(200).json({
            status: 200,
            message: 'Asignación actualizada exitosamente',
            data: asignacion
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al actualizar asignación', error: error.message });
    }
};

// Eliminar asignación
const deleteViajeEmpleado = async (req, res) => {
    try {
        const asignacion = await ViajeEmpleado.findByPk(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ status: 404, message: 'Asignación no encontrada' });
        }

        await asignacion.destroy();

        res.status(200).json({ status: 200, message: 'Asignación eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error al eliminar asignación', error: error.message });
    }
};

// Obtener todos los viajes de un empleado (moderador)
const getViajesByEmpleado = async (req, res) => {
    try {
      const { empleadoId } = req.params; // ID del empleado logueado
  
      const asignaciones = await ViajeEmpleado.findAll({
        where: { empleadoId },
        include: [
          { 
            model: Viaje,
            as: 'viajes',
            include: [
              { model: Puerto, as: 'puertoOrigen', attributes: ['id', 'nombre'] },
              { model: Puerto, as: 'puertoDestino', attributes: ['id', 'nombre'] },
              { model: Barco, as: 'barcos', attributes: ['id', 'nombre'] },
              { model: ViajeEstado, as: 'viajeEstado', attributes: ['id', 'nombre'] }
            ]
          }
        ]
      });
  
      res.json({ status: 200, data: asignaciones });
    } catch (error) {
      res.status(500).json({ status: 500, message: 'Error al obtener viajes del empleado', error: error.message });
    }
  };
  
module.exports = {
    getViajeEmpleados,
    getViajeEmpleadoById,
    createViajeEmpleado,
    updateViajeEmpleado,
    deleteViajeEmpleado,
    getViajesByEmpleado
};
