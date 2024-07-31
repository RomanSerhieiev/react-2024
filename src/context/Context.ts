import { TStore } from '../types/store.type';
import { createContext } from 'react';

const defaultStore: TStore = {
    userStore: {
        users: [],
        selectUser: () => void {}
    },
    postStore: {
        posts: []
    }
};

export const Context = createContext<TStore>(defaultStore);