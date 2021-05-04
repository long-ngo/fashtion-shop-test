const express = require('express');
const mainRoute = require('./src/routes/mainRoute');

const app = express();

const port = process.env.PORT || 5000;

mainRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});