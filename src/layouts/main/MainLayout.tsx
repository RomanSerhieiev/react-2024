import React, { FC, useEffect } from 'react';
import PaginationComponent from '../../components/pagination/PaginationComponent';
import { useSearchParams } from 'react-router-dom';

const MainLayout: FC = () => {
    const [query] = useSearchParams()

    useEffect(() => {

    }, [query]);
    return (
        <div>
            <PaginationComponent />
        </div>
    );
};

export default MainLayout;