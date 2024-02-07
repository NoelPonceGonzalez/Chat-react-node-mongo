import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

import User from '../database/schema/userSchema';
import authenticateToken from '../middleware/authenticateToken';

import logger from '../logs/logger';
import config from '../config';

const router = express.Router();

router.use(cookieParser());

router.post('/register', async (req: Request, res: Response) => {
  const { name, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ name });
    const existingEmail = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingUser) {
      logger.error(`Invalid credentials for user: ${name}`);
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    if (existingEmail) {
      logger.error(`User register: ${name}`);
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const newUser = new User({
      name: name,
      password: hashedPassword,
      email: email,
      friend: [],
    });

    await newUser.save();

    logger.info(`Invalid credentials for user: ${email}`);
    res.json({ success: true, message: 'Registration successful', user: newUser });
  } catch (error: any) {
    console.log('Error saving user');
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });

    if (!user) {
      logger.error(`Error finding user: ${name}`);
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ user: user.name }, config.JWT_SECRET_KEY, { expiresIn: '1h' });

      res.cookie('tokenCookie', token, { maxAge: 1000 * 60 * 40, httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });

      logger.info(`User logged in: ${user.name}`);

      return res.json({ success: true, message: 'Login successful', user: user, token: token });
    } else {
      logger.error(`Invalid password for user: ${user.name}`);
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error: any) {
    logger.error('Error finding user:', error);
    console.log('Error finding user:', error);
    return res.status(500).json({ success: false, message: 'Error finding user' });
  }
});

router.get('/logout', async (req: Request, res: Response) => {
    try {
        console.log(req.cookies.tokenCookie);
        res.clearCookie('tokenCookie'); 
        res.status(200).json({ success: true, message: 'Session closed successfully' });
    }catch(error: any) {
        return res.status(500).json({ success: false, message: 'Error close session' });
    }
});

router.get('/verify-token', authenticateToken, async (req: Request & { decodedUser?: { user: string } }, res: Response) => {
  try {
    const decodedUser = req.decodedUser;
    console.log(decodedUser);
    res.status(200).json({ success: true, message: 'Token is valid', user: decodedUser });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Token does not exist' });
  }
});

export default router;
