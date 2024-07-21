import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IPhoto } from '../interfaces/photo.interface';
import { AxiosResponse } from 'axios';

export const photoService = {
    getAll: async (): Promise<AxiosResponse<IPhoto[]>> => await apiService.get<IPhoto[]>(url.photos.all),
    getById: async (id: string): Promise<AxiosResponse<IPhoto>> => await apiService.get<IPhoto>(url.photos.byId(id)),
    getByAlbum: async (albumId: string): Promise<AxiosResponse<IPhoto[]>> => await apiService.get<IPhoto[]>(url.photos.byAlbum(albumId)),
}