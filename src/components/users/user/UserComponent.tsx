import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    const {
        userSlice: {setSelectedUser}
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={() => navigateHelper(
                EKey.selectedUser,
                user.id,
                '/users',
                setSelectedUser,
                navigate
            )}>
                INFO
            </button>
        </div>
    );
};

export default UserComponent;