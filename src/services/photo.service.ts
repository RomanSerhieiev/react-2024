import { apiService } from './api.service';
import { urls } from '../constants/urls';
import { IPhoto } from '../interfaces/photo.interface';

export const photoService = {
    getAll: async () => await apiService.get<IPhoto[]>(urls.photos.all),
    getById: async (id: number) => await apiService.get<IPhoto>(urls.photos.byId(id)),
    getByAlbum: async (albumId: number) => await apiService.get<IPhoto[]>(urls.photos.byAlbum(albumId)),
    create: async (photo: Partial<IPhoto>) => await apiService.post<Partial<IPhoto>>(urls.photos.all, photo),
}