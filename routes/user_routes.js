const jwt = require('jsonwebtoken')
const dbConfig = require('../config/db')
const UserModel = require('../models/user')

module.exports = function(app, db) {  
  //Authenticate user
  app.post('/api/authenticate', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    UserModel.getUserByUsername(username, (err,user) => {
      if (err) throw err
      if (!user) {
        return res.json({success: false, msg: 'User not found'})
      }
      UserModel.comparePassword(password, user.password, (err, isMatch) => {
        if (err) {
          errorMsg = 'Error while comparing passwords';
          res.json({ success: false, msg: errorMsg });
        } else {
            if (isMatch) {
              const token = jwt.sign(user, dbConfig.secret)
        
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
        }
      })
    })
  })
};