const Users = require('../models/modelUser');
const generateToken = require('../utils/generateToken.js')
const auth = require('../middlewares/auth');

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
              });
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
    
}