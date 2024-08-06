import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsPage.module.css';
import CommentsComponent from '../../../components/comments/comments/CommentsComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { commentActions } from '../../../store/slices/comment.slice';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const CommentsPage: FC = () => {
    const comments = useAppSelector(state => state.commentSlice.comments);
    const {postId} = useParams();
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;
    const pages = comments.length % skip === 0 ? comments.length / skip : Math.floor(comments.length / skip) + 1;

    useEffect(() => {
        if (postId) {
            dispatch(commentActions.getByPost(postId));
        } else {
            dispatch(commentActions.getAll());
        }
    }, [postId]);

    return (
        <div className={css.Container}>
            <div>
                <h1>COMMENTS</h1>
                <FiltrationComponent items={comments.length} />
                <CommentsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default CommentsPage;