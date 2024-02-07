import express, { Request, Response } from 'express';
import User from '../database/schema/userSchema';
import logger from '../logs/logger';
import authenticateToken from '../middleware/authenticateToken';

const router = express.Router();

router.post('/addNewFriend', authenticateToken, async (req: Request & { decodedUser?: { user: string } }, res: Response) => {
    const { newFriend } = req.body;
    const userId = req.decodedUser?.user;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        logger.info(`User not found ${user}`);
        return res.status(400).json({ success: false, message: 'Authenticated user not found' });
      }
  
      if (user.friends) {
        const newFriendToAdd = await User.findOne({ name: newFriend });
  
        if (!newFriendToAdd) {
          logger.info(`Friend not found ${newFriendToAdd}`);
          return res.status(400).json({ success: false, message: 'Friend not found' });
        }
        
        user.friends.push(newFriendToAdd.name);

      } else {
        return res.status(400).json({ success: false, message: 'User friends list is undefined' });
      }
    } catch (error: any) {
      logger.error(`Error finding user: ${error}`);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  

export default router;