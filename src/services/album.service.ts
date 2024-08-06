import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAlbum } from '../interfaces/album.interface';

export const albumService = {
    getAll: async (): Promise<IAlbum[]> => {
        const {data} = await apiService.get<IAlbum[]>(url.albums.all);
        return data;
    },
    getById: async (id: string): Promise<IAlbum> => {
        const {data} = await apiService.get<IAlbum>(url.albums.byId(id));
        return data;
    },
    getByUser: async (userId: string): Promise<IAlbum[]> => {
        const {data} = await apiService.get<IAlbum[]>(url.albums.byUser(userId));
        return data;
    },
};