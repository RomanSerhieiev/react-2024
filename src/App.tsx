import React, { FC } from 'react';
import './App.css';
import OriginalComponent1 from './components/OriginalComponent1';
import OriginalComponent2 from './components/OriginalComponent2';

const App: FC = () => {
    return (
        <div>
            <OriginalComponent1 />
            <OriginalComponent2 />
        </div>
    );
};

export default App;
