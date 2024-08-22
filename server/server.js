// /server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const connectDB = require('./config/db');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./resolvers');
const authMiddleware = require('./utils/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the Apollo Server
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Connect to the database
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();