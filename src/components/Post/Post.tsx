import React, { FC } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { postValidator } from '../../validators/post.validator';
import { IPost } from '../../interfaces/post.interface';
import { postService } from '../../services/post.service';

interface IProps {
    users: IUser[];
}

const Post: FC<IProps> = ({users}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<Partial<IPost>>({
        mode: "all",
        resolver: joiResolver(postValidator)
    });

    const submitHandler = async (post: Partial<IPost>) => {
        await postService.create(post);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>User</label>
                    <select {...register("userId")}>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    {errors.userId && <span>{errors.userId.message}</span>}
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" {...register("title")} />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label>Body</label>
                    <textarea {...register("body")} />
                    {errors.body && <span>{errors.body.message}</span>}
                </div>
                <button disabled={!isValid} type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default Post;