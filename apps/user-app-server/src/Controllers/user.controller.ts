//import modules
import { userServices } from '../Services/users.service';
import { Request, Response } from 'express';
import { UserSchemaValidate } from '../Schema/user';
import { userValidation } from '@user-app/shared';

class userController {
  //add user controller
  addUser = async (req: Request, res: Response) => {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };
    //validating the request
    const [isError, error] = userValidation(data);
    const { value } = UserSchemaValidate.validate(data);

    console.log('roopesh', data, isError, error);
    if (isError) {
      res.status(400).send(error);
    } else {
      //call the create user function in the service and pass the data from the request
      const post = await userServices.createUser(value);
      res.status(201).send(post);
    }
  };

  //get all users
  getUsers = async (req: Request, res: Response) => {
    const posts = await userServices.getUsers();
    res.send(posts);
  };
}

export const UserController = new userController();
