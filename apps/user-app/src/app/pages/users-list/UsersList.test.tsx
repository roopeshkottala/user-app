import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UsersList from './UsersList';
import * as ReactQuery from 'react-query';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Should call the api when initialized the componennnt', async () => {
  const fakeUser = [
    {
      _id: 1,
      firstName: 'Roopesh',
      lastName: 'k',
      email: 'roopesh.kottala@gmail.com',
    },
  ];

  jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
    jest.fn().mockReturnValue({
      data: fakeUser,
      status: 'success',
      error: false,
      isLoading: false,
      isSuccess: true,
    })
  );

  await act(async () => {
    render(<UsersList />, container);
  });

  expect(ReactQuery.useQuery).toHaveBeenCalled();
});
