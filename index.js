const express = require('express');
const path = require('path');
const mainRoute = require('./src/routes/mainRoute');
const db = require('./src/config/db/atlas');

require('dotenv').config();
db.connect();

const app = express();
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