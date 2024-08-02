import React, { FC } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { decrement, increment, incrementByAmount } from './redux/slices/counter1-slice';

const App: FC = () => {
    const counter1ValueState = useAppSelector(state => state.counter1Slice.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>{counter1ValueState}</h2>
            <button onClick={() => dispatch(increment())}>do increment</button>
            <button onClick={() => dispatch(decrement())}>do increment</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>do increment by amount of 10</button>
        </div>
    );
};

export default App;
