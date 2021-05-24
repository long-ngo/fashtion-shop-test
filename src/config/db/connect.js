const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.ATLAS_URL || 'mongodb+srv://long-ngo:281099@cluster0.i9sqn.mongodb.net/fashtion_shop?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failule!!!', error);
    }
}

module.exports = { connect };
