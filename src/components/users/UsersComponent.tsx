import React, { FC } from 'react';
import UserComponent from '../user/UserComponent';
import { useStore } from '../../store/store';

const UsersComponent: FC = () => {
    const {userSlice: {users}} = useStore()

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;