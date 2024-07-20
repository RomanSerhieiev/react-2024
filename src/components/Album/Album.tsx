import React, { FC } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { albumValidator } from '../../validators/album.validator';
import { albumService } from '../../services/album.service';
import { IAlbum } from '../../interfaces/album.interface';

interface IProps {
    users: IUser[];
}

const Album: FC<IProps> = ({users}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<Partial<IAlbum>>({
        mode: 'all',
        resolver: joiResolver(albumValidator)
    });

    const submitHandler = async (album: Partial<IAlbum>) => {
        await albumService.create(album);
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
                <button disabled={!isValid} type="submit">Create Album</button>
            </form>
        </div>
    );
};

export default Album;