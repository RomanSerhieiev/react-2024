import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import UserInfoComponent from '../../../components/users/user-info/UserInfoComponent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { userActions } from '../../../store/slices/user.slice';

const UserInfoPage: FC = () => {
    const dispatch = useAppDispatch();
    const {userId = '1'} = useParams();

    useEffect(() => {
        dispatch(userActions.getById(userId));
    }, [userId]);

    return (
        <div className={css.Container}>
            <UserInfoComponent />
        </div>
    );
};

export default UserInfoPage;