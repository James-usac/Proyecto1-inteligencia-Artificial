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
   regla = "findall(X, (peces(X,_,_,_,_,_,_,_), longevidadmedia(X)), Hola), write(Hola)."
   //swipl -s ejemplo.pl -g "hola(X)." -t halt.
   //cadena = 
   //animal(nombre,_,_,Z,_,no,si,si), Z > 25;
  //longevidadalta(Animimal) ; ; 
   //swipl -s ejemplo.pl -g "hola(X)." -t halt.
   exec(`swipl -s ejemplo.pl -g "${regla}" -t halt.`, (err, stdout, stderr) => {
  
    //lo que me devulve
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

  resultado = req.body;
   console.log(resultado)
   console.log(resultado.animal)
   Lista_animales = []
    var obj1 = new Animalesdto('Leon', 'leon xms');
    var obj2 = new Animalesdto('Jirafa', "leon xml");
    var obj3 = new Animalesdto('rinoceronte', "nuevo");
    Lista_animales.push(obj1);
    Lista_animales.push(obj2);
    Lista_animales.push(obj3);
    res.status(200).json({
        Lista_animales
    }); 
  });
   
    
}