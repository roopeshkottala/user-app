import express from 'express';
import { mongoDb } from './Config/Db.config';
import { userRouter } from './Routes/users.routes';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);

mongoDb.then(() => {
  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(
      `Listening at http://localhost:${port}/api ${process.env.MONGO_SERVER_URL}`
    );
  });
  server.on('error', console.error);
});
