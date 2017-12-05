const jwt = require('jsonwebtoken')
const dbConfig = require('../config/db')
const UserModel = require('../models/user')

module.exports = function(app, db) {

  // Fetch single user by Id 
  app.get('/api/user/:id', (req, res) => {
    var db = req.db;
    UserModel.getUserById(req.params.id, function (error, user) {
      if (error) { 
        console.error(error); 
      }
      res.send(user)
    })
  })
  
  //Authenticate user
  app.post('/api/authenticate', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    UserModel.getUserByUsername(username, (err,user) => {
      if (err) throw err
      if(!user) {
        return res.json({success: false, msg: 'User not found'})
      }
      if (password === user.password) {
        const token = jwt.sign(user, dbConfig.secret, {
          expiresIn: 604800
        })

        res.json({
          success: true,
          token: 'Bearer ' + token,
          user: {
            id: user._id,
            username: user.username
          }
        })
      } 
      else {
        return res.json({
          succes: false,
          msg: 'Wrong password'
        })
      }
    })
  })
};