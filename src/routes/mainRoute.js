const userRoute = require('./userRoute');
//const siteRoute = require('./siteRoute');

function mainRoute(app) {
    app.use('/users', userRoute);
    //app.use('/', siteRoute);
}

module.exports = mainRoute;
