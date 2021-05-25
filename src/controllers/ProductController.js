const Product = require('../models/Product');

class ProductController {
    //[GET] /api/products
    getProducts(req, res, next) {
        Product.find({})
            .then(products => res.send(products))
            .catch(next);
    }
}

module.exports = new ProductController();
