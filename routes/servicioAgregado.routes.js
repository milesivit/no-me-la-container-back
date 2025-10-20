const express = require('express');
const router = express.Router();
const { 
    getServiciosAgregados,
    getServicioAgregadoById,
    createServicioAgregado,
    updateServicioAgregado,
    deleteServicioAgregado,
} = require('../controllers/servicioAgregado.controller');

router.get('/', getServiciosAgregados);
router.get('/:id', getServicioAgregadoById);
router.post('/', createServicioAgregado);
router.put('/:id', updateServicioAgregado);
router.delete('/:id', deleteServicioAgregado);

module.exports = router;
