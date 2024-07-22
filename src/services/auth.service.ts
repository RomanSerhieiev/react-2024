import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IAuth } from '../interfaces/auth.interface';
import { IToken } from '../interfaces/token.interface';

export const authService = {
    authentication: async (auth: IAuth): Promise<boolean> => {
        let res

        try {
            res = await apiService.post<IToken>(url.auth.base, auth);
            localStorage.setItem('tokenPair', JSON.stringify(res.data))
        } catch (e) {
            console.log(e);
        }

        return !!(res?.data?.access && res?.data?.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await apiService.post<IToken>(url.auth.refresh, {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}