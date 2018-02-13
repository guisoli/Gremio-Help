
var conexao = require('../../config/conexao')();

module.exports.salvarMusica =  function(req, musica, callback){

    var musica = req.nomeMusica;
    var artista = req.artista;
    var genero = req.genero;
    var modelCelular = require('./ModelCelular');
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);

    modelCelular.getCelular(ip, function(err,result){
       
        if(err) throw err;
        try{

            var teste = result[0].ipCelular;
            modelCelular.validaCelular(result, function(){});
        }catch(ex){
            console.log(ex);

            console.log(ip + ' votou pela primeira vez.');
            modelCelular.salvarCelular(ip, function(err){if(err) throw err;});

        }finally{
            var sql = 'insert into Voto values(null, "' + ip + '","' + musica + '","' + artista + '","' + genero + '")';
            conexao.query(sql, function(err){ if(err) throw err; });
        }

    });

}

