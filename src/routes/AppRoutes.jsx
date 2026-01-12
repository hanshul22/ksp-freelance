import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout.jsx';
import Home from '@/pages/Home/Home.jsx';
import About from '@/pages/About/About.jsx';
import Products from '@/pages/Products/Products.jsx';
import Services from '@/pages/Services/Services.jsx';
import Projects from '@/pages/Projects/Projects.jsx';
import Contact from '@/pages/Contact/Contact.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';

const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/products', element: <Products /> },
        { path: '/services', element: <Services /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ],
    },
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
