import React, { FC } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { useAppNavigate } from '../../hooks/useAppNavigate';

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useAppNavigate();

    return (
        <div>
            {user.id}. {user.name}
            <button onClick={() => navigate(`${user.id}`, user)}>details</button>
        </div>
    );
};

export default UserComponent;