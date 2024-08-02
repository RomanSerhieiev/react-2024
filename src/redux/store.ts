import { configureStore } from '@reduxjs/toolkit';
import { counter1Slice } from './slices/counter1-slice';

export const store = configureStore({
    reducer: {
        counter1Slice: counter1Slice.reducer
    }
});