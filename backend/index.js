const express = require("express");
var app = express();
const cors = require('cors');
var path = require('path');
var logger = require('morgan');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(express.json());

var mongoose = require('mongoose');

// mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
var mongoDB = "mongodb://localhost/animales";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error: '));


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