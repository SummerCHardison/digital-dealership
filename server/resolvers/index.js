// /resolvers/index.js
const carResolvers = require('./carResolvers');
const bookingResolvers = require('./bookingResolvers');
const userResolvers = require('./userResolvers');

module.exports = {
  Query: {
    ...carResolvers.Query,
    ...bookingResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...carResolvers.Mutation,
    ...bookingResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
