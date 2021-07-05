const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    username: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('User', userSchema);
