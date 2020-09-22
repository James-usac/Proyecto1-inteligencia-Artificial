var Animalesdto = require('../models/animalesdto')

exports.usuarios_list = function(req, res){
    res.send('Saludos amigos');
}

exports.consulta_animales = function (req, res) {
   // var bici = new Bicicleta( req.body.code,req.body.color,req.body.modelo);
    Lista_animales = []
    var obj1 = new Animalesdto('Leon', 'leon xms');
    var obj2 = new Animalesdto('Jirafa', "leon xml");
    Lista_animales.push(obj1);
    Lista_animales.push(obj2);
    
    res.status(200).json({
       Animalesdto: Lista_animales
    }); 
}