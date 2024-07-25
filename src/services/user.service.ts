import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IUser } from '../interfaces/user.interface';
import { IAuth } from '../interfaces/auth.interface';

export const userService = {
    post: async (user: IAuth): Promise<boolean> => {
        const res = await apiService.post<IUser>(url.users.base, user);
        return !!res.data.id
    },
}