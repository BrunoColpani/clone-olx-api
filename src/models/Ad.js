const mongoose = require('../database/conn');
const { Schema } = mongoose;

const Ad = mongoose.model(
  'ads',
  new Schema({
    idUser: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    dateCreated: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceNegotiable: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    }
  }, { timestamps: true }),
)

module.exports = Ad;