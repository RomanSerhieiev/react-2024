import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import UserComponent from '../user/UserComponent';
import { useStore } from '../../../store/store';

const UsersComponent: FC = () => {
    const {
        userSlice: {users, usersPage}
    } = useStore();

    return (
        <div className={css.Container}>
            {users.length && users[usersPage - 1].map(user => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;