var express = require('express');
const publicController = require('../controllers/publicController');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/admin/login')
});
router.get('/404', publicController.view404 );

module.exports = router;
