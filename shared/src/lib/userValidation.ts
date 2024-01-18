import { IUser } from '../interfaces/user.interface';
import { IUserValidation } from '../interfaces/userValidation.interface';

export function userValidation(user: IUser): IUserValidation {
  const error: IUser = { firstName: '', lastName: '', email: '' };
  let isError = false;
  if (!user.firstName) {
    error['firstName'] = 'First Name may not be empty';
    isError = true;
  }
  if (!user.lastName) {
    error['lastName'] = 'Last Name may not be empty';
    isError = true;
  }
  if (!user.email) {
    error['email'] = 'Email may not be empty';
    isError = true;
  }
  return [isError, error];
}
