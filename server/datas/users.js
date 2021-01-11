const bcrypt = require ('bcrypt')


const users = [

    {
        name: 'Admin User',
        email: 'admin@rezero.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
      },
      {
        name: 'rian yunandar',
        email: 'rian@example.com',
        password: bcrypt.hashSync('123456', 10),
      },
      {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('123456', 10),
      },
    ]
    
    module.exports= users