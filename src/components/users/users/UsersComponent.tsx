import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import UserComponent from '../user/UserComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const UsersComponent: FC = () => {
    const users = useAppSelector(state => state.userSlice.users);
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;

    return (
        <div className={css.Container}>
            {users.slice((page - 1) * skip, (page - 1) * skip + skip).map(user => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UsersComponent;