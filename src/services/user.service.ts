import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';
import { IAxiosResponse } from '../types/axios-response';

export const userService = {
    getAll: (): IAxiosResponse<IUser[]> => apiService.get<IUser[]>(url.users.all),
};