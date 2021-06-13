const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/:id', ProductController.getProductById);
router.get('/', ProductController.getProducts);

module.exports = router;
