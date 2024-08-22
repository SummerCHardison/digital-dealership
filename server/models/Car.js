// /models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: String,
  model: String,
  year: Number,
  availability: Boolean,
  pricePerDay: Number,
});

module.exports = mongoose.model('Car', carSchema);
