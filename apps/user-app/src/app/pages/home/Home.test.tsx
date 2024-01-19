import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Home from './Home';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  let getByTestId: any;
  act(() => {
    const result = render(<Home />, container);
    getByTestId = result.getByTestId;
  });
  expect(getByTestId('home-cotent').textContent).toBe(
    'Hello, This is a test application,Created by Roopesh K.!'
  );
});
