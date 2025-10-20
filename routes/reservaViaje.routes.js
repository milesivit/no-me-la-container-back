const express = require('express');
const router = express.Router();
const { 
    getReservaViajes,
    getReservaViajeById,
    createReservaViaje,
    updateReservaViaje,
    deleteReservaViaje
} = require('../controllers/reservaViaje.controller');

router.get('/', getReservaViajes);
router.get('/:id', getReservaViajeById);
router.post('/', createReservaViaje);
router.put('/:id', updateReservaViaje);
router.delete('/:id', deleteReservaViaje);

module.exports = router;
