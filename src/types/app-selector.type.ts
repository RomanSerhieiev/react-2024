import { store } from '../store/store';

export type TAppSelector = ReturnType<typeof store.getState>