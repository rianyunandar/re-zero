const Users = require('../models/modelUser');
const generateToken = require('../utils/generateToken.js')
const auth = require('../middlewares/auth');

module.exports = {
  



    viewDashboard :(req,res) => {
        res.render('admin/dashboard/viewDashboard');
    },
    viewArticle :(req,res) => {
        res.render('admin/article/viewArticle');
    },
    viewUser :(req,res) => {
        res.render('admin/user/viewUser');
    },
    viewCategory :(req,res) => {
        res.render('admin/category/viewCategory');
    },
    viewComment :(req,res) => {
        res.render('admin/comment/viewComment');
    },
    viewLike :(req,res) => {
        res.render('admin/like/viewLike');
    },
    viewImage :(req,res) => {
        res.render('admin/image/viewImage');
    }
    
    
}