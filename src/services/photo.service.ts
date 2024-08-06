import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IPhoto } from '../interfaces/photo.interface';

export const photoService = {
    getAll: async (): Promise<IPhoto[]> => {
        const {data} = await apiService.get<IPhoto[]>(url.photos.all);
        return data;
    },
    getById: async (id: string): Promise<IPhoto> => {
        const {data} = await apiService.get<IPhoto>(url.photos.byId(id));
        return data;
    },
    getByAlbum: async (albumId: string): Promise<IPhoto[]> => {
        const {data} = await apiService.get<IPhoto[]>(url.photos.byAlbum(albumId));
        return data;
    },
};