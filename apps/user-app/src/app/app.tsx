import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
