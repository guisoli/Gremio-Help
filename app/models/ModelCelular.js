

module.exports.salvarCelular = function(macCelular, callback){
    var conexao = require('../../config/conexao')();
    var date = new Date();

    var mes = date.getMonth() + 1;




    var sql  = 'insert into Celular values("' + macCelular +'", "'+ date.getDate() +'/'+ mes +'");';
    
    console.log('insert do celular = ' + sql);
    conexao.query(sql, callback);
    
}

module.exports.getCelular = function(macCelular, callback){
    var conexao = require('../../config/conexao')();
    conexao.query('select * from Celular where macCelular="' + macCelular +';"', callback);

}



module.exports.updateCelular = function(macCelular, dataVotacao, callback){
    var conexao = require('../../config/conexao')();
    conexao.query('update Celular set dataVotacao="'+ dataVotacao + '" where macCelular="' + macCelular + "';", callback);
}






/*function ModelCelular(){
    this._conexao = require('../../config/conexao')();
}

ModelCelular.prototype.salvarCelular = function(req, callback){

    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);


    var sql  = 'insert into Celular values(null,"' + ip +'", "'+ new Date() +'");';
    
    console.log('insert do celular = ' + sql);
    this._conexao.query(sql, callback);
    
}

ModelCelular.prototype.getCelular = function(macCelular, callback){
    this._conexao.query('select * from Celular where macCelular="' + macCelular +';"', callback);

}

ModelCelular.prototype.updateCelular = function(macCelular, dataVotacao, callback){
    this._conexao.query('update Celular set dataVotacao="'+ dataVotacao + '" where macCelular="' + macCelular + "';", callback);
}



module.exports = function(){
    return ModelCelular;
}*/