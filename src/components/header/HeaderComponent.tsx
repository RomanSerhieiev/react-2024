import React, { FC } from 'react';
import css from './HeaderComponent.module.css';
import { NavLink } from 'react-router-dom';
import { retrieveLocalStorageData } from '../../helpers/retrieve-local-storage-data.helper';
import { EKey } from '../../enums/local-storage-keys.enum';
import { useAppContext } from '../../hooks/useAppContext';

const HeaderComponent: FC = () => {
    const {
        albumSlice: {albums},
        commentSlice: {comments},
        photoSlice: {photos},
        postSlice: {posts},
        todoSlice: {todos},
        userSlice: {users},
    } = useAppContext();

    const album = albums.flat().find(album => album.id === retrieveLocalStorageData<number>(EKey.selectedAlbum));
    const comment = comments.flat().find(comment => comment.id === retrieveLocalStorageData<number>(EKey.selectedComment));
    const photo = photos.flat().find(photo => photo.id === retrieveLocalStorageData<number>(EKey.selectedPhoto));
    const post = posts.flat().find(post => post.id === retrieveLocalStorageData<number>(EKey.selectedPost));
    const todo = todos.flat().find(todo => todo.id === retrieveLocalStorageData<number>(EKey.selectedTodo));
    const user = users.flat().find(user => user.id === retrieveLocalStorageData<number>(EKey.selectedUser));

    return (
        <div className={css.Container}>
            <div className={css.Buttons}>
                <NavLink to={'albums'}>
                    <button className={css.MainButton}>ALBUMS</button>
                </NavLink>
                {album && <NavLink to={`albums/${album.id}`}>
                  <button className={css.SecondaryButton}>{album.id}. {album.title.slice(0, 17)}</button>
                </NavLink>}
            </div>
            <div className={css.Buttons}>
                <NavLink to={'comments'}>
                    <button className={css.MainButton}>COMMENTS</button>
                </NavLink>
                {comment && <NavLink to={`comments/${comment.id}`}>
                  <button className={css.SecondaryButton}>{comment.id}. {comment.name.slice(0, 17)}</button>
                </NavLink>}
            </div>
            <div className={css.Buttons}>
                <NavLink to={'photos'}>
                    <button className={css.MainButton}>PHOTOS</button>
                </NavLink>
                {photo && <NavLink to={`photos/${photo.id}`}>
                  <button className={css.SecondaryButton}>{photo.id}. {photo.title.slice(0, 17)}</button>
                </NavLink>}
            </div>
            <div className={css.Buttons}>
                <NavLink to={'posts'}>
                    <button className={css.MainButton}>POSTS</button>
                </NavLink>
                {post && <NavLink to={`posts/${post.id}`}>
                  <button className={css.SecondaryButton}>{post.id}. {post.title.slice(0, 17)}</button>
                </NavLink>}
            </div>
            <div className={css.Buttons}>
                <NavLink to={'todos'}>
                    <button className={css.MainButton}>TODOS</button>
                </NavLink>
                {todo && <NavLink to={`todos/${todo.id}`}>
                  <button className={css.SecondaryButton}>{todo.id}. {todo.title.slice(0, 17)}</button>
                </NavLink>}
            </div>
            <div className={css.Buttons}>
                <NavLink to={'users'}>
                    <button className={css.MainButton}>USERS</button>
                </NavLink>
                {user && <NavLink to={`users/${user.id}`}>
                  <button className={css.SecondaryButton}>{user.id}. {user.name.slice(0, 17)}</button>
                </NavLink>}
            </div>
        </div>
    );
};

export default HeaderComponent;