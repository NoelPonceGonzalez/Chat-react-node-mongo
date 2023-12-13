const mongoose = require('mongoose')

const databaseConnection = () => {
    mongoose.connect('mongodb+srv://root:Noel1@chat-app.pc8xpry.mongodb.net/chat', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connection stablished')
    })
    .catch((error) => {
        console.log('Error connection database: ', error)
    })
}

module.exports = databaseConnection