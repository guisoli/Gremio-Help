var express = require('express');

var router = express.Router();

var controller = require('../controllers/home');

router.get('/', function(req, res){

      controller.formAddMusica(req, res);

});

router.post('/musica/salvar', function(req, res){
      console.log("Entrou no post");
      controller.salvarMusica(req, res);
});

module.exports = router;