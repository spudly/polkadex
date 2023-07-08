import {FC} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Navigate, createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router';
import PokeSearch from './PokeSearch';
import Pokemon from './Pokemon';

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/search" />,
  },
  {
    path: '/search/:token?',
    element: <PokeSearch />,
  },
  {
    path: '/pokemon/:name',
    element: <Pokemon />,
  },
]);

const Router: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default Router;
