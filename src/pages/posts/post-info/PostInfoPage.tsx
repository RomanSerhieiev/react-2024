import React, { FC } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import PostInfoComponent from '../../../components/posts/post-info/PostInfoComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const PostInfoPage: FC = () => {
    const {
        userSlice: {users},
        postSlice: {posts},
        commentSlice: {comments}
    } = useAppContext();

    const {postId = '1'} = useParams();

    const post = posts.flat().find(post => post.id === +postId);
    const user = users.flat().find(user => post?.userId === user.id);
    const postComments = comments.flat().filter(comment => post?.commentsIds.includes(comment.id));

    return (
        <div className={css.Container}>
            {post && user && comments && <PostInfoComponent post={post} user={user} comments={postComments} />}
        </div>
    );
};

export default PostInfoPage;