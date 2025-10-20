const express = require('express');
const router = express.Router();
const { 
    getCargos,
    getCargoById,
    createCargo,
    updateCargo,
    deleteCargo
} = require('../controllers/cargo.controller');

router.get('/', getCargos);
router.get('/:id', getCargoById);
router.post('/', createCargo);
router.put('/:id', updateCargo);
router.delete('/:id', deleteCargo);

module.exports = router;
