const mongoose = require("mongoose");

const test = new mongoose.Schema({
  month: {
    type: String,
    require: true,
  },
  investment: {
    type: Number,
    require: true,
  },
  sell: {
    type: Number,
    require: true,
  },
  revenue: {
    type: Number,
    require: true,
  },
});

module.exports = test;
