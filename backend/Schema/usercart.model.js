// usercart.js (User Cart Schema)
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAuth', // Must match model name exactly
    required: true
  }
}, { timestamps: true });

const UserCart = mongoose.model('UserCart', cartSchema);
module.exports = UserCart;