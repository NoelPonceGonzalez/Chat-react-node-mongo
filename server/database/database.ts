import mongoose from 'mongoose';
import config from '../config';

const databaseConnection = (): void => {
  mongoose.connect(config.MONGODB_URL)
    .then(() => {
      console.log('Database connection established');
    })
    .catch((error: any) => {
      console.log('Error connecting to the database: ', error);
    });
};

export default databaseConnection;
