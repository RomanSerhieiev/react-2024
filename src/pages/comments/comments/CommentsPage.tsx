import React, { FC, useEffect, useState } from 'react';
import css from './CommentsPage.module.css';
import CommentsComponent from '../../../components/comments/comments/CommentsComponent';
import { IComment } from '../../../interfaces/comment.interface';
import { commentService } from '../../../services/comment.service';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { useParams, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const CommentsPage: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [filteredComments, setFilteredComments] = useState<IComment[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [params] = useSearchParams({page: '1'});
    const {state} = useAppLocation<IComment[] | null>();
    const {postId} = useParams();

    useEffect(() => {
        if (state) {
            setComments(state);
        } else if (postId) {
            commentService.getByPost(postId)
                .then(({data}) => {
                    setComments(data);
                });
        } else {
            commentService.getAll()
                .then(({data}) => {
                    setComments(data);
                });
        }
    }, [state, postId]);

    useEffect(() => {
        const pageParam = params.get('page');
        const page = pageParam ? +pageParam : 1;
        const skipParam = params.get('skip');
        const skip = skipParam ? +skipParam : 25;

        setFilteredComments(comments.slice((page - 1) * skip, (page - 1) * skip + skip));

        if (comments.length % skip === 0) {
            setPages(comments.length / skip)
        } else {
            setPages(Math.floor(comments.length / skip) + 1)
        }
    }, [params, comments]);

    return (
        <div className={css.Container}>
            <div>
                <h2>COMMENTS</h2>
                <FiltrationComponent items={comments.length} />
                <CommentsComponent comments={filteredComments} />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default CommentsPage;