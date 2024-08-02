import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserComponent from '../user/UserComponent';

const UsersComponent: FC = () => {
    const {users, isLoaded} = useAppSelector(state => state.userSlice)

    return (
        <div>
            {isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>) : <h2>Loading...</h2>}
        </div>
    );
};

export default UsersComponent;