const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//imports config
const config = require('./config');

//imports database
const databaseConnection = require('./database/database')

//server routes
const authRoutes = require('./routes/authRoutes');
const friendRoutes = require('./routes/friendsRoutes')

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(cookieParser());

app.use(bodyParser.json());

app.use('/', authRoutes);
app.use('/friends', friendRoutes);

app.listen(config.PORT, () => {
    console.log(`Server is running at port: ${config.PORT}`);
    databaseConnection();
});
