const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Car {
    id: ID!
    model: String!
    year: Int!
    pricePerDay: Float!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
  }

  type Order {
    id: ID!
    cars: [Car]
    totalPrice: Float!
    user: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    cars: [Car]
    car(id: ID!): Car
    categories: [Category]
    orders: [Order]
    order(id: ID!): Order
    user(id: ID!): User
    checkout(cars: [ID]!): Order
  }

  type Mutation {
    addCar(model: String!, year: Int!, pricePerDay: Float!, category: ID!): Car
    addOrder(cars: [ID!], totalPrice: Float!, user: ID!): Order
    register(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): User
    updateUser(name: String!, email: String!, password: String!): User
    updateCar(_id: ID!, quantity: Int!): Car
  }
`;

module.exports = typeDefs;