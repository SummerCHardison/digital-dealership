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

  type Checkout {
    session: ID!
  }

  type Query {
    cars: [Car]
    car(id: ID!): Car
    categories: [Category]
    orders: [Order]
    order(id: ID!): Order
    user(id: ID!): User
    users: [User]
    checkout(cars: [ID]!): Checkout
  }

  type Mutation {
    addCar(model: String!, year: Int!, pricePerDay: Float!, category: ID!): Car
    addOrder(cars: [ID!], totalPrice: Float!, user: ID!): Order
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(id: ID!, name: String, email: String, password: String): User
    updateCar(id: ID!, quantity: Int!): Car
  }
`;

module.exports = typeDefs;