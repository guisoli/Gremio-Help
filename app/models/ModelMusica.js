
function ModelMusica(){
    this._conexao = require('../../config/conexao')();
}

ModelMusica.prototype.salvarMusica = function(req, musica, callback){
    var modelCelular = require('./ModelCelular');


    modelCelular.salvarCelular(req, function(err, result){
        console.log('Salvou o celular\nResult = ' + result);
    });


    //this._conexao.query('insert into Musica set ?, idCelular = ' + idCelular, musica, callback);

}

module.exports = function(){
    console.log('exportou carai');
    return ModelMusica;
}