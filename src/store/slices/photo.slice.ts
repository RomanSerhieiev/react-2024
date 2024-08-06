import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { photoService } from '../../services/photo.service';
import { AxiosError } from 'axios';
import { IPhoto } from '../../interfaces/photo.interface';

interface IPhotoSlice {
    photos: IPhoto[],
    photo: IPhoto | null,
    error: string | null,
}

const initialState: IPhotoSlice = {
    photos: [],
    photo: null,
    error: null,
};

const getAll = createAsyncThunk(
    'photoSlice/getAll',
    async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await photoService.getAll());
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getById = createAsyncThunk(
    'photoSlice/getById',
    async (photoId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await photoService.getById(photoId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const getByAlbum = createAsyncThunk(
    'photoSlice/getByAlbum',
    async (albumId: string, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await photoService.getByAlbum(albumId));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.photos = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.photo = action.payload;
        })
        .addCase(getByAlbum.fulfilled, (state, action) => {
            state.photos = action.payload;
        })
        .addMatcher(isRejected(getAll, getById, getByAlbum), (state, action) => {
            state.error = action.payload as string;
        })
});

export const photoActions = {
    ...photoSlice.actions,
    getAll,
    getById,
    getByAlbum
};