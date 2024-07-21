import {createBrowserRouter, RouteObject} from 'react-router-dom'
import MainLayout from '../layouts/main/MainLayout';

const routs: RouteObject[] = [
    {
        path: '',
        element: <MainLayout />
    }
]

export const router = createBrowserRouter(routs)