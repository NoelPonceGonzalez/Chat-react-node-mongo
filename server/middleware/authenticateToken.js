import jwt from 'jsonwebtoken';
import User from '../database/schemas/userSchema';

const config = require('../config')

export function authenticateToken(req, res, next) {
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

        req.user = User;
        next();
    });
}
