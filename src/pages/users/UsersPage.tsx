import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import UsersComponent from '../../components/users/UsersComponent';

const UsersPage: FC = () => {
    return (
        <UsersComponent />
    );
};

export default UsersPage;