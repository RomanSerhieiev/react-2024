import React, { FC } from 'react';
import './App.css';
import SomeComponent from './components/SomeComponent';
import WrapComponent from './hoc/WrapComponent';

const App: FC = () => {
    return (
        <div>
            <WrapComponent>
                <SomeComponent />
            </WrapComponent>
        </div>
    );
};

export default App;
