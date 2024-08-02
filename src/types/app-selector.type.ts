import { store } from '../redux/store';

export type TAppSelector = ReturnType<typeof store.getState>