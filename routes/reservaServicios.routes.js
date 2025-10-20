const express = require('express');
const router = express.Router();
const { 
    getReservaServicios,
    getReservaServicioById,
    createReservaServicio,
    updateReservaServicio,
    deleteReservaServicio
} = require('../controllers/reservaServicios.controller');

router.get('/', getReservaServicios);
router.get('/:id', getReservaServicioById);
router.post('/', createReservaServicio);
router.put('/:id', updateReservaServicio);
router.delete('/:id', deleteReservaServicio);

module.exports = router;
