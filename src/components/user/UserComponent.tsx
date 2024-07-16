import React, { FC } from 'react';
import IUser from '../../model/IUser';

type PropsWithChildren<T> = T & { children?: React.ReactNode } & {clickHandler: (id: number) => void}

const UserComponent: FC<PropsWithChildren<IUser>> = ({
                                                         id,
                                                         name,
                                                         username,
                                                         email,
                                                         address: {
                                                             street,
                                                             suite,
                                                             zipcode,
                                                             city,
                                                             geo: {
                                                                 lng,
                                                                 lat
                                                             }
                                                         },
                                                         phone,
                                                         website,
                                                         company: {
                                                             name: companyName,
                                                             catchPhrase,
                                                             bs
                                                         },
                                                         clickHandler,
                                                     }) => {
    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Address:</p>
            <div>
                <p>Street: {street}</p>
                <p>Suite: {suite}</p>
                <p>City: {city}</p>
                <p>Zipcode: {zipcode}</p>
                <p>Geo:</p>
                <div>
                    <p>lat{lat}</p>
                    <p>lng{lng}</p>
                </div>
            </div>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company:</p>
            <div>
                <p>Name: {companyName}</p>
                <p>Catch phrase: {catchPhrase}</p>
                <p>BS: {bs}</p>
            </div>
            <p>Address:</p>
            <button onClick={() => clickHandler(id)}>Info</button>
        </div>
    );
};

export {
    UserComponent
};