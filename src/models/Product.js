const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    stock: { type: Number },
    discount: { type: Number },
    image: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
