const Users = require('../models/modelUser');
const generateToken = require('../utils/generateToken.js')
// const auth = require('../middlewares/auth');

const Category = require ( '../models/modelCategory.js')


module.exports = {
    viewLogin :(req,res) => {
        try {
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            if (req.session.user == null || req.session.user == undefined) {
              res.render('login', {
                alert,
                title: "Re:Zero | Login"
              }),
              console.log(req.session.user);
            } else {
              res.redirect('/admin/dashboard');
            }
          } catch (error) {
            res.redirect('/admin/login');
          }
    },
    actionLogin: async (req, res) => {
      try {
          const { email, password } = req.body
          const user = await Users.findOne({ email })
    
      if (user && (await user.matchPassword(password))) {
          req.session.user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          },
          res.redirect('/admin/dashboard');
        } else {
          // res.status(401)
          req.flash('alertMessage', 'Invalid email or password')
          req.flash('alertStatus', 'danger');
          res.redirect('/admin/login');
        }
      
       
  
      } catch (error) {
        res.redirect('/404');
      }
    },
  
    actionLogout: (req, res) => {
      req.session.destroy();
      res.redirect('/admin/login');
    },

    view404 :(req,res) => {
      res.render('404');
  },
    



    viewDashboard :(req,res) => {
        try {
        res.render('admin/dashboard/viewDashboard',{
            title: "Re:zero | Dashboard",
            user: req.session.user,
          });
    }  catch (error) {
        res.redirect('/admin/dashboard');
      }
    },

    viewArticle :(req,res) => {
      try {
        res.render('admin/article/viewArticle',{
          title: "Re:zero | Dashboard",
          user: req.session.user,
        });
      }  catch (error) {
        res.redirect('/admin/article');
      }
    },

    viewUser :(req,res) => {
      try {
        res.render('admin/user/viewUser',{
          title: "Re:zero | Dashboard",
          user: req.session.user,
        });
      }
        catch (error) {
          res.redirect('/admin/user');
        }
    },

    viewCategory :async(req,res) => {
      try {
        const category = await Category.find();
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus };
        res.render('admin/category/viewCategory',{
          title: "Re:zero | Dashboard",
          category,
          alert,
          user: req.session.user,
        });
      }
        catch (error) {
          res.redirect('/admin/category');
        }
    },
    addCategory: async (req, res) => {
      try {
        const { categoryName,categoryDetail } = req.body;
        // console.log(name);
        await Category.create({ 
          categoryName,
          categoryDetail
         });
        req.flash('alertMessage', 'Success Add Category');
        req.flash('alertStatus', 'success');
        res.redirect('/admin/category');
      } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/admin/category');
      }
    },
    viewComment :(req,res) => {
      try {
        res.render('admin/comment/viewComment',{
          title: "Re:zero | Dashboard",
          user: req.session.user,
        });
      }
      catch (error) {
        res.redirect('/admin/comment');
      }
    },
    viewLike :(req,res) => {
      try {
        res.render('admin/like/viewLike',{
          title: "Re:zero | Dashboard",
          user: req.session.user,
        });
      }
      catch (error) {
        res.redirect('/admin/like');
      }
    },
    viewImage :(req,res) => {
      try {
        res.render('admin/image/viewImage',{
          title: "Re:zero | Dashboard",
          user: req.session.user,
        });
      }
      catch (error) {
        res.redirect('/admin/image');
      }
        
    }
    
    
}