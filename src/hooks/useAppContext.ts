import { IStore } from '../interfaces/store.interface';
import { useContext } from 'react';
import { Store } from '../store/store';

export const useAppContext = (): IStore => useContext(Store);