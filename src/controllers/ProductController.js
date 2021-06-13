const Product = require('../models/Product');

class ProductController {
    //[GET] /api/products
    getProducts(req, res, next) {
        Product.find({})
            .then((products) => res.json(products))
            .catch(next);
    }

    //[GET] /api/products/:id
    getProductById(req, res, next) {
        Product.find({ _id: req.params.id })
            .then((products) => res.json(products))
            .catch(next);
    }
}

module.exports = new ProductController();
