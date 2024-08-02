import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';
import { IRes } from '../types/axios-response';

export const userService = {
    getAll: (): IRes<IUser[]> => apiService.get<IUser[]>(url.users.all),
}