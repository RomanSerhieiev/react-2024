import React, { FC, useEffect, useState } from 'react';
import css from './CommentInfoPage.module.css'
import { useParams } from 'react-router-dom';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IComment } from '../../../interfaces/comment.interface';
import { IPost } from '../../../interfaces/post.interface';
import { commentService } from '../../../services/comment.service';
import { postService } from '../../../services/post.service';
import CommentInfoComponent from '../../../components/comments/comment-info/CommentInfoComponent';

const CommentInfoPage: FC = () => {
    const [comment, setComment] = useState<IComment>();
    const [post, setPost] = useState<IPost>();
    const {commentId} = useParams();
    const {state} = useAppLocation<{ comment: IComment } | null>();

    useEffect(() => {
        if (state) {
            setComment(state.comment);
        } else if (commentId) {
            commentService.getById(commentId)
                .then(value => {
                    setComment(value.data);
                });
        } else {
            throw new Error(`Couldn't find comment with id ${commentId}`);
        }
    }, [commentId, state]);

    useEffect(() => {
        if (comment) {
            postService.getById(`${comment.postId}`)
                .then(value => {
                    setPost(value.data);
                });
        }
    }, [comment]);

    return (
        <div className={css.Container}>
            {comment && post && <CommentInfoComponent comment={comment} post={post} />}
        </div>
    );
};

export default CommentInfoPage;