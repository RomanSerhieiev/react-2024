import React, { FC } from 'react';

interface IProps {
    changePage: (page: string) => void,
    next: {
        page: string
    } | null
    prev: {
        page: string
    } | null
}

const PaginationComponent: FC<IProps> = ({next, prev, changePage}) => {
    return (
        <div>
            <button disabled={!prev} onClick={() => changePage('prev')}>prev</button>
            <button disabled={!next} onClick={() => changePage('next')}>next</button>
        </div>
    );
};

export default PaginationComponent;