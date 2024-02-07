import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import config from '../config';

interface CustomRequest extends Request {
  decodedUser?: { user: string };
}

const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.tokenCookie;

  console.log(token);
  if (!token) {
    return res.status(401).json({ success: false, message: 'Token not provided' });
  }

  try {
    const decodedUser = jwt.verify(token, config.JWT_SECRET_KEY) as { user: string };
    req.decodedUser = decodedUser;
    console.log('si');
    next();
  } catch (error: any) {
    console.log('no');
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
};

export default authenticateToken;
