import { ICarPaginated } from '../interfaces/car-pagination.interface';
import { apiService } from './api.service';
import { url } from '../constants/urls';
import { AxiosError } from 'axios';
import { IToken } from '../interfaces/token.interface';
import { retrieveLocalStorageData } from '../helpers/retrieveLocalStorageData';
import { authService } from './auth.service';

export const carService = {
    getAll: async (): Promise<ICarPaginated | null> => {
        try {
            const res = await apiService.get<ICarPaginated>(url.cars.all);
            return res.data;

        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<IToken>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                return await carService.getAll();
            }
        }

        return null;
    }
}