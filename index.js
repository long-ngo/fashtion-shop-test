const express = require('express');
const mainRoute = require('./src/routes/mainRoute');
const db = require('./src/config/db/atlas');
const path = require('path');

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