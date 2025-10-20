const express = require('express');
const router = express.Router();
const { 
    getFacturaImpuestos,
    getFacturaImpuestoById,
    createFacturaImpuesto,
    updateFacturaImpuesto,
    deleteFacturaImpuesto
} = require('../controllers/facturaImpuesto.controller');

router.get('/', getFacturaImpuestos);
router.get('/:id', getFacturaImpuestoById);
router.post('/', createFacturaImpuesto);
router.put('/:id', updateFacturaImpuesto);
router.delete('/:id', deleteFacturaImpuesto);

module.exports = router;
