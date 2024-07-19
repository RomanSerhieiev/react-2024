import { IUser } from '../interfaces/user.interface';
import { IDummy } from '../interfaces/dummy.interface';
import { apiService } from './api.service';
import { urls } from '../constants/urls';

export const userService = {
    getAll: () => apiService.get<IDummy<IUser[]>>(urls.users.all),
}