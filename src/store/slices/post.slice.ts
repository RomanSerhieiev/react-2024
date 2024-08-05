import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IPostSlice } from '../../interfaces/post-slice.interface';
import { postService } from '../../services/post.service';

const initialState: IPostSlice = {
    posts: []
};

const getPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await postService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                //...
            })
});

export const postActions = {
    ...postSlice.actions,
    getPosts
};