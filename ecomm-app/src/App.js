
import './App.css';
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { ToastContainer} from 'react-toastify';

function App() {
  let routes = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/Home', element: <HomePage /> },
        { path: '/products', element: <Products /> },
        { path: '/product-details/:id', element: <ProductDetails /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login/>}
      ]
  }
  ])

  return (
    <>
      <ToastContainer theme='colored'/>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
