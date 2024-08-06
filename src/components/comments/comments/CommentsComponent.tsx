import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import CommentComponent from '../comment/CommentComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const CommentsComponent: FC = () => {
    const comments = useAppSelector(state => state.commentSlice.comments);
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;

    return (
        <div className={css.Container}>
            {comments.slice((page - 1) * skip, (page - 1) * skip + skip).map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;