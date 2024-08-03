import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAlbum } from '../interfaces/album.interface';
import { IAxiosResponse } from '../types/axios-response';

export const albumService = {
    getAll: (): IAxiosResponse<IAlbum[]> => apiService.get<IAlbum[]>(url.albums.all),
};