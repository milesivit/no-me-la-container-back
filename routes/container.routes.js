const express = require('express');
const router = express.Router();
const { 
    getContainers,
    getContainerById,
    createContainer,
    updateContainer,
    deleteContainer
} = require('../controllers/container.controller');

router.get('/', getContainers);
router.get('/:id', getContainerById);
router.post('/', createContainer);
router.put('/:id', updateContainer);
router.delete('/:id', deleteContainer);

module.exports = router;
