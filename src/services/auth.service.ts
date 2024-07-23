import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAuth } from '../interfaces/auth.interface';
import { IToken } from '../interfaces/token.interface';
import { tokenPair } from '../constants/tokenPair';
import { IUser } from '../interfaces/user.interface';
import { retrieveLocalStorageData } from '../helpers/retrieveLocalStorageData';

export const authService = {
    auth: async (auth: IAuth): Promise<boolean> => {
        const {data, data: {access, refresh}} = await apiService.post<IToken>(url.auth.base, auth);
        localStorage.setItem(tokenPair, JSON.stringify(data));
        return !!(access && refresh);
    },

    refresh: async (): Promise<void> => {
        const refresh = retrieveLocalStorageData<IToken>(tokenPair).refresh
        const res = await apiService.post<IToken>(url.auth.refresh, {refresh});
        localStorage.setItem(tokenPair, JSON.stringify(res.data));
    },

    me: async (): Promise<IUser> => {
        const res = await apiService.get<IUser>(url.auth.me);
        return res.data;
    }
};