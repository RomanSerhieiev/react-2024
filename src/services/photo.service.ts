import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IPhoto } from '../interfaces/photo.interface';
import { IRes } from '../types/axios-response';

export const photoService = {
    getAll: (): IRes<IPhoto[]> => apiService.get<IPhoto[]>(url.photos.all),
}