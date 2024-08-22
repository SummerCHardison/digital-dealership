const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  startRental: {
    type: Date,
    default: Date.now
  },
  endRental: {
    type: Date,
    default: () => Date.now () + 3*24*60*60*1000
  },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'car'
    }
  ],
  totalPrice: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
