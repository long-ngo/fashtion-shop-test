const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/:id', ProductController.getProductById);
router.get('/', ProductController.getProducts);

router.post('/create', ProductController.createProduct);

router.put('/:id', ProductController.editProductById);
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;
