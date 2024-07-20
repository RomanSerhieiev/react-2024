import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './App.css';
import { IUser } from './interfaces/user.interface';
import { IPost } from './interfaces/post.interface';
import { IAlbum } from './interfaces/album.interface';
import { userService } from './services/user.service';
import { postService } from './services/post.service';
import { albumService } from './services/album.service';
import Form from './components/Form/Form';
import User from './components/User/User';
import Post from './components/Post/Post';
import Comment from './components/Comment/Comment';
import Album from './components/Album/Album';
import Photo from './components/Photo/Photo';
import Todo from './components/Todo/Todo';

const App: FC = () => {
    const [form, setForm] = useState<string>('');
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [albums, setAlbums] = useState<IAlbum[]>([]);

    useEffect(() => {
        userService.getAll().then(response => setUsers(response.data));
        postService.getAll().then(response => setPosts(response.data));
        albumService.getAll().then(response => setAlbums(response.data));
    }, []);

    const handleForm = (e: ChangeEvent<HTMLSelectElement>) => {
        setForm(e.target.value);
    };

    return (
        <div>
            <h1>What do you want to create?</h1>
            <Form
                label="Select Type"
                options={[
                    {value: '', label: 'Choose...'},
                    {value: 'post', label: 'Post'},
                    {value: 'comment', label: 'Comment'},
                    {value: 'album', label: 'Album'},
                    {value: 'photo', label: 'Photo'},
                    {value: 'todo', label: 'Todo'},
                    {value: 'user', label: 'User'}
                ]}
                onChange={handleForm}
            />

            {form === 'post' && <Post users={users} />}
            {form === 'comment' && <Comment posts={posts} users={users} />}
            {form === 'album' && <Album users={users} />}
            {form === 'photo' && <Photo albums={albums} users={users} />}
            {form === 'todo' && <Todo users={users} />}
            {form === 'user' && <User />}
        </div>
    );
};

export default App;
