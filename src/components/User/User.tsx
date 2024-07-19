import React, { Component } from 'react';
import { IUser } from '../../interfaces/user.interface';
import css from './User.module.css';

interface IProps {
    user: IUser;
    userIfo: (user: Partial<IUser>) => void;
}

class User extends Component<IProps> {
    render() {
        const {
            user: {
                id,
                firstName,
                lastName
            },
            userIfo
        } = this.props;

        return (
            <div className={css.User}>
                <h3>{id}. {firstName} {lastName}</h3>
                <button className={css.Btn} onClick={() => userIfo({ id, firstName, lastName })}>Show posts</button>
            </div>
        );
    }
}

export default User;
