
module.exports= {

 isLogin : (req, res, next) => {
    if (req.session.user == null || req.session.user == undefined) {
      req.flash('alertMessage', 'Session telah habis silahkan signin kembali!!');
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/signin');
    } else {
      next();
    }
  },

  protect : async (req, res, next) => {
    let token
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1]
  
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
  
        req.user = await User.findById(decoded.id).select('-password')
  
        next()
      } catch (error) {
        console.error(error)
        res.status(401)
        throw new Error('Not authorized, token failed')
      }
    }
  
    if (!token) {
      res.status(401)
      throw new Error('Not authorized, no token')
    }
  }
}
  
