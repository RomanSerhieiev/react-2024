import React, { FC } from 'react';
import css from '../../styles/ItemsPage.module.css';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import CommentsComponent from '../../../components/comments/comments/CommentsComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

const CommentsPage: FC = () => {
    const {
        commentSlice: {
            commentsPageSize,
            setCommentsPageSize,
            comments,
            commentsPage,
            setCommentsPage
        }
    } = useAppContext();

    return (
        <div className={css.Container}>
            <div>
                <h1>COMMENTS</h1>
                <FiltrationComponent pageSize={commentsPageSize} enumKey={EKey.commentsPageSize} setPageSize={setCommentsPageSize} />
                <CommentsComponent />
            </div>
            <PaginationComponent enumKey={EKey.commentsPage} page={commentsPage} pages={comments.length} setPage={setCommentsPage} />
        </div>
    );
};

export default CommentsPage;