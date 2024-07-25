import React, { FC, useEffect, useState } from 'react';
import css from './CommentsPage.module.css';
import CommentsComponent from '../../../components/comments/comments/CommentsComponent';
import { IComment } from '../../../interfaces/comment.interface';
import { commentService } from '../../../services/comment.service';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { useParams } from 'react-router-dom';

const CommentsPage: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const { state } = useAppLocation<IComment[] | null>()
    const { postId } = useParams()

    useEffect(() => {
        if (state) {
            setComments(state)
        } else if (postId) {
            commentService.getByPost(postId)
                .then(value => {
                    setComments(value.data)
                })
        } else {
            commentService.getAll()
                .then(value => {
                    setComments(value.data)
                })
        }
    }, [state, postId]);

    return (
        <div className={css.Container}>
            <h2>COMMENTS</h2>
            <CommentsComponent comments={comments} />
        </div>
    );
};

export default CommentsPage;