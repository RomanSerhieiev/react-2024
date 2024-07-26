import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IPhoto } from '../interfaces/photo.interface';
import { IRes } from '../types/axios-response.type';

export const photoService = {
    getAll: (): IRes<IPhoto[]> => apiService.get<IPhoto[]>(url.photos.all),
    getById: (id: string): IRes<IPhoto> => apiService.get<IPhoto>(url.photos.byId(id)),
    getByAlbum: (albumId: string): IRes<IPhoto[]> => apiService.get<IPhoto[]>(url.photos.byAlbum(albumId)),
}