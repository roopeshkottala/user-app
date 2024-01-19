import { IUser } from '@user-app/shared';
import axios from './axios';

export const getUsers = async (): Promise<[IUser]> => {
  const response = await axios.get('api/users');
  return response.data;
};

export const saveUser = async (user: IUser) => {
  const response = await axios.post('/api/users', user);
  return response.data;
};
