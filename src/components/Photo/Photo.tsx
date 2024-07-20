import React, { FC, useState } from 'react';
import { IAlbum } from '../../interfaces/album.interface';
import { IUser } from '../../interfaces/user.interface';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { IPhoto } from '../../interfaces/photo.interface';
import { photoValidator } from '../../validators/photo.validator';
import { photoService } from '../../services/photo.service';

interface IProps {
    albums: IAlbum[],
    users: IUser[]
}

const Photo: FC<IProps> = ({albums, users}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<Partial<IPhoto>>({
        mode: 'all',
        resolver: joiResolver(photoValidator)
    });

    const [selectedUser, setSelectedUser] = useState<number | null>(null);

    const userChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userId = parseInt(e.target.value);
        setSelectedUser(userId !== 0 ? userId : null);
    };

    const submitHandler = async (photo: Partial<IPhoto>) => {
        await photoService.create(photo)

    };

    const filteredAlbums = selectedUser
        ? albums.filter(album => album.userId === selectedUser)
        : albums;

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
                    <label>Album</label>
                    <select {...register("albumId")}>
                        {filteredAlbums.map(album => (
                            <option key={album.id} value={album.id}>{album.title}</option>
                        ))}
                    </select>
                    {errors.albumId && <span>{errors.albumId.message}</span>}
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" {...register("title")} />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label>URL</label>
                    <input type="text" {...register("url")} />
                    {errors.url && <span>{errors.url.message}</span>}
                </div>
                <div>
                    <label>Thumbnail URL</label>
                    <input type="text" {...register("thumbnailUrl")} />
                    {errors.thumbnailUrl && <span>{errors.thumbnailUrl.message}</span>}
                </div>
                <button disabled={!isValid} type="submit">Create Photo</button>
            </form>
        </div>
    );
};

export default Photo;