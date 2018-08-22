const express = require('express');
const router = express.Router();
const product = require('../helpers/productHelper');

router.get('/women', product.getWomensFootwear);
router.get('/men', product.getMensFootwear);
router.get('/:id', product.getSingleProduct);

module.exports = router;