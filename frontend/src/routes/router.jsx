import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home/Home';
import ShopPage from '../pages/shop/ShopPage';
import CategoryPage from '../pages/category/CategoryPage';
import ErrorPage from '../components/ErrorPage';
import Login from '../components/Login';
import Register from '../components/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shop',
          element: <ShopPage/>
        },
        {
          path: '/categories/:categoryName',
          element: <CategoryPage/>
        },
       
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ]);

  export default router