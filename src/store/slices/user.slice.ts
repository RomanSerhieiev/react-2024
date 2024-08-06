import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { userService } from '../../services/user.service';
import { AxiosError } from 'axios';
import { IUser } from '../../interfaces/user.interface';

interface IUserSlice {
    users: IUser[],
    user: IUser | null,
    error: string,
}

const initialState: IUserSlice = {
    users: [],
    user: null,
    error: '',
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await userService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async (userId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await userService.getById(userId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addMatcher(isRejected(getAll, getById), (state, action) => {
            state.error = action.payload as string;
        })
});

export const userActions = {
    ...userSlice.actions,
    getAll,
    getById
};