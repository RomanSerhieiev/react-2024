import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';
import SignInPage from '../pages/sign-in/SignInPage';
import CarsPage from '../pages/cars/CarsPage';
import AccountPage from '../pages/account/AccountPage';
import SignUpPage from '../pages/sign-up/SignUpPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                path: 'sign-in',
                element: <SignInPage />
            },
            {
                path: 'sign-up',
                element: <SignUpPage />
            },
            {
                path: 'cars',
                element: <CarsPage />
            },
            {
                path: 'account',
                element: <AccountPage />
            }
        ]
    }
])