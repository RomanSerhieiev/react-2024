import React, { FC, useEffect, useState } from 'react';
import './App.css';
import IUser from './model/IUser';
import { UserComponent } from './components/user/UserComponent';

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('Users fetch done');
        };
    }, []);

    console.log(',');

    return (
        <div className="App">
            {users.map(({
                            id,
                            name,
                            username,
                            email,
                            street,
                            suite,
                            city,
                            zipcode,
                            lat,
                            lng,
                        }, index) =>
                <UserComponent key={index}
                               id={id}
                               name={name}
                               username={username}
                               email={email}
                               street={street}
                               suite={suite}
                               city={city}
                               zipcode={zipcode}
                               lat={lat}
                               lng={lng}
                />)}
        </div>
    );
};

export default App;
