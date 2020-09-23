var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalesShema = new Schema({ 
    nombre: String,
    altura: String,
    peso: String,
    anio: Number,
    nombre_cientifico: String,
    continente: String,
    poblacion: String,
    velocidad: String,
});

//el cb es callback no da el resultado
animalesShema.statics.add = function(animal, cb){
    this.create(animal,cb);
}

animalesShema.statics.allanimales = function(cb){
    return this.find({},cb);
}

animalesShema.statics.createInstance = function(nombre, altura, peso, anio,nombre_cientifico
    ,continente,poblacion,velocidad){
    return new this({
        nombre: nombre,
        altura: altura,
        peso: peso,
        anio: anio,
        nombre_cientifico: nombre_cientifico,
        continente: continente,
        poblacion: poblacion,
        velocidad: velocidad
    });
}

module.exports = mongoose.model('animals',animalesShema);