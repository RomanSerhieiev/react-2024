import React, { FC } from 'react';
import IUser from '../../model/IUser';

type PropsWithChildren<T> = T & { children?: React.ReactNode } & {clickHandler: (id: number) => void}

const UserComponent: FC<PropsWithChildren<IUser>> = ({
                                                         id,
                                                         name,
                                                         clickHandler,
                                                     }) => {
    return (
        <div>
            <h3>{id} - {name}</h3>
            <button onClick={() => clickHandler(id)}>Info</button>
        </div>
    );
};

export {
    UserComponent
};