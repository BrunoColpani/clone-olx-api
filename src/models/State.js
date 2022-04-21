const mongoose = require('../database/conn');
const { Schema } = mongoose;

const State = mongoose.model(
  'states',
  new Schema({
    name: {
      type: String,
      required: true,
    }
  }, {timestamps: true}),
)

module.exports = State;