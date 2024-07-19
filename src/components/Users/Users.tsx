import React, { Component } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { IPost } from '../../interfaces/post.interface';
import css from './Users.module.css';
import { userService } from '../../services/user.service';
import { postService } from '../../services/post.service';
import User from '../User/User';
import Posts from '../Posts/Posts';

interface IProps {
}

interface IState {
    users: IUser[];
    user: Partial<IUser> | null;
    posts: IPost[];
}

class Users extends Component<IProps, IState> {
    state: IState = {
        users: [],
        user: null,
        posts: []
    };

    componentDidMount() {
        userService.getAll().then(res => {
            this.setState({users: res.data.users});
        });
    }

    componentDidUpdate(prevProps: IProps, prevState: IState) {
        if (this.state.user && this.state.user.id !== undefined) {
            postService.getAllOfUser(this.state.user.id).then(res => {
                this.setState({posts: res.data.posts});
            });
        }
    }

    userIfo = (user: Partial<IUser>) => {
        this.setState({user});
    };

    render() {
        const {users, posts, user} = this.state;

        return (
            <div className={css.Container}>
                <div className={css.Users}>
                    {users.map((user, index) => (
                        <User
                            key={index}
                            user={user}
                            userIfo={this.userIfo}
                        />
                    ))}
                </div>
                <Posts posts={posts} user={user} />
            </div>
        );
    }
}

export default Users;
