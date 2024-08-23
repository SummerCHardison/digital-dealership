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
    required: true,
    trim: true
  },
  availabilityEnd: {
    type: Date,
    default: () => Date.now () + 3*24*60*60*1000
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
    ref: 'category'
  },
  image: String
});


const Car = mongoose.model('car', carSchema);
module.exports = Car;