import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface IProps {
    prev: string | null,
    next: string | null,
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {
    const [query, setQuery] = useSearchParams({page: '1'})

    return (
        <div>
            <button
                disabled={!prev}
                onClick={() => {
                const page = query.get('page')
                if (page) {
                    const currentPage = +page
                    setQuery({page: `${currentPage - 1}`})
                }
            }}>PREV</button>
            <button
                disabled={!next}
                onClick={() => {
                const page = query.get("page")
                if (page) {
                    const currentPage = +page
                    setQuery({page: `${currentPage + 1}`})
                }
            }}>NEXT</button>
        </div>
    );
};

export default PaginationComponent;