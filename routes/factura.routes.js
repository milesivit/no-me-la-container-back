const express = require('express');
const router = express.Router();
const { 
    getFacturas,
    getFacturaById,
    createFactura,
    updateFactura,
    deleteFactura
} = require('../controllers/factura.controller');

router.get('/', getFacturas);
router.get('/:id', getFacturaById);
router.post('/', createFactura);
router.put('/:id', updateFactura);
router.delete('/:id', deleteFactura);

module.exports = router;
