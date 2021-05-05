const express = require('express');
const mainRoute = require('./src/routes/mainRoute');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

mainRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});