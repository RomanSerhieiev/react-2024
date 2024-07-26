import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppLocation } from '../../../hooks/useAppLocation';
import PostInfoComponent from '../../../components/posts/post-info/PostInfoComponent';
import { IPost } from '../../../interfaces/post.interface';
import { postService } from '../../../services/post.service';
import { IUser } from '../../../interfaces/user.interface';
import { userService } from '../../../services/user.service';
import css from '../../comments/comment-info/CommentInfoPage.module.css';
import { IComment } from '../../../interfaces/comment.interface';
import { commentService } from '../../../services/comment.service';

const PostInfoPage: FC = () => {
    const [post, setPost] = useState<IPost>();
    const [user, setUser] = useState<IUser>();
    const [comments, setComments] = useState<IComment[]>([]);
    const { postId } = useParams()
    const { state } = useAppLocation<IPost | null>()

    useEffect(() => {
        if (post) {
            userService.getById(`${post.userId}`)
                .then(({data}) => {
                    setUser(data);
                });
            commentService.getByPost(`${post.id}`)
                .then(({data}) => {
                    setComments(data);
                });
        } else if (state) {
            setPost(state)
        } else if (postId) {
            postService.getById(postId)
                .then(({data}) => {
                    setPost(data)
                })
        } else {
            throw new Error(`Couldn't find post with id ${postId}`)
        }
    }, [post, postId, state]);

    return (
        <div className={css.Container}>
            {post && user && comments && <PostInfoComponent post={post} user={user} comments={comments} />}
        </div>
    );
};

export default PostInfoPage;