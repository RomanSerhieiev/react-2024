import {createBrowserRouter, RouteObject} from 'react-router-dom'
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';
import CharactersPage from '../pages/characters/CharactersPage';
import LocationsPage from '../pages/locations/LocationsPage';
import EpisodesPage from '../pages/episodes/EpisodesPage';
import CharacterPage from '../pages/character/CharacterPage';
import LocationPage from '../pages/location/LocationPage';

const routs: RouteObject[] = [
    {
        path: '',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                element: <CharactersPage />,
                index: true
            },
            {
                path: 'characters',
                element: <CharactersPage />
            },
            {
                path: 'characters/:id',
                element: <CharacterPage />
            },
            {
                path: 'locations',
                element: <LocationsPage />
            },
            {
                path: 'locations/:id',
                element: <LocationPage />
            },
            {
                path: 'episodes',
                element: <EpisodesPage />
            },
            {
                path: 'episodes/:id',
                element: <LocationPage />
            },
        ]
    }
]

export const router = createBrowserRouter(routs)