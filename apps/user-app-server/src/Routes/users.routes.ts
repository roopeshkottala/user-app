//importing modules
import express from 'express';
import { UserController } from '../Controllers/user.controller';

//initiating the router
export const userRouter = express.Router();

//add post route
userRouter.post('/', UserController.addUser);

//get posts
userRouter.get('/', UserController.getUsers);
