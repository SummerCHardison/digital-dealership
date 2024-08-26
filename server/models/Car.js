const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
  model: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  availabilityEnd: {
    type: Date,
    default: () => Date.now() + 3 * 24 * 60 * 60 * 1000 // 3 days from now
  },
  availabilityStart: {
    type: Date,
    default: Date.now
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category' // Ensure this matches the name of the referenced model
  },
  image: {
    type: String,
    trim: true
  }
});

const Car = mongoose.model('Car', carSchema); // Ensure the model name is capitalized
module.exports = Car;