import React, { FC, useCallback, useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import User from './components/User/User';

const App: FC = () => {
    const [id, setId] = useState<number>(1);

    const incId = () => {
        setId(prev => ++prev)
    }

    const someFunc = useCallback(() => {
        console.log('someFunc');
    }, [])
    
    return (
        <div>
            <Menu someFunc={someFunc} />
            <User id={id} />
            <button onClick={incId}>inc id</button>
        </div>
    );
};

export default App;
