var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/login', adminController.viewLogin );
router.post('/login', adminController.actionLogin );
router.get('/logout', adminController.actionLogout );



router.get('/dashboard/', adminController.viewDashboard );
router.get('/comment/', adminController.viewComment );
router.get('/like/', adminController.viewLike );
router.get('/user/', adminController.viewUser );
router.get('/article/', adminController.viewArticle );
router.get('/category/', adminController.viewCategory );
router.get('/image/', adminController.viewImage );

module.exports=router;