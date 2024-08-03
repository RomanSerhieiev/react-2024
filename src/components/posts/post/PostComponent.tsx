import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    const {
        postSlice: {setSelectedPost}
    } = useStore();

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