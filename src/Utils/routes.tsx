import { Navigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ProductPage from '../Pages/ProductPage';
import ProductDetail from '../Pages/ProductDetail';
import NotFoundPage from '../Pages/NotFoundPage';


const routes = [
  {
    path: '/',
    element: <Navigate to="/app" replace />,
  },
  {
    path: 'app',
    element: <HomePage />,
  },
  {
    path: 'app/about',
    element: <AboutPage />,
  },
  {
    path: 'app/products',
    element: <ProductPage />,
  },
  {
    path: 'app/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
