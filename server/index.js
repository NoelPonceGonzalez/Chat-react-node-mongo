const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//imports config
const config = require('./config');

//imports database
const databaseConnection = require('./database/database')

//server routes
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors({
    origin: true
}))

app.use(bodyParser.json());
app.use('/', authRoutes);

app.listen(config.PORT, () => {
    console.log(`Server is running at port: ${config.PORT}`);
    databaseConnection();
});