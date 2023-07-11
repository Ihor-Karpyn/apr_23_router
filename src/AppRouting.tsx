import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { FC } from 'react';
import { App } from './App';
import { Posts } from './Components/Posts/Posts';
import { Contacts } from './Components/Contacts/Contacts';
import { About } from './Components/About/About';
import { SinglePost } from './Components/SinglePost/SinglePost';
import { NotFound } from './Components/NotFound/NotFound';
import { NotFoundRedirect } from './Components/NotFound/NotFoundRedirect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:postId',
        element: <SinglePost />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'not-found',
        element: <NotFound />,
      },
    ],
  },
]);

export const AppRouting: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
