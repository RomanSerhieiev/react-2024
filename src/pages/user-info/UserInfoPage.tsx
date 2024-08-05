import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { userActions } from '../../store/slices/user.slice';
import { useAppSelector } from '../../hooks/useAppSelector';

const UserInfoPage: FC = () => {
    const user = useAppSelector(state => state.userSlice.user)
    const {userId} = useParams()
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(userActions.getUserById(userId))
        }
    }, [userId]);

    return (
        <div>
            {user && user.email}
        </div>
    );
};

export default UserInfoPage;