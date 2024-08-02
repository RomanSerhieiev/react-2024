import { createAsyncThunk, createSlice, isFulfilled, PayloadAction } from '@reduxjs/toolkit';
import { TUserSlice } from '../../types/user-slice.type';
import { userService } from '../../services/user.service';
import { AxiosError } from 'axios';

const initialState: TUserSlice = {
    users: [],
    isLoaded: false
};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = thunkAPI.fulfillWithValue(await userService.getAll());
            // thunkAPI.dispatch(userActions.changeLoadState(true))
            return users
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //...
            })
            .addMatcher(isFulfilled(loadUsers), (state, action) => {
                state.isLoaded = true
            })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers
};