const express = require('express');
const router = express.Router();
const { 
    getCondicionesFiscales,
    getCondicionFiscalById,
    createCondicionFiscal,
    updateCondicionFiscal,
    deleteCondicionFiscal
} = require('../controllers/condicionFiscal.controller');

router.get('/', getCondicionesFiscales);
router.get('/:id', getCondicionFiscalById);
router.post('/', createCondicionFiscal);
router.put('/:id', updateCondicionFiscal);
router.delete('/:id', deleteCondicionFiscal);

module.exports = router;
