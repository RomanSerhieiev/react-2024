import React, { FC, useEffect, useState } from 'react';
import css from './UsersPage.module.css';
import UsersComponent from '../../../components/users/users/UsersComponent';
import { IUser } from '../../../interfaces/user.interface';
import { userService } from '../../../services/user.service';

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll()
                .then(value => {
                    setUsers(value.data)
                })
    }, []);

    return (
        <div className={css.Container}>
            <h2>USERS</h2>
            <UsersComponent users={users} />
        </div>
    );
};

export default UsersPage;