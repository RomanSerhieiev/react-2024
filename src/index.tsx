import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import AboutPage from './pages/about/AboutPage';
import ContactsPage from './pages/contacts/ContactsPage';
import ErrorLayout from './layouts/error/ErrorLayout';
import ContactPage from './pages/contact/ContactPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
              element: <AboutPage />,
                index: true
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contacts',
                element: <ContactsPage />
            },
            {
                path: 'contacts/:id',
                element: <ContactPage />
            }
        ]
    },
])

root.render(
    <RouterProvider router={router} />
);
