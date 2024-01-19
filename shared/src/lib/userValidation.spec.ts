import { userValidation } from './userValidation';

describe('UserValidation', () => {
  it('should return no error when we pass proper user input', () => {
    const [isError] = userValidation({
      firstName: 'roopesh',
      lastName: 'kottala',
      email: 'roopesh.kottala@gmail.com',
    });
    expect(isError).toBeFalsy();
  });
  it('should return  error when we pass not proper user input', () => {
    const [isError] = userValidation({
      firstName: 'roopesh',
      lastName: 'kottala',
      email: 'roopesh.kottal',
    });
    expect(isError).toBeTruthy();
  });
});
