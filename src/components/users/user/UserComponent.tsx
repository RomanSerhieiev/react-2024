import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={() => navigate(`${user.id}`)}>INFO</button>
        </div>
    );
};

export default UserComponent;