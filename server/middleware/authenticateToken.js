const jwt = require('jsonwebtoken');
const User = require('../database/schemas/userSchema')

const config = require('../config')

const authenticateToken = (req, res, next) => {
  const token = req.cookies.tokenCookie;

  console.log(token)
  if (!token) {
    return res.status(401).json({ success: false, message: 'Token not provided' });
  }

  try {
    const decodedUser = jwt.verify(token, config.JWT_SECRET_KEY);
    req.decodedUser = decodedUser;
    next(); 
  } catch (error) {
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = authenticateToken;