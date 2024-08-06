import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { postService } from '../../services/post.service';
import { IPost } from '../../interfaces/post.interface';

interface IPostSlice {
    posts: IPost[],
    post: IPost | null,
    error: string | null,
}

const initialState: IPostSlice = {
    posts: [],
    post: null,
    error: null,
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await postService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async (postId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await postService.getById(postId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getByUser = createAsyncThunk(
    'postSlice/getByUser',
    async (userId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await postService.getByUser(userId));
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
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.post = action.payload;
        })
        .addCase(getByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        .addMatcher(isRejected(getAll, getById, getByUser), (state, action) => {
            state.error = action.payload as string;
        })
});

export const postActions = {
    ...postSlice.actions,
    getAll,
    getById,
    getByUser
};