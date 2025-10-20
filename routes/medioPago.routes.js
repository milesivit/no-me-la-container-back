const express = require('express');
const router = express.Router();
const { 
    getMediosPago,
    getMedioPagoById,
    createMedioPago,
    updateMedioPago,
    deleteMedioPago,
} = require('../controllers/medioPago.controller');

router.get('/', getMediosPago);
router.get('/:id', getMedioPagoById);
router.post('/', createMedioPago);
router.put('/:id', updateMedioPago);
router.delete('/:id', deleteMedioPago);

module.exports = router;
