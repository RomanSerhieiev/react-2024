import React, { FC } from 'react';
import css from './UsersComponent.module.css';
import UserComponent from '../user/UserComponent';
import { IUser } from '../../../interfaces/user.interface';

interface IProps {
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {
    return (
        <div className={css.Container}>
            {users.map(user => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;