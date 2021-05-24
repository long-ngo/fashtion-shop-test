const express = require('express');
const mainRoute = require('./src/routes/mainRoute');

require('dotenv').config();

const app = express();
mainRoute(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});