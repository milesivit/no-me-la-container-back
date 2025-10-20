const express = require('express');
const router = express.Router();
const { 
    getSexos,
    getSexoById,
    createSexo,
    updateSexo,
    deleteSexo
} = require('../controllers/sexo.controller');

router.get('/', getSexos);
router.get('/:id', getSexoById);
router.post('/', createSexo);
router.put('/:id', updateSexo);
router.delete('/:id', deleteSexo);

module.exports = router;
