const express = require('express');
const router = express.Router();
const { 
    getViajeEstados,
    getViajeEstadoById,
    createViajeEstado,
    updateViajeEstado,
    deleteViajeEstado
} = require('../controllers/viajeEstado.controller');

router.get('/', getViajeEstados);
router.get('/:id', getViajeEstadoById);
router.post('/', createViajeEstado);
router.put('/:id', updateViajeEstado);
router.delete('/:id', deleteViajeEstado);

module.exports = router;
