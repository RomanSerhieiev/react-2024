import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsPage.module.css';
import UsersComponent from '../../../components/users/users/UsersComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { albumActions } from '../../../store/slices/album.slice';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import { userActions } from '../../../store/slices/user.slice';

const UsersPage: FC = () => {
    const users = useAppSelector(state => state.userSlice.users);
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;
    const pages = users.length % skip === 0 ? users.length / skip : Math.floor(users.length / skip) + 1;

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    return (
        <div className={css.Container}>
            <div>
                <h1>USERS</h1>
                <FiltrationComponent items={users.length} />
                <UsersComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default UsersPage;