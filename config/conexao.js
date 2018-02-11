var mysql = require('mysql');

var conMySQL = function(){
        console.log('DB conectado');
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234567',
            database : 'cedsa'
    });
}

module.exports = function(){
    return conMySQL;
};
