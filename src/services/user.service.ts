import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const {data} = await apiService.get<IUser[]>(url.users.all);
        return data
    }
}