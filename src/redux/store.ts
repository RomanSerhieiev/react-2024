import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { postSlice } from './slices/post.slice';

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});