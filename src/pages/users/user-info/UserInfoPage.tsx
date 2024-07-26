import React, { FC, useEffect, useState } from 'react';
import css from './UserInfoPage.module.css'
import UserInfoComponent from '../../../components/users/user-info/UserInfoComponent';
import { IAlbum } from '../../../interfaces/album.interface';
import { IUser } from '../../../interfaces/user.interface';
import { useParams } from 'react-router-dom';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { userService } from '../../../services/user.service';
import { ITodo } from '../../../interfaces/todo.interface';
import { IPost } from '../../../interfaces/post.interface';
import { albumService } from '../../../services/album.service';
import { todoService } from '../../../services/todo.service';
import { postService } from '../../../services/post.service';

const UserInfoPage: FC = () => {
    const [user, setUser] = useState<IUser>();
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const { userId } = useParams()
    const { state } = useAppLocation<IUser | null>()

    useEffect(() => {
        if (user) {
            albumService.getByUser(`${user.id}`)
                .then(({data}) => {
                    setAlbums(data);
                });
            todoService.getByUser(`${user.id}`)
                .then(({data}) => {
                    setTodos(data);
                });
            postService.getByUser(`${user.id}`)
                .then(({data}) => {
                    setPosts(data);
                });
        } else if (state) {
            setUser(state)
        } else if (userId) {
            userService.getById(userId)
                .then(({data}) => {
                    setUser(data)
                })
        } else {
            throw new Error(`Couldn't find user with id ${userId}`)
        }
    }, [user, userId, state]);

    return (
        <div className={css.Container}>
            {user && albums && todos && posts && <UserInfoComponent user={user} albums={albums} todos={todos} posts={posts} />}
        </div>
    );
};

export default UserInfoPage;