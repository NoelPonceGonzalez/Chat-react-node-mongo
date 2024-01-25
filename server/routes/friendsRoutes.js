const express = require('express');
const User = require('../database/schemas/userSchema');

const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.post('/addNewFriend', authenticateToken, async (req ,res) => {
    const {newFriend} = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);

        const newFriendToAdd = await User.findOne({ name: newFriend });

        if(!newFriendToAdd) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        User.friends.push(newFriendToAdd)

        await User.save();

        res.status(200).json({ success: true, message: 'you have new friend' });
    }catch(error) {
        res.status(500).json({succes: false, message: 'Friend does not exist'})
    }
})

module.exports = router;