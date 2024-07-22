import React, { FC } from 'react';
import css from './UserComponent.module.css'
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`${user.id}`, {state: {user}})
    }

    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name.slice(0, 8)}</h3>
            <button onClick={navigateHandler}>INFO</button>
        </div>
    );
};

export default UserComponent;