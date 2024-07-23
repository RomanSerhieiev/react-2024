import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';

export const userService = {
    post: async (user: IUser) => await apiService.post<IUser>(url.users.base, user),
}