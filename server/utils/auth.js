// /utils/auth.js
const jwt = require('jsonwebtoken');

const authMiddleware = ({ req }) => {
  let token = req.headers.authorization || '';

  if (token) {
    try {
      const { data } = jwt.verify(token, process.env.SECRET, { maxAge: '2h' });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
  }

  return req;
};

module.exports = authMiddleware;
