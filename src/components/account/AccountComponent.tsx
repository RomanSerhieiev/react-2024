import React, { FC } from 'react';
import css from './AccountComponent.module.css'
import { IUser } from '../../interfaces/user.interface';

interface IProps {
    user: IUser;
}

const AccountComponent: FC<IProps> = ({user}) => {
    return (
        <div className={css.Container}>
            <h3>{user.id}. {user.username}</h3>
            <p>Active:
                {user.is_active ?
                <span> yes</span> :
                <span> no</span>
            }
            </p>
            <p>Stuff:
                {user.is_staff ?
                    <span> yes</span> :
                    <span> no</span>
                }
            </p>
            <p>Superuser:
                {user.is_superuser ?
                    <span> yes</span> :
                    <span> no</span>
                }
            </p>
            <p>Last login: {user.last_login}</p>
            <p>Created: {user.created}</p>
            <p>Updated: {user.updated}</p>
        </div>
    );
};

export default AccountComponent;