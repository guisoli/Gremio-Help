module.exports.formAddMusica = function(req ,res){
    
     res.render('../views/index');
}

module.exports.salvarMusica = function(req, res){

    var modelMusica = require('../models/ModelMusica');
    var musica = req.body;
    modelMusica.salvarMusica(req, musica, function(){
        
    });

}