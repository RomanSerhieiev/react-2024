import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { commentService } from '../../services/comment.service';
import { AxiosError } from 'axios';
import { IComment } from '../../interfaces/comment.interface';

interface ICommentSlice {
    comments: IComment[],
    comment: IComment | null,
    error: string | null,
}

const initialState: ICommentSlice = {
    comments: [],
    comment: null,
    error: null,
};

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await commentService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'commentSlice/getById',
    async (commentId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await commentService.getById(commentId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getByPost = createAsyncThunk(
    'commentSlice/getByPost',
    async (postId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await commentService.getByPost(postId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.comment = action.payload;
        })
        .addCase(getByPost.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
        .addMatcher(isRejected(getAll, getById, getByPost), (state, action) => {
            state.error = action.payload as string;
        })
});

export const commentActions = {
    ...commentSlice.actions,
    getAll,
    getById,
    getByPost
};