import { TStore } from '../types/store.type';
import { useContext } from 'react';
import { Context } from '../context/Context';

export const useAppContext = (): TStore => useContext(Context)