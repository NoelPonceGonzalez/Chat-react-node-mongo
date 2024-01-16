const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/schemas/userSchema');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const config = require('../config')
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken')

router.post('/register', async (req, res) => {
    const {name, password, email} = req.body;

    try {
        const existingUser = await User.findOne({ name });
        const existingEmial = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash( password, 10);

        if(existingUser) {
            res.status(400).json({ succes: false, message: 'User alredy exist' });
        }
        if(existingEmial) {
            res.status(400).json({ succes: false, message: 'Email alredy exist'});
        }

        const newUser = new User({
            name: name,
            password: hashedPassword,
            email: email,
        });

        await newUser.save();

        res.json({ succes: true, message: 'Registration succesful', user: newUser});
    }catch(error) {
        console.log('Error saving user');
        res.status(500).json({ succes: false, message: 'Server error', error: error.message })
    }
});

router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({ user: user.name }, config.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.cookie('authToken', token, 'nombreDeTuCookie', 'valorDeLaCookie', { maxAge: 1000000, httpOnly: true });
            
            return res.json({ success: true, message: 'Login successful', user: user, token: token });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log('Error finding user:', error);
        return res.status(500).json({ success: false, message: 'Error finding user' });
    }
});

router.get('/verify-token', async (req, res) => {
    try {
        const decodedUser = req.decodedUser;

        res.status(200).json({ success: true, message: 'Token is valid', user: decodedUser });
    }catch(error) {
        res.status(500).json({succes: false, message: 'Token does not exist'})
    }
});

router.post('/logout', (req ,res) => {
    res.clearCookie('authToken');
    
    res.status(200).json({ success: true, message: 'Session closed successfully' });
})

module.exports = router;