const jwt = require('jsonwebtoken');
const User = require('../database/schemas/userSchema')

const config = require('../config')

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(400).json({ success: false, message: 'Unauthorization token' });
    }

    const tokenParts = authHeader.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(400).json({ success: false, message: 'Invalid authorization header format' });
    }

    const token = tokenParts[1];

    jwt.verify(token, config.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }

        req.decodedUser = decodedUser;
        next();
    });
};

const verifyTokenMiddleware = (req, res, next) => {
    try {
      const decodedUser = req.decodedUser;
  
      // Puedes almacenar la información del usuario decodificado en la solicitud si es necesario
      req.user = decodedUser;
  
      next(); // Pasa al siguiente middleware o ruta
    } catch (error) {
      res.status(401).json({ success: false, message: 'Token is invalid or expired' });
    }
  };

module.exports = authenticateToken, verifyTokenMiddleware;