// /resolvers/bookingResolvers.js
const Booking = require("../models/Booking");
const Car = require("../models/Car");
const User = require("../models/User");

module.exports = {
  Query: {
    // Get all bookings
    bookings: async () => {
      return await Booking.find().populate("car").populate("user");
    },
    // Get a booking by ID
    booking: async (_, { id }) => {
      return await Booking.findById(id).populate("car").populate("user");
    },
  },
  Mutation: {
    // Add a new booking
    addBooking: async (_, { carId, userId, startDate, endDate }) => {
      // Fetch the car and user associated with the booking
      const car = await Car.findById(carId);
      const user = await User.findById(userId);

      if (!car) {
        throw new Error("Car not found");
      }
      if (!user) {
        throw new Error("User not found");
      }

      // Calculate total cost (example calculation)
      const days =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      const totalCost = car.pricePerDay * days;

      // Create the booking
      const booking = new Booking({
        car: carId,
        user: userId,
        startDate,
        endDate,
        totalCost,
      });

      // Save the booking to the database
      await booking.save();

      return booking.populate("car").populate("user");
    },
  },
};
