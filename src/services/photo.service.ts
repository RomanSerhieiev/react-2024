import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IPhoto } from '../interfaces/photo.interface';
import { IAxiosResponse } from '../types/axios-response';

export const photoService = {
    getAll: (): IAxiosResponse<IPhoto[]> => apiService.get<IPhoto[]>(url.photos.all),
};