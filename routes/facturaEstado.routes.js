const express = require('express');
const router = express.Router();
const { 
    getFacturaEstados,
    getFacturaEstadoById,
    createFacturaEstado,
    updateFacturaEstado,
    deleteFacturaEstado,
} = require('../controllers/facturaEstado.controller');

router.get('/', getFacturaEstados);
router.get('/:id', getFacturaEstadoById);
router.post('/', createFacturaEstado);
router.put('/:id', updateFacturaEstado);
router.delete('/:id', deleteFacturaEstado);

module.exports = router;
