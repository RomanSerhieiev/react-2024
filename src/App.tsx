import React, { FC } from 'react';
import css from './App.module.css';
import useToggle from './hooks/useToggle';
import usePrevious from './hooks/usePrevious';

const App: FC = () => {
    const [state, changeState] = useToggle(true);
    const prevState = usePrevious(state);

    const getBtnClass = () => {
        if (state) return css.BtnTrue;
        return css.BtnFalse;
    };

    const getTxtClass = () => {
        if (prevState) return css.TxtTrue;
        if (prevState === undefined) return css.TxtUndefined;
        return css.TxtFalse;
    };

    return (
        <div className={css.Container}>
            <div className={css.Block}>State: <button className={[getBtnClass(), css.Btn].join(' ')} onClick={changeState}>{`${state}`}</button></div>
            <div className={css.Block}>Previous state: <b className={getTxtClass()}>{`${prevState}`}</b></div>
        </div>
    );
};

export default App;
