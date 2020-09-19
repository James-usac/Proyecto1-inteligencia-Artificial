const express = require("express");
const app = express();

var path = require('path');
var animalesRouter = require('./routes/animales')

app.use(express.static(path.join(__dirname, 'public')));

//routas
app.use('/animales', animalesRouter);

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

module.exports = app;