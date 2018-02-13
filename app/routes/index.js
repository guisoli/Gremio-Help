var express = require('express');

var router = express.Router();

var controller = require('../controllers/home');

router.get('/', function(req, res){

      controller.formAddMusica(req, res);

});

router.post('/musica/salvar', function(req, res){
      controller.salvarMusica(req, res);
      res.render('../views/sucesso');
});

module.exports = router;