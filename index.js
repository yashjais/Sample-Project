const express = require('express');
const router = require('./config/routes');
const setUpDb = require('./config/database')
require('dotenv').config();

const app = express();
const port = process.env.PORT;

setUpDb();

app.use(express.json())
app.use('/', router);

app.listen(port, () => {
    console.log('listening on the port - ', port)
});