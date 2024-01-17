import { User } from '@user-app/shared';
import express from 'express';
import * as path from 'path';
import mongoose from 'mongoose';

const app = express();
let dbStatus = '';

const db = mongoose
  .connect('mongodb://localhost:27017/testroopesh', {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  })
  .then(
    (res) => {
      if (res) {
        dbStatus = 'Db conected';
        console.log(`Database connection succeffully`);
      }
    },
    (error) => {
      console.log('mongo erorr', error);
      dbStatus = 'Db error';
    }
  );

app.use('/assets', express.static(path.join(__dirname, 'assets')));
const user: User = {
  firstName: 'roopesh',
  lastName: 'kottala',
  email: 'roopesh.kottala@gmail.com',
};

app.get('/api', (req, res) => {
  res.send({ ...user, db_status: dbStatus });
});

db.then(() => {
  dbStatus = dbStatus + '>> got result';
  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(
      `Listening at http://localhost:${port}/api ${process.env.MONGO_SERVER_URL}`
    );
  });
  server.on('error', console.error);
});
