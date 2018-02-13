var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/*
consign()
    .include('app/routes')
    .then('config/conexao.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
*/

// instanciar todas as routes aqui
var index = require('../app/routes/index');

// add os caminhos para acessar routes declaradas acima
app.use('/', index);


module.exports = app;