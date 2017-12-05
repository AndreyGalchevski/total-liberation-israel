var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
      type: String, 
      required: true
    },
  password: {
    type: String, 
    required: true
  }
});

var UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;

module.exports.getUserById = function(userIdToGet, callback) {
  UserModel.findById(userIdToGet, callback);
}
module.exports.getUserByUsername = function(usernameToGet, callback) {
    const query = {username: usernameToGet};
    UserModel.findOne(query, callback);
}

