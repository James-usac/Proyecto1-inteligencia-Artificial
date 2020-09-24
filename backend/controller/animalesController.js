var Animalesdto = require('../models/animalesdto')
var animalesShema = require('../models/animalesmoongo')
var cosulta = require('../models/consultadt')
const { exec } = require('child_process');

//db.animal.insert({ "nombre": "leon" ,"altura": "1.70 mt","peso": "30 kg","anio": 20,"nombre_cientifico": "Panthera leo","continente":"Africano, Europeo","población": 2000,"velocidad": "100 km/hrs"});
exports.usuarios_list = function(req, res){
    //var bici = animalesShema.createInstance("rinoceronte","1.7","30",20,"pantera","africano","2000","100K");
    //animalesShema.add(bici);
    consulta = { nombre: req.params.id }
    animalesShema.find(consulta, (err, usuarios) => { 
        res.send(usuarios[0])
    }); 
}

exports.consulta_animales = function(req, res) {
   // var bici = new Bicicleta( req.body.code,req.body.color,req.body.modelo);
   bandera = "";
   cadena = "animales("+req.body.animal+")";
   if(req.body.longevidadb=='si'){
    cadena += ", longevidadbaja("+req.body.animal+")";
   }
   if(req.body.longevidadn){
    cadena = ", animales("+req.body.animal+")";
   }/*
   if(req.body.longevidada){
    cadena = ", animales("+req.body.animal+")";
   }
   if(req.body.anfibio){
    cadena = ", animales("+req.body.animal+")";
   }
   if(req.body.invertebrado){
    cadena = ", animales("+req.body.animal+")";
   }if(req.body.vertebrado){
    cadena = ", animales("+req.body.animal+")";
   }*/
   console.log(cadena)
   //regla = "findall(X, (peces(X,_,_,_,_,_,_,_), longevidadmedia(X)), Hola), write(Hola)."
   regla = "findall(X, ("+cadena+"), Hola), lista_animales(Hola)."
   console.log(regla)
   //swipl -s ejemplo.pl -g "hola(X)." -t halt.
   //cadena = 
   //animal(nombre,_,_,Z,_,no,si,si), Z > 25;
  //longevidadalta(Animimal) ; ; 
   //swipl -s ejemplo.pl -g "hola(X)." -t halt.
   exec(`swipl -s ejemplo.pl -g "${regla}" -t halt.`, (err, stdout, stderr) => {
  
    //lo que me devulve
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  variable =  stdout.split('@');
  Lista_animales = []
  variable.forEach(obj => {
    variable2 =  obj.split(',');
    var obj1 = new Animalesdto(variable2[0], variable2[1]);
    Lista_animales.push(obj1);
  });
  resultado = req.body;
   console.log(resultado)
   console.log(resultado.animal)
    res.status(200).json({
        Lista_animales
    }); 
  });
   
    
}