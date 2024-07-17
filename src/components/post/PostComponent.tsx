import React, { FC } from 'react';
import { IPost } from '../../models/IPost';

const PostComponent: FC<IPost> = ({id, userId, title, body}) => {
    return (
        <div>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {
    PostComponent
};