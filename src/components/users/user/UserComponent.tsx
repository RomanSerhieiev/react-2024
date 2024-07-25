import React, { FC } from 'react';
import css from './UserComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name.slice(0, 8)}</h3>
            <button onClick={() => navigateHandler<IUser>(`${user.id}`, user)}>INFO</button>
        </div>
    );
};

export default UserComponent;