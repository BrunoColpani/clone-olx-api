const mongoose = require('../database/conn');
const { Schema } = mongoose;

const Category = mongoose.model(
  'categories',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    }
  }, { timestamps: true }),
)

module.exports = Category;