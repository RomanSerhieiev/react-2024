import React, { FC } from 'react';
import css from './UserComponent.module.css'
import { IUser } from '../../interfaces/user.interface';

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name}</h3>
        </div>
    );
};

export default UserComponent;