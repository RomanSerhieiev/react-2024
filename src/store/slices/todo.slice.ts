import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { todoService } from '../../services/todo.service';
import { ITodo } from '../../interfaces/todo.interface';

interface ITodoSlice {
    todos: ITodo[],
    todo: ITodo | null,
    error: string,
}

const initialState: ITodoSlice = {
    todos: [],
    todo: null,
    error: '',
};

const getAll = createAsyncThunk(
    'todoSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await todoService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'todoSlice/getById',
    async (todoId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await todoService.getById(todoId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getByUser = createAsyncThunk(
    'todoSlice/getByUser',
    async (userId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await todoService.getByUser(userId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.todo = action.payload;
        })
        .addCase(getByUser.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
        .addMatcher(isRejected(getAll, getById, getByUser), (state, action) => {
            state.error = action.payload as string;
        })
});

export const todoActions = {
    ...todoSlice.actions,
    getAll,
    getById,
    getByUser
};