import { AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAlbum } from '../interfaces/album.interface';

export const albumService = {
    getAll: async (): Promise<AxiosResponse<IAlbum[]>> => await apiService.get<IAlbum[]>(url.albums.all),
    getById: async (id: string): Promise<AxiosResponse<IAlbum>> => await apiService.get<IAlbum>(url.albums.byId(id)),
    getByUser: async (userId: string): Promise<AxiosResponse<IAlbum[]>> => await apiService.get<IAlbum[]>(url.albums.byUser(userId)),
}