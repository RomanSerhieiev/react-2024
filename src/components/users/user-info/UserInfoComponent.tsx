import React, { FC } from 'react';
import css from './UserInfoComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { IUser } from '../../../interfaces/user.interface';
import { ITodo } from '../../../interfaces/todo.interface';
import { IPost } from '../../../interfaces/post.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    user: IUser,
    albums: IAlbum[],
    todos: ITodo[],
    posts: IPost[]
}

const UserInfoComponent: FC<IProps> = ({user, albums, posts, todos}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <div>
                <h3>{user.id}. {user.name}</h3>
                <p>EMAIL: <span className={css.Email}>{user.email}</span></p>
                <p>PHONE: {user.phone}</p>
                <p>USERNAME: {user.username}</p>
                <p>WEBSITE: {user.website}</p>
            </div>
            <div>
                <h4>ADDRESS:</h4>
                <p>CITY: {user.address.city}</p>
                <p>STREET: {user.address.street}</p>
                <p>SUITE: {user.address.suite}</p>
                <p>ZIP CODE: {user.address.zipcode}</p>
                <p>GEO: {user.address.geo.lat}, {user.address.geo.lng}</p>
            </div>
            <div>
                <h4>COMPANY:</h4>
                <p>NAME: {user.company.name}</p>
                <p>CATCH PHRASE: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
            </div>
            <button onClick={() => navigateHandler<IAlbum[]>(`albums`, albums)}>ALBUMS</button>
            <button onClick={() => navigateHandler<ITodo[]>(`todos`, todos)}>TODOS</button>
            <button onClick={() => navigateHandler<IPost[]>(`posts`, posts)}>POSTS</button>
        </div>
    );
};

export default UserInfoComponent;