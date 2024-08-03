import React, { FC } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import CommentInfoComponent from '../../../components/comments/comment-info/CommentInfoComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const CommentInfoPage: FC = () => {
    const {
        commentSlice: {comments},
        postSlice: {posts},
    } = useAppContext();

    const {commentId = '1'} = useParams();

    const comment = comments.flat().find(comment => comment.id === +commentId);
    const post = posts.flat().find(post => comment?.postId === post.id);

    return (
        <div className={css.Container}>
            {comment && post && <CommentInfoComponent comment={comment} post={post} />}
        </div>
    );
};

export default CommentInfoPage;