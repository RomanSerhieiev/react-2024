import React, { Component } from 'react';
import css from'./App.module.css';
import Users from './components/Users/Users';

class App extends Component {
    render() {
        return (
            <div className={css.Container}>
                <Users />
            </div>
        );
    }
}

export default App;