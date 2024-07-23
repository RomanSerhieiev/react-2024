import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAuth } from '../interfaces/auth.interface';
import { IToken } from '../interfaces/token.interface';
import { tokenPair } from '../constants/tokenPair';
import { AxiosError } from 'axios';
import { retrieveLocalStorageData } from '../helpers/retrieveLocalStorageData';
import { IUser } from '../interfaces/user.interface';

export const authService = {
    auth: async (auth: IAuth): Promise<boolean> => {
        try {
            const res = await apiService.post<IToken>(url.auth.base, auth);
            const { access, refresh } = res.data;

            if (access && refresh) {
                localStorage.setItem(tokenPair, JSON.stringify(res.data));
                return true;
            }
        } catch (e) {
            console.error(e);
        }

        return false
    },

    refresh: async (refresh: string) => {
        const res = await apiService.post<IToken>(url.auth.refresh, {refresh});
        localStorage.setItem(tokenPair, JSON.stringify(res.data));
    },

    me: async (): Promise<IUser | null> => {
        try {
            const res = await apiService.get<IUser>(url.cars.base);
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await authService.me();
            } else {
                console.error(axiosError);
            }
        }

        return null;
    }
}