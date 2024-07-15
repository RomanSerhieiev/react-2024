import React, { FC } from 'react';
import IUser from '../../model/IUser';

type PropsWithChildren<T> = T & { children?: React.ReactNode }

const UserComponent: FC<PropsWithChildren<IUser>> = ({id, name, username, email, street, suite, city, zipcode, lat, lng}) => {
    return (
        <div>
            {id} - {name}
            {username}
            {email}
            {street}
            {suite}
            {city}
            {zipcode}
            {lat}
            {lng}
        </div>
    );
};

export {
    UserComponent
};