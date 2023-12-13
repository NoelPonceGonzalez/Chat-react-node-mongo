const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

//imports database
const databaseConnection = require('./database/database')
const User = require('./database/schemas/userSchema')

const app = express();
const PORT = 5502;

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
    databaseConnection();
});

app.use(cors({
    origin: true
}))

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
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

app.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            return res.json({ success: true, message: 'Login successful', user: user });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log('Error finding user:', error);
        return res.status(500).json({ success: false, message: 'Error finding user' });
    }
});