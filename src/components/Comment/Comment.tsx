import React, { FC, useState } from 'react';
import { IPost } from '../../interfaces/post.interface';
import { IUser } from '../../interfaces/user.interface';
import { useForm } from 'react-hook-form';
import { IComment } from '../../interfaces/comment.interface';
import { joiResolver } from '@hookform/resolvers/joi';
import { commentValidator } from '../../validators/comment.validator';
import { commentService } from '../../services/comment.service';

interface IProps {
    posts: IPost[],
    users: IUser[]
}

const Comment: FC<IProps> = ({posts, users}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<Partial<IComment>>({
        mode: "all",
        resolver: joiResolver(commentValidator)
    });

    const [selectedUser, setSelectedUser] = useState<number | null>(null);

    const userChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userId = parseInt(e.target.value);
        setSelectedUser(userId !== 0 ? userId : null);
    };

    const submitHandler = async (comment: Partial<IComment>) => {
        await commentService.create(comment)

    };

    const filteredPosts = selectedUser
        ? posts.filter(post => post.userId === selectedUser)
        : posts;

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>User</label>
                    <select onChange={userChangeHandler}>
                        <option value="0">All Users</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Post</label>
                    <select {...register("postId", { required: true })}>
                        {filteredPosts.map(post => (
                            <option key={post.id} value={post.id}>{post.title}</option>
                        ))}
                    </select>
                    {errors.postId && <span>{errors.postId.message}</span>}
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" {...register("name", { required: true })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label>Body</label>
                    <textarea {...register("body", { required: true })} />
                    {errors.body && <span>{errors.body.message}</span>}
                </div>
                <button disabled={!isValid} type="submit">Create Comment</button>
            </form>
        </div>
    );
};

export default Comment;