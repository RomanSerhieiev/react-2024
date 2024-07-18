import { useState } from 'react';

const useToggle = (initState: boolean): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initState);

    const changeState = () => {
        setState(prev => !prev);
    }

    return [state, changeState]
}

export default useToggle