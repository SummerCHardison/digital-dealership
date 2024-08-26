const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  startRental: {
    type: Date,
    default: Date.now
  },
  endRental: {
    type: Date,
    default: () => Date.now() + 3 * 24 * 60 * 60 * 1000 // 3 days from now
  },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car' // Ensure this matches the name of the referenced model
    }
  ],
  totalPrice: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Ensure this matches the name of the referenced model
  }
});

const Order = mongoose.model('Order', orderSchema); // Capitalized model name

module.exports = Order;