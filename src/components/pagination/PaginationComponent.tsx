import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaginationComponent: FC = () => {
    const [query, setQuery] = useSearchParams()

    return (
        <div>
            <button onClick={() => {
                const page = query.get("page")
                if (page) {
                    const currentPage = +page
                    setQuery({page: `${currentPage - 1}`})
                }
            }}>prev</button>
            <button onClick={() => {
                const page = query.get("page")
                if (page) {
                    const currentPage = +page
                    setQuery({page: `${currentPage + 1}`})
                }
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;