import React, { FC, useMemo, useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import User from './components/User/User';

const App: FC = () => {
    const [id, setId] = useState<number>(1);

    const incId = () => {
        setId(prev => ++prev)
    }

    const [users, setUsers] = useState<string>("users");
    const [posts, setPosts] = useState<string>("posts");
    const [comments, setComments] = useState<string>("comments");

    const links = useMemo(() => {
        return [users, posts, comments]
    }, [users, posts, comments])

    return (
        <div>
            <Menu links={links} />
            <User id={id} />
            <button onClick={incId}>inc id</button>
        </div>
    );
};

export default App;
