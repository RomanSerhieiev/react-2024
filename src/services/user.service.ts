import { apiService } from './api.service';
import { urls } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';

export const userService = {
    getAll: async () => await apiService.get<IUser[]>(urls.users.all),
    getById: async (id: number) => await apiService.get<IUser>(urls.users.byId(id)),
    create: async (user: Partial<IUser>) => await apiService.post<Partial<IUser>>(urls.users.all, user),
}