import React, { FC } from 'react';
import css from './UserComponent.module.css';
import { IUser } from '../../interfaces/user.interface';
import { useStore } from '../../store/store';

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userSlice: {selectUser}} = useStore()

    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={() => selectUser(user)}>select the user</button>
        </div>
    );
};

export default UserComponent;