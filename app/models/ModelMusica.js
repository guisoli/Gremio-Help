
var conexao = require('../../config/conexao')();

module.exports.salvarMusica =  function(req, musica, callback){


    var modelCelular = require('./ModelCelular');
    /*var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);*/

    
    var getmac = require('getmac');
    
    getmac.getMac(function(err, macAddress){


        modelCelular.salvarCelular(macAddress, function(err, result){
            var sql = 'insert into Voto values(null, "' + macAddress + '","' + musica.nomeMusica + '","' + musica.artista + '","' + musica.genero + '");';
            console.log('insert do voto = ' + sql);
            conexao.query(sql, musica, callback);
        });
    
    });




}


/*
function ModelMusica(){
    this._conexao = require('../../config/conexao')();
}

ModelMusica.prototype.salvarMusica = function(req, musica, callback){
    var modelCelular = require('./ModelCelular');


    modelCelular.salvarCelular(req, function(err, result){
        console.log('Salvou o celular\nResult = ' + result);
    });

    var sql = "'insert into Musica set ?, idCelular = ' + idCelular";
    this._conexao.query('', musica, callback);

}

module.exports = function(){
    console.log('\nexportou carai\n');
    return ModelMusica;
}
*/