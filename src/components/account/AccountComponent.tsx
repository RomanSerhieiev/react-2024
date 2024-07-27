import React, { FC } from 'react';
import css from './AccountComponent.module.css';
import { IUserResponse } from '../../interfaces/user-response.interface';

interface IProps {
    user: IUserResponse;
}

const AccountComponent: FC<IProps> = ({
                                          user: {
                                              username,
                                              id,
                                              created,
                                              updated,
                                              last_login,
                                              is_staff,
                                              is_superuser,
                                              is_active
                                          }
                                      }) => {
    return (
        <div className={css.Container}>
            <h3>{id}. {username}</h3>
            <p>Active:
                {is_active ?
                    <span> yes</span> :
                    <span> no</span>
                }
            </p>
            <p>Stuff:
                {is_staff ?
                    <span> yes</span> :
                    <span> no</span>
                }
            </p>
            <p>Superuser:
                {is_superuser ?
                    <span> yes</span> :
                    <span> no</span>
                }
            </p>
            <p>Last login: {last_login}</p>
            <p>Created: {created}</p>
            <p>Updated: {updated}</p>
        </div>
    );
};

export default AccountComponent;