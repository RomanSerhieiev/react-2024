import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAlbum } from '../interfaces/album.interface';
import { IRes } from '../types/axios-response.type';

export const albumService = {
    getAll: (): IRes<IAlbum[]> => apiService.get<IAlbum[]>(url.albums.all),
    getById: (id: string): IRes<IAlbum> => apiService.get<IAlbum>(url.albums.byId(id)),
    getByUser: (userId: string): IRes<IAlbum[]> => apiService.get<IAlbum[]>(url.albums.byUser(userId)),
}