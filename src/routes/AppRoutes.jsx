import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/Home.jsx';
import Contact from '@/pages/Contact/Contact.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
