import React, { FC } from 'react';
import css from '../../styles/ItemsPage.module.css';
import UsersComponent from '../../../components/users/users/UsersComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

const UsersPage: FC = () => {
    const {
        userSlice: {
            usersPageSize,
            setUsersPageSize,
            users,
            usersPage,
            setUsersPage
        }
    } = useAppContext()

    return (
        <div className={css.Container}>
            <div>
                <h1>USERS</h1>
                <FiltrationComponent pageSize={usersPageSize} enumKey={EKey.usersPageSize} setPageSize={setUsersPageSize} />
                <UsersComponent />
            </div>
            <PaginationComponent enumKey={EKey.usersPage} page={usersPage} pages={users.length} setPage={setUsersPage} />
        </div>
    );
};

export default UsersPage;