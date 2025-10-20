const express = require('express');
const router = express.Router();
const { 
    getCategoriasCarga,
    getCategoriaCargaById,
    createCategoriaCarga,
    updateCategoriaCarga,
    deleteCategoriaCarga
} = require('../controllers/categoriaCarga.controller');

router.get('/', getCategoriasCarga);
router.get('/:id', getCategoriaCargaById);
router.post('/', createCategoriaCarga);
router.put('/:id', updateCategoriaCarga);
router.delete('/:id', deleteCategoriaCarga);

module.exports = router;
