const express = require('express');
const router = express.Router();

const stockController = require('../app/controllers/stockController')

router.get('/', (req, res, next) => {
    res.send('Welcome to the Stock Application!')
});

router.get('/stock', stockController.list)
router.post('/stock', stockController.create)

module.exports = router;