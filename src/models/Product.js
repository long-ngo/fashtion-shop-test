const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productName: {type: String},
    unitsInStock: {type: Number},
    unitPrice: {type: Number},
    image: {type: String}
});

module.exports = mongoose.model('Product', productSchema);
