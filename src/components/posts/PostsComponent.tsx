import React, { FC, ReactNode } from 'react';
import { IPost } from '../../model/IPost';
import { PostComponent } from '../post/PostComponent';

type IProps = { posts: IPost[] } & { children?: ReactNode }

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(({id, userId, body, title}, index) => <PostComponent key={index} id={id} userId={userId} title={title} body={body}/>)}
        </div>
    );
};

export {
    PostsComponent
};