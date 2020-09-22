const express = require("express");
var app = express();
const cors = require('cors');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(express.json());


var animalesRouter = require('./routes/animales')


//routas
app.use('/animales', animalesRouter);

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

module.exports = app;


/*
var express = require('express'); 
const app = express();
app.use(express.json());

app.post('/', function(req, res){ 
    console.log(req.body); 
    res.send("ok"); 
}); 

app.listen(3000); 
console.log('listening to http://localhost:3000'); 
*/