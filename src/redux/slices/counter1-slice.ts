import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCounterState } from '../../types/counter-state.type';

const initialState: TCounterState = {
    value: 0
};

export const counter1Slice = createSlice({
    name: 'counter1SliceName',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount
} = counter1Slice.actions;