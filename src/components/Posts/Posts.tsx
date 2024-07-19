import React, { Component } from 'react';
import { IPost } from '../../interfaces/post.interface';
import Post from '../Post/Post';
import { IUser } from '../../interfaces/user.interface';

interface IProps {
    posts: IPost[];
    user: Partial<IUser> | null;
}

class Posts extends Component<IProps> {
    render() {
        const {posts, user} = this.props;

        return (
            <div>
                {user && <h1>{user.id}. {user.firstName} {user.lastName}</h1>}
                {posts.map((post, i) => <Post key={i} post={post} />)}
            </div>
        );
    }
}

export default Posts;