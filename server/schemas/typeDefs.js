// /schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Car {
    id: ID!
    name: String!
    model: String!
    year: Int!
    availability: Boolean!
    pricePerDay: Float!
  }

  type Booking {
    id: ID!
    car: Car!
    user: User!
    startDate: String!
    endDate: String!
    totalCost: Float!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    token: String
  }

  type Query {
    cars: [Car]
    bookings: [Booking]
    booking(id: ID!): Booking
    user(id: ID!): User
  }

  type Mutation {
    addCar(name: String!, model: String!, year: Int!, availability: Boolean!, pricePerDay: Float!): Car
    addBooking(carId: ID!, userId: ID!, startDate: String!, endDate: String!): Booking
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User