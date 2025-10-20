const express = require('express');
const router = express.Router();
const { 
    getContainerEstados,
    getContainerEstadoById,
    createContainerEstado,
    updateContainerEstado,
    deleteContainerEstado
} = require('../controllers/containerEstado.controller');

router.get('/', getContainerEstados);
router.get('/:id', getContainerEstadoById);
router.post('/', createContainerEstado);
router.put('/:id', updateContainerEstado);
router.delete('/:id', deleteContainerEstado);

module.exports = router;
