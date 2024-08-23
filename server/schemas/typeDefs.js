// /schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type car {
    id: ID!
    model: String!
    year: Int!
    pricePerDay: Float!
    category: category
  }

  type category {
  id: ID!  
  name: String!
  }

  type order {
    id: ID!
    cars: [car]
    totalPrice: Float!
    user: user
  }

  type user {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    cars: [Car]
    orders: [order]
    order(id: ID!): order
    user(id: ID!): User
  }

  type Mutation {
    addCar(model: String!, year: Int!, pricePerDay: Float!, category: category): car
    addOrder(cars: [car], totalPrice: Float!, user: user): order
    register(username: String!, email: String!, password: String!): auth
    login(email: String!, password: String!): auth
}
`;

module.exports = typeDefs;