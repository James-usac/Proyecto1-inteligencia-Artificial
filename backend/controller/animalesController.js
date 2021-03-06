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
   if(req.body.longevidadn=='si'){
    cadena += ", longevidadmedia("+req.body.animal+")";
   }
   if(req.body.longevidada=='si'){
    cadena += ", longevidadalta("+req.body.animal+")";
   }
   if(req.body.pez=='si'){
    cadena += ", peces("+req.body.animal+",_,_,_,_,_,_,_)";
   }
   if(req.body.anfibio=='si'){
    cadena += ", aves("+req.body.animal+",_,_,_,_,_,_,_)";
   }
   if(req.body.reptil=='si'){
    cadena += ", reptiles("+req.body.animal+",_,_,_,_,_,_,_)";
   }
   if(req.body.moluscos=='si'){
    cadena += ",moluscos("+req.body.animal+",_,_,_,_,_,_,_)";
   }
   if(req.body.mamifero=='si'){
    cadena += ",mamiferos("+req.body.animal+",_,_,_,_,_,_,_)";
   }
   if(req.body.invertebrado=='si'){
    cadena += ",invertebrados("+req.body.animal+")";
   }if(req.body.vertebrado=='si'){
    cadena += ", vertebrados("+req.body.animal+")";
   }if(req.body.animalgrande=='si'){
    cadena += ", animalgrande("+req.body.animal+")";
   }if(req.body.animalpequeno=='si'){
    cadena += ", animalpequeno("+req.body.animal+")";
   }
   if(req.body.velocidadnormal=='si'){
    cadena += ", velocidadnormal("+req.body.animal+")";
   }
   if(req.body.animalrapido=='si'){
    cadena += ", animalrapido("+req.body.animal+")";
   }
   if(req.body.animallento=='si'){
    cadena += ", animallento("+req.body.animal+")";
   }
   if(req.body.sienten=='si'){
    cadena += ", sienten("+req.body.animal+")";
   }
   if(req.body.vulnerable=='si'){
    cadena += ", vulnerable("+req.body.animal+")";
   }
   if(req.body.novulnerable=='si'){
    cadena += ", novulnerable("+req.body.animal+")";
   }
   if(req.body.tienenvida=='si'){
    cadena += ", tienenvida("+req.body.animal+")";
   }
   if(req.body.respiran=='si'){
    cadena += ", respiran("+req.body.animal+")";
   }
   if(req.body.vivenenagua=='si'){
    cadena += ", vivenenagua("+req.body.animal+")";
   }
   if(req.body.ponenhuevos=='si'){
    cadena += ", ponenhuevos("+req.body.animal+")";
   }
   if(req.body.tienenalas=='si'){
    cadena += ", tienenalas("+req.body.animal+")";
   }
   if(req.body.vuelan=='si'){
    cadena += ", vuelan("+req.body.animal+")";
   }
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
  if(stdout=="{}"){
    Lista_animales = []
    var obj1 = new Animalesdto("No se encontro informacion", "");
    Lista_animales.push(obj1);
  }//tiburon
  if(req.body.animal!="X"){
    if(stdout!="{}"){
      Lista_animales = []
      var obj1 = new Animalesdto(req.body.animal, "");
      Lista_animales.push(obj1);
    }
  }
  resultado = req.body;
   console.log(resultado)
   console.log(resultado.animal)
    res.status(200).json({
        Lista_animales
    }); 
  });
   
    
}