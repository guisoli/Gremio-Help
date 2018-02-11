module.exports.formAddMusica = function(req ,res){
    
     res.render('../views/index');
}

module.exports.salvarMusica = function(req, res){

    var modelMusica = require('../models/ModelMusica')();

    console.log("\nrequire modelmusica\n");

    modelMusica.salvarMusica(req, '', function(){
        console.log('Salvou a musica');
    });

    


}