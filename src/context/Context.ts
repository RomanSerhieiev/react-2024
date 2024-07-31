import { TStore } from '../types/store.type';
import { createContext } from 'react';

const defaultStore: TStore = {
    userStore: {
        users: []
    },
    postStore: {
        posts: []
    }
};

export const Context = createContext<TStore>(defaultStore);