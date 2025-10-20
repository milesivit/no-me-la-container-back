const express = require('express');
const router = express.Router();
const { 
    getRemitos,
    getRemitoById,
    createRemito,
    updateRemito,
    deleteRemito
} = require('../controllers/remito.controller');

router.get('/', getRemitos);
router.get('/:id', getRemitoById);
router.post('/', createRemito);
router.put('/:id', updateRemito);
router.delete('/:id', deleteRemito);

module.exports = router;
