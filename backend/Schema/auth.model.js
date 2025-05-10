// userauth.js (User Authentication Schema)
const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserAuth = mongoose.model('UserAuth', signupSchema);
module.exports = UserAuth;