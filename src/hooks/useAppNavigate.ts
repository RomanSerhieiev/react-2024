import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
    const navigate = useNavigate();
    return <T>(endpoint: string, album: T) => {
        navigate(endpoint, {state: album});
    };
};