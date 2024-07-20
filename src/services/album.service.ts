import { apiService } from './api.service';
import { urls } from '../constants/urls';
import { IAlbum } from '../interfaces/album.interface';

export const albumService = {
    getAll: async () => await apiService.get<IAlbum[]>(urls.albums.all),
    getById: async (id: number) => await apiService.get<IAlbum>(urls.albums.byId(id)),
    getByUser: async (userId: number) => await apiService.get<IAlbum[]>(urls.albums.byUser(userId)),
    create: async (album: Partial<IAlbum>) => await apiService.post<Partial<IAlbum>>(urls.albums.all, album),
}