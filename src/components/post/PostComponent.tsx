import React, { FC } from 'react';
import { IPost } from '../../interfaces/IPost';

interface IProps {
    post: IPost;
}

type PropsWithChildren<T> = T & { children?: React.ReactNode }

const PostComponent: FC<PropsWithChildren<IProps>> = ({post}) => {
    const {
        id,
        title,
        body,
        tags,
        reactions: {
            likes,
            dislikes
        },
        views
    } = post;

    return (
        <div>
            <h2>{id}. {title}</h2>
            <p>{body}</p>
            <p>{tags.map((tag, index) => <a key={index} href={'#'}>
                <button>{tag}</button>
            </a>)}</p>
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
};

export default PostComponent;