const express = require('express');
const router = express.Router();
const { 
    getImpuestos,
    getImpuestoById,
    createImpuesto,
    updateImpuesto,
    deleteImpuesto,
} = require('../controllers/impuesto.controller');

router.get('/', getImpuestos);
router.get('/:id', getImpuestoById);
router.post('/', createImpuesto);
router.put('/:id', updateImpuesto);
router.delete('/:id', deleteImpuesto);

module.exports = router;
