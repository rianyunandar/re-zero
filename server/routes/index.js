var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/admin/login')
});
router.get('/404', adminController.view404 );
router.get('/admin/login', adminController.viewLogin );
router.post('/admin/login', adminController.actionLogin );
router.get('/admin/logout', adminController.actionLogout );

module.exports = router;
