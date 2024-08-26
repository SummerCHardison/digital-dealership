// This is just starting code and is made to be changed
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import BookingPage from './pages/BookingPage/BookingPage';
import CarPage from './pages/CarPage/CarPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/booking',
        element: <BookingPage />,
      },
      {
        path: '/car',
        element: <CarPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);