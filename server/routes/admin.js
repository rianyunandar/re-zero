const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const {isLogin,protect} = require('../middlewares/auth');

router.use(isLogin)

router.get('/dashboard/', adminController.viewDashboard );
router.get('/comment/', adminController.viewComment );
router.get('/like/', adminController.viewLike );
router.get('/user/', adminController.viewUser );
router.get('/article/', adminController.viewArticle );

router.get('/category/', adminController.viewCategory );
router.post('/category/', adminController.addCategory );
router.put('/category/', adminController.editCategory );
router.delete('/category/:id', adminController.deleteCategory );

router.get('/image/', adminController.viewImage );

module.exports=router;