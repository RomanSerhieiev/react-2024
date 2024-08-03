import React, { FC } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import UserInfoComponent from '../../../components/users/user-info/UserInfoComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const UserInfoPage: FC = () => {
    const {
        userSlice: {users},
        albumSlice: {albums},
        postSlice: {posts},
        todoSlice: {todos}
    } = useAppContext();

    const {userId = '1'} = useParams();

    const user = users.flat().find(user => user.id === +userId);
    const userAlbums = albums.flat().filter(album => user?.albumsIds.includes(album.id));
    const userPosts = posts.flat().filter(post => user?.postsIds.includes(post.id));
    const userTodos = todos.flat().filter(todo => user?.todosIds.includes(todo.id));

    return (
        <div className={css.Container}>
            {user && albums && todos && posts && <UserInfoComponent user={user} albums={userAlbums} todos={userTodos} posts={userPosts} />}
        </div>
    );
};

export default UserInfoPage;