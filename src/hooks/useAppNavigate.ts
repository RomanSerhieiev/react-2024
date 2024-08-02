import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
    const navigate = useNavigate();

    return <T>(endpoint: string, item: T) => {
        navigate(endpoint, {state: item});
    };
};