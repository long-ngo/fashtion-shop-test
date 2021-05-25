const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.ATLAS_URL, {
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
