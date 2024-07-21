import { AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';

export const userService = {
    getAll: async (): Promise<AxiosResponse<IUser[]>> => await apiService.get<IUser[]>(url.users.all),
    getById: async (id: string): Promise<AxiosResponse<IUser>> => await apiService.get<IUser>(url.users.byId(id)),
}