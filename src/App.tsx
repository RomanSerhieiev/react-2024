import React, { FC, useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import User from './components/User/User';

const App: FC = () => {
    const [id, setId] = useState<number>(1);

    const incId = () => {
        setId(prev => ++prev)
    }
    
    return (
        <div>
            <Menu />
            <User id={id} />
            <button onClick={incId}>inc id</button>
        </div>
    );
};

export default App;
