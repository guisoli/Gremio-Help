

module.exports.salvarCelular = function(ipCelular, callback){
    
    var conexao = require('../../config/conexao')();
    var date = new Date();
    var mes = date.getMonth() + 1;
    var sql  = 'insert into Celular values("' + ipCelular +'", "'+ date.getDate() +'/'+ mes +'");';
    conexao.query(sql, callback);
    
}

module.exports.getCelular = function(ipCelular, callback){
   
    var conexao = require('../../config/conexao')();
    var sql = 'select * from Celular where ipCelular="' + ipCelular +'";';
    console.log(sql);

    conexao.query(sql, callback);

}



module.exports.updateCelular = function(ipCelular, dataVotacao, callback){
    var conexao = require('../../config/conexao')();
    var sql = 'update Celular set dataVotacao="'+ dataVotacao + '" where ipCelular="' + ipCelular + '";';
    console.log(sql);
    conexao.query(sql, callback);
}

module.exports.validaCelular = function(result, callback){
    var ipCelular = result[0].ipCelular;
    var dataBanco = result[0].dataVotacao;
    var date = new Date();
    var mes = date.getMonth() + 1;
    var dataVotacao =  date.getDate() +'/'+ mes;

    if(dataVotacao==dataBanco) {
    
        console.log(ipCelular + ' já votou hoje.');
        return 'javotou';
    
    }else {
        console.log(ipCelular + ' acabou de votar pela primeira vez hoje.');
        modelCelular = require('./ModelCelular');
        modelCelular.updateCelular(ipCelular, dataVotacao);
        
        callback();
        return 'sucesso';
    }
}
