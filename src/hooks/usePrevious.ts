import { useEffect, useRef } from 'react';

const usePrevious = (prevState: boolean): boolean | undefined => {
    const state = useRef<boolean>();

    useEffect(() => {
        state.current = prevState;
    }, [prevState]);

    return state.current;
};

export default usePrevious;