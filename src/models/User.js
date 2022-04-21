const mongoose = require('../database/conn');
const { Schema } = mongoose;

const User = mongoose.model(
  'users',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  }, { timestamps: true }),
)

module.exports = User;