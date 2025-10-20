const express = require('express');
const router = express.Router();
const { 
    getViajeContainers,
    getViajeContainerById,
    createViajeContainer,
    updateViajeContainer,
    deleteViajeContainer
} = require('../controllers/viajeContainer.controller');

router.get('/', getViajeContainers);
router.get('/:id', getViajeContainerById);
router.post('/', createViajeContainer);
router.put('/:id', updateViajeContainer);
router.delete('/:id', deleteViajeContainer);

module.exports = router;
