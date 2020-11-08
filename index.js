const express = require('express');

const app = express();
const port = 3000;

const router = require('./config/routes');

// app.get('/', (req, res) => {
//     res.send('hello world!')
// });
app.use('/', router);

app.listen(port, () => {
    console.log('listening on the port - ', port)
});