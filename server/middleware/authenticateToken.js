const jwt = require('jsonwebtoken');
const User = require('../database/schemas/userSchema')

const config = require('../config')

function authenticateToken(req, res, next) {
    const authToken = req.cookie.authToken;

    if (!authToken) {
      return res.status(400).json({ success: false, message: 'Unauthorized: Missing authentication cookie' });
  }

  jwt.verify(authToken, config.JWT_SECRET_KEY, (err, decodedUser) => {
      if (err) {
          return res.status(401).json({ success: false, message: 'Invalid or expired token' });
      }

      req.decodedUser = decodedUser;
      next();
  });
};

module.exports = authenticateToken;