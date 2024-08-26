const jwt = require('jsonwebtoken');

const authMiddleware = ({ req }) => {
  // Extract token from the authorization header
  let token = req.headers.authorization || '';

  // Remove 'Bearer ' prefix if it exists
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
  }

  if (token) {
    try {
      const { data } = jwt.verify(token, process.env.SECRET, { maxAge: '2h' });
      req.user = data;
    } catch (error) {
      console.log('Invalid token:', error.message);
    }
  }

  return req;
};

module.exports = authMiddleware;