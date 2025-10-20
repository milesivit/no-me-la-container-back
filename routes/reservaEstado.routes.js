const express = require('express');
const router = express.Router();
const { 
    getReservaEstados,
    getReservaEstadoById,
    createReservaEstado,
    updateReservaEstado,
    deleteReservaEstado,
} = require('../controllers/reservaEstado.controller');

router.get('/', getReservaEstados);
router.get('/:id', getReservaEstadoById);
router.post('/', createReservaEstado);
router.put('/:id', updateReservaEstado);
router.delete('/:id', deleteReservaEstado);

module.exports = router;
