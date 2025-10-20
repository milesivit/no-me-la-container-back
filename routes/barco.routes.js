const express = require('express');
const router = express.Router();
const { 
    getBarcos,
    getBarcoById,
    createBarco,
    updateBarco,
    deleteBarco,
} = require('../controllers/barco.controller');

router.get('/', getBarcos);
router.get('/:id', getBarcoById);
router.post('/', createBarco);
router.put('/:id', updateBarco);
router.delete('/:id', deleteBarco);

module.exports = router;
