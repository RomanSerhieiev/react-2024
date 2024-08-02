import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TUserSlice } from '../../types/user-slice.type';
import { userService } from '../../services/user.service';
import { AxiosError } from 'axios';

const initialState: TUserSlice = {
    users: []
};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await userService.getAll());
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
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //...
            })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers
};