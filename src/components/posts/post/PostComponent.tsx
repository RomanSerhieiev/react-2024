import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    const {
        postSlice: {setSelectedPost}
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title}</h3>
            <button onClick={() => navigateHelper(
                EKey.selectedPost,
                post.id,
                '/posts',
                setSelectedPost,
                navigate
            )}>
                INFO
            </button>
        </div>
    );
};

export default PostComponent;