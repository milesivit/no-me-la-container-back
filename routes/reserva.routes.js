const express = require('express');
const router = express.Router();
const { 
    getReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva,
} = require('../controllers/reserva.controller');

router.get('/', getReservas);
router.get('/:id', getReservaById);
router.post('/', createReserva);
router.put('/:id', updateReserva);
router.delete('/:id', deleteReserva);

module.exports = router;
