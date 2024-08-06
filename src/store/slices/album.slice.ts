import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { albumService } from '../../services/album.service';
import { IAlbum } from '../../interfaces/album.interface';

interface IAlbumSlice {
    albums: IAlbum[],
    album: IAlbum | null,
    error: string,
}

const initialState: IAlbumSlice = {
    albums: [],
    album: null,
    error: '',
};

const getAll = createAsyncThunk(
    'albumSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await albumService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'albumSlice/getById',
    async (albumId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await albumService.getById(albumId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getByUser = createAsyncThunk(
    'albumSlice/getByUser',
    async (userId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await albumService.getByUser(userId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const albumSlice = createSlice({
    name: 'albumSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.albums = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.album = action.payload;
        })
        .addCase(getByUser.fulfilled, (state, action) => {
            state.albums = action.payload;
        })
        .addMatcher(isRejected(getAll, getById, getByUser), (state, action) => {
            state.error = action.payload as string;
        })
});

export const albumActions = {
    ...albumSlice.actions,
    getAll,
    getById,
    getByUser
};