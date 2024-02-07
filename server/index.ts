import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Imports config
import config from './config';

// Imports database
import databaseConnection from './database/database';

// Server routes
import authRoutes from './routes/authRoutes';
import friendRoutes from './routes/friendsRoutes';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', authRoutes);
app.use('/friends', friendRoutes);

app.listen(config.PORT, () => {
  console.log(`Server is running at port: ${config.PORT}`);
  databaseConnection();
});
