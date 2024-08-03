import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { IAlbum } from '../../../interfaces/album.interface';
import { ITodo } from '../../../interfaces/todo.interface';
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { localStorageSave } from '../../../helpers/local-storage-save.helper';
import { retrieveLocalStorageData } from '../../../helpers/retrieve-local-storage-data.helper';

interface IProps {
    user: IUser,
    albums: IAlbum[],
    todos: ITodo[],
    posts: IPost[]
}

const UserInfoComponent: FC<IProps> = ({user, albums, posts, todos}) => {
    const {
        albumSlice: {setSelectedAlbum},
        postSlice: {setSelectedPost},
        todoSlice: {setSelectedTodo},
    } = useStore();

    const navigate = useNavigate();

    const handleNavigate = (
        key: EKey,
        id: number,
        endpoint: string,
        setter: (retriever: number) => void,
    ) => {
        localStorageSave<number>(key, id);
        setter(retrieveLocalStorageData<number>(key));
        navigate(`${endpoint}/${id}`);
    };

    return (
        <div className={css.Container}>
            <h2>{user.id}. {user.name}</h2>
            <div className={css.UserContainer}>
                <div>
                    <h4>CONTACTS:</h4>
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
            </div>
            <h3>{user.name}'s albums</h3>
            <div className={css.ItemsContainer}>
                {albums.map(album => (
                    <div className={css.ItemContainer} key={album.id}>
                        <h4>{album.id}. {album.title}</h4>
                        <button onClick={() => handleNavigate(EKey.selectedAlbum, album.id, '/albums', setSelectedAlbum)}>INFO</button>
                    </div>
                ))}
            </div>
            <h3>{user.name}'s posts</h3>
            <div className={css.ItemsContainer}>
                {posts.map(post => (
                    <div className={css.ItemContainer} key={post.id}>
                        <h4>{post.id}. {post.title}</h4>
                        <button onClick={() => handleNavigate(EKey.selectedPost, post.id, '/posts', setSelectedPost)}>INFO</button>
                    </div>
                ))}
            </div>
            <h3>{user.name}'s todos</h3>
            <div className={css.ItemsContainer}>
                {todos.map(todo => (
                    <div className={css.ItemContainer} key={todo.id}>
                        <h4>{todo.id}. {todo.title}</h4>
                        <button onClick={() => handleNavigate(EKey.selectedTodo, todo.id, '/todos', setSelectedTodo)}>INFO</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserInfoComponent;