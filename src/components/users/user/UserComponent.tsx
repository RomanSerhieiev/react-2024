import React, { FC } from 'react';
import css from './UserComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';
import { localStorageSave } from '../../../helpers/local-storage-save.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from '../../../helpers/retrieve-local-storage-data.helper';
import { useStore } from '../../../store/store';

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userSlice: {setSelectedUser}} = useStore();

    const navigate = useNavigate();

    const handleClick = () => {
        localStorageSave<number>(EKey.selectedUser, user.id);
        setSelectedUser(retrieveLocalStorageData<number>(EKey.selectedUser));
        navigate(`${user.id}`);
    };

    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={handleClick}>INFO</button>
        </div>
    );
};

export default UserComponent;