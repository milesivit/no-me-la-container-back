const express = require('express');
const router = express.Router();
const { 
    getCargaContainers,
    getCargaContainerById,
    createCargaContainer,
    updateCargaContainer,
    deleteCargaContainer
} = require('../controllers/cargaConteiner.controller');

router.get('/', getCargaContainers);
router.get('/:id', getCargaContainerById);
router.post('/', createCargaContainer);
router.put('/:id', updateCargaContainer);
router.delete('/:id', deleteCargaContainer);

module.exports = router;
