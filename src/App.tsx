import React, { FC, useEffect, useState } from 'react';
import './App.css';
import IUser from './model/IUser';
import { UserComponent } from './components/user/UserComponent';
import { getUsers } from './services/user.service';

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data)
            })

        return () => {
            console.log('Users fetch done');
        };
    }, []);

    const [userId, setUserId] = useState<number>(0);

    const clickHandler = (id: number) => {
        setUserId(id)
    }

    return (
        <div className="App">
            {users.map(({
                            id,
                            name,
                            username,
                            email,
                            address,
                            phone,
                            website,
                            company
                        }, index) =>
                <UserComponent key={index}
                               id={id}
                               name={name}
                               username={username}
                               email={email}
                               address={address}
                               phone={phone}
                               website={website}
                               company={company}
                               clickHandler={clickHandler}
                />)}
            <h2>{userId}</h2>
        </div>
    );
};

export default App;
