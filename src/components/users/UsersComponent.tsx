import React, { FC } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import UserComponent from '../user/UserComponent';

const UsersComponent: FC = () => {
    const {userStore: {users}} = useAppContext()

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;