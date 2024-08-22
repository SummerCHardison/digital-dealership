// /models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  startDate: Date,
  endDate: Date,
  totalCost: Number,
});

module.exports = mongoose.model('Booking', bookingSchema);
