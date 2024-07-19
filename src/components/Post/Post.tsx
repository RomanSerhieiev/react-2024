import React, { Component } from 'react';
import { IPost } from '../../interfaces/post.interface';

interface IProps {
    post: IPost;
}

class Post extends Component<IProps> {
    render() {
        const {
            post: {
                id,
                title,
                body,
                tags,
                reactions: {
                    likes,
                    dislikes
                },
                views
            }
        } = this.props;

        return (
            <div>
                <h2>{id}. {title}</h2>
                <p>{body}</p>
                <p>{tags.map((tag, index) => (
                    <a key={index} href={'#'}>
                        <button>{tag}</button>
                    </a>
                ))}</p>
                <p>
                    <a href={'#'}>
                        <button>&#128077; {likes}</button>
                    </a>
                    <a href={'#'}>
                        <button>&#128078; {dislikes}</button>
                    </a>
                </p>
                <p>Views: {views}</p>
            </div>
        );
    }
}

export default Post;