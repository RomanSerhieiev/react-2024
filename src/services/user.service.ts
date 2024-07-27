import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';
import { IUserResponse } from '../interfaces/user-response.interface';

export const userService = {
    post: async (user: IUser): Promise<boolean> => {
        const {data: {id}} = await apiService.post<IUserResponse>(url.users.base, user);
        return !!id
    },
}