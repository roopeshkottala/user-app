import mongoose from 'mongoose';
export const mongoDb = mongoose
  .connect('mongodb://localhost:27017/user_app')
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
