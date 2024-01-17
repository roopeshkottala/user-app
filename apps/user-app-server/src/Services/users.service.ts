//import module
import { IUser } from '@user-app/shared';
import { User } from '../Schema/user';
export class userService {
  //Add new user
  async createUser(data: IUser) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  //get all users
  async getUsers() {
    try {
      const users = await User.find({});
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}

//export the class
export const userServices = new userService();
