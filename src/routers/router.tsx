import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';

const routs: RouteObject[] = [{
    path: '',
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
}]

export const router = createBrowserRouter(routs);