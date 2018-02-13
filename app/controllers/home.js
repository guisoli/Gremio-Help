module.exports.formAddMusica = function(req ,res){
    
     res.render('../views/index');
}

module.exports.salvarMusica = function(req, res){

    var modelMusica = require('../models/ModelMusica');
    var musica = req.body;
    var resultado;
    modelMusica.salvarMusica(req, musica, function(resultado){
    
        var json = null;
        json =  JSON.parse(resultado);
    
        res.render('../views/resultado', { verificacao : json });
    });



}