const express = require('express');
const router = express.Router();
const { 
    getRazonSociales,
    getRazonSocialById,
    createRazonSocial,
    updateRazonSocial,
    deleteRazonSocial
} = require('../controllers/razonSocial.controller');

router.get('/', getRazonSociales);
router.get('/:id', getRazonSocialById);
router.post('/', createRazonSocial);
router.put('/:id', updateRazonSocial);
router.delete('/:id', deleteRazonSocial);

module.exports = router;
