const express = require('express');
const path = require('path');
const cors = require('cors');

const mainRoute = require('./src/routes/mainRoute');
const db = require('./src/config/db/mongo');

//env
require('dotenv').config();

//connect database
db.connect();

const app = express();
app.use(cors());

//static file
app.use(express.static(path.join(__dirname, '/src/public')));

mainRoute(app);

// Server static assets if production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});