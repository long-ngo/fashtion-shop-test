const userRoute = require('./userRoute');
const productRoute = require('./productRoute');

function mainRoute(app) {
    app.use('/api/users', userRoute);
    app.use('/api/products', productRoute);
}

module.exports = mainRoute;
