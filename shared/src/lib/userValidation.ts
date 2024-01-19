import { IUser } from '../interfaces/user.interface';
import { IUserValidation } from '../interfaces/userValidation.interface';

export function userValidation(user: IUser): IUserValidation {
  const error: IUser = { firstName: '', lastName: '', email: '' };
  let isError = false;
  if (!user.firstName) {
    error['firstName'] = 'First Name may not be empty';
    isError = true;
  } else if (user.firstName.length > 100) {
    error['firstName'] = 'Max allowed length is 100 characters';
    isError = true;
  } else if (!/^[a-zA-Z]+$/.test(user.firstName)) {
    error['firstName'] = 'Only alphabetical characters allowed';
    isError = true;
  }
  if (!user.lastName) {
    error['lastName'] = 'Last Name may not be empty';
    isError = true;
  } else if (user.lastName.length > 100) {
    error['lastName'] = 'Max allowed length is 100 characters';
    isError = true;
  } else if (!/^[a-zA-Z]+$/.test(user.lastName)) {
    error['lastName'] = 'Only alphabetical characters allowed';
    isError = true;
  }
  if (!user.email) {
    error['email'] = 'Email may not be empty';
    isError = true;
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(user.email)) {
    error['email'] = 'Email is not valid';
    isError = true;
  }
  return [isError, error];
}
