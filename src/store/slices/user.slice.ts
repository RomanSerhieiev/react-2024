import { createAsyncThunk, createSlice, isFulfilled, PayloadAction } from '@reduxjs/toolkit';
import { IUserSlice } from '../../interfaces/user-slice.interface';
import { userService } from '../../services/user.service';
import { AxiosError } from 'axios';

const initialState: IUserSlice = {
    user: null,
    users: [],
    error: '',
    isLoaded: false
};

const getUsers = createAsyncThunk(
    'userSlice/getUsers',
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

const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async (id: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await userService.getById(id))
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder => builder
            .addCase(getUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addMatcher(isFulfilled(getUsers), (state, action) => {
                state.isLoaded = true
            })
});

export const userActions = {
    ...userSlice.actions,
    getUsers,
    getUserById
};