function ModelCelular(){
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

ModelCelular.prototype.getCelular = function(ipCelular, callback){
    this._conexao.query('select * from Celular where ipCelular="' + ipCelular +';"', callback);

}

ModelCelular.prototype.updateCelular = function(ipCelular, dataVotacao, callback){
    this._conexao.query('update Celular set dataVotacao="'+ dataVotacao + '" where ipCelular="' + ipCelular + "';", callback);
}



module.exports = function(){
    return ModelCelular;
}