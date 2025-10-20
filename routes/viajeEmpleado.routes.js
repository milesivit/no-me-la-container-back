const express = require('express');
const router = express.Router();
const { 
    getViajeEmpleados,
    getViajeEmpleadoById,
    createViajeEmpleado,
    updateViajeEmpleado,
    deleteViajeEmpleado
} = require('../controllers/viajeEmpleado.controller');

router.get('/', getViajeEmpleados);
router.get('/:id', getViajeEmpleadoById);
router.post('/', createViajeEmpleado);
router.put('/:id', updateViajeEmpleado);
router.delete('/:id', deleteViajeEmpleado);

module.exports = router;
