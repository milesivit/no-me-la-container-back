const express = require('express');
const router = express.Router();
const { 
    getPuertos,
    getPuertoById,
    createPuerto,
    updatePuerto,
    deletePuerto
} = require('../controllers/puerto.controller');

router.get('/', getPuertos);
router.get('/:id', getPuertoById);
router.post('/', createPuerto);
router.put('/:id', updatePuerto);
router.delete('/:id', deletePuerto);

module.exports = router;
