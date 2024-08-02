import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAlbum } from '../interfaces/album.interface';
import { IRes } from '../types/axios-response';

export const albumService = {
    getAll: (): IRes<IAlbum[]> => apiService.get<IAlbum[]>(url.albums.all),
}