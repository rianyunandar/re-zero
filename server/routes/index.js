var express = require('express');
var router = express.Router();

const publicController = require('../controllers/publicController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', publicController.Login );

module.exports = router;
