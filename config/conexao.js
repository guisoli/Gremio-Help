var mysql = require('mysql');

var conMySQL = function(){
        return mysql.createConnection({
            host : 'localhost',
            port : '3306',
            user : 'root',
            password : '1234567',
            database : 'cedsa'
    });
}

module.exports = conMySQL;