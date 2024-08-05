import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../views/auth/LoginPage.jsx';
import RegisterPage from '../views/auth/RegisterPage.jsx';
import NotFound from '../pages/NotFound.jsx';
import GuestLayout from '../components/GuestLayout.jsx';
import DefaultLayout from '../components/DefaultLayout.jsx'
import Dashboard from '../views/client/Dashboard.jsx';
import LandingPage from '../views/index.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [ 
            {
                path:'/',
                element: <LandingPage />
            },
            {
                path:'/login',
                element: <LoginPage />
            },
            {
                path:'/register',
                element: <RegisterPage />
            },
        ]
    }, 
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        ]
    },
   
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;