import React, { FC, useEffect, useState } from 'react';
import css from './UsersPage.module.css';
import UsersComponent from '../../../components/users/users/UsersComponent';
import { IUser } from '../../../interfaces/user.interface';
import { userService } from '../../../services/user.service';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [params] = useSearchParams({page: '1'});

    useEffect(() => {
        userService.getAll()
                .then(({data}) => {
                    setUsers(data)
                })
    }, []);

    useEffect(() => {
        const pageParam = params.get('page');
        const page = pageParam ? +pageParam : 1;
        const skipParam = params.get('skip');
        const skip = skipParam ? +skipParam : 25;

        setFilteredUsers(users.slice((page - 1) * skip, (page - 1) * skip + skip));

        if (users.length % skip === 0) {
            setPages(users.length / skip)
        } else {
            setPages(Math.floor(users.length / skip) + 1)
        }
    }, [params, users]);

    return (
        <div className={css.Container}>
            <div>
                <h2>USERS</h2>
                <FiltrationComponent />
                <UsersComponent users={filteredUsers} />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default UsersPage;