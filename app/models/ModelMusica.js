
var conexao = require('../../config/conexao')();

module.exports.salvarMusica =  function(req, musica, callback){

    var nomeMusica = musica.nomeMusica;
    var artista = musica.artista;
    var genero = musica.genero;
    var modelCelular = require('./ModelCelular');
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);
    var voto = '';



    modelCelular.getCelular(ip, function(err,result){
       
        if(err) throw err;
        try{

            var teste = result[0].ipCelular;
            voto = modelCelular.validaCelular(result, function(){});
        }catch(ex){

            console.log(ip + ' votou pela primeira vez.');
            modelCelular.salvarCelular(ip, function(err){if(err) throw err;});
            voto = 'sucesso';
        }

        if(voto=='sucesso'){

            var sql = 'insert into Voto values(null, "' + ip + '","' + nomeMusica + '","' + artista + '","' + genero + '")';
            console.log(sql);
            conexao.query(sql, function(err){ if(err) throw err; });
            
        }

        var retorno = '{"resultado" : "'   + voto +    '"}';

        callback(retorno);
    }); 

}

