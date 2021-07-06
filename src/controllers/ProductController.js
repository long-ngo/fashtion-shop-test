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

    //[POST] /api/products/create
    createProduct(req, res, next) {
        const product = new Product(req.body);
        product
            .save()
            .then(() => res.send('Done!'))
            .catch(next);
    }

    //[PUT] /api/products/:id
    editProductById(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Done!'))
            .catch(next);
    }

    //[DELETE] /api/products/:id
    deleteProductById(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.send('Done!'))
            .catch(next);
    }
}

module.exports = new ProductController();
