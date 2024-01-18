import { LoaderFunctionArgs, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/default-layout/DefaultLayout';
import Home from './pages/home/Home';
import UsersList from './pages/users-list/UsersList';
import UserAdd from './pages/users-add/UserAdd';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/users',
        Component: UsersList,
        loader: protectedLoader,
      },
      {
        path: '/user',
        Component: UserAdd,
        loader: protectedLoader,
      },
    ],
  },
]);

function protectedLoader({ request }: LoaderFunctionArgs) {
  //authentification code comes here
  return null;
}
