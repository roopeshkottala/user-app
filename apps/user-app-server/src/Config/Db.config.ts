import mongoose from 'mongoose';
const mongoServer = process.env.MONGO_SERVER_URL
  ? process.env.MONGO_SERVER_URL
  : 'localhost';
export const mongoDb = mongoose
  .connect(`mongodb://${mongoServer}:27017/user_app`)
  .then(
    (res) => {
      if (res) {
        console.log(`Database connection succeffully`);
      }
    },
    (error) => {
      console.log('Database connection error', error);
    }
  );
