import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IToken } from '../interfaces/token.interface';
import { tokenPair } from '../constants/token-pair';
import { retrieveLocalStorageData } from '../helpers/retrieve-local-storage-data.helper';
import { IUserResponse } from '../interfaces/user-response.interface';
import { IUser } from '../interfaces/user.interface';
import { AxiosResponse } from 'axios';
import { localStorageSave } from '../helpers/local-storage-save.helper';

export const authService = {
    auth: async (user: IUser): Promise<boolean> => {
        const {data, data: {access, refresh}} = await apiService.post<IToken>(url.auth.base, user);
        localStorageSave<IToken>(data)
        return !!(access && refresh);
    },

    refresh: async (): Promise<void> => {
        const refresh = retrieveLocalStorageData<IToken>(tokenPair).refresh
        const {data} = await apiService.post<IToken>(url.auth.refresh, {refresh});
        localStorageSave<IToken>(data)
    },

    getMe: async (): Promise<IUserResponse> => {
        const {data} = await apiService.get<IUserResponse>(url.auth.me);
        return data;
    }
};