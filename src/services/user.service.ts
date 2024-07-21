import { AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { urls } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';

export const userService = {
    getAll: async (): Promise<AxiosResponse<IUser[]>> => await apiService.get<IUser[]>(urls.users.all),
    getById: async (id: string): Promise<AxiosResponse<IUser>> => await apiService.get<IUser>(urls.users.byId(id)),
    create: async (user: Partial<IUser>): Promise<AxiosResponse<Partial<IUser>>> => await apiService.post<Partial<IUser>>(urls.users.all, user),
}