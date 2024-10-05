const express = require('express');
const router = express.Router();
const productController = require('./../controller/productController');


// /api/v1/product
router.post('/',productController.createProduct);


module.exports = router;
