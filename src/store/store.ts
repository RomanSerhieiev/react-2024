import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { postSlice } from './slices/post.slice';
import { albumSlice } from './slices/album.slice';
import { commentSlice } from './slices/comment.slice';
import { photoSlice } from './slices/photo.slice';
import { todoSlice } from './slices/todo.slice';

export const store = configureStore({
    reducer: {
        albumSlice: albumSlice.reducer,
        commentSlice: commentSlice.reducer,
        photoSlice: photoSlice.reducer,
        postSlice: postSlice.reducer,
        todoSlice: todoSlice.reducer,
        userSlice: userSlice.reducer,
    }
});