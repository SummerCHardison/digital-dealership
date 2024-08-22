// /resolvers/carResolvers.js
const Car = require('../models/Car');

module.exports = {
  Query: {
    cars: async () => {
      return await Car.find();
    },
  },
  Mutation: {
    addCar: async (_, { name, model, year, availability, pricePerDay }) => {
      const car = new Car({ name, model, year, availability, pricePerDay });
      return await car.save();
    },
  },
};
