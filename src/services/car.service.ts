import { ICarRes } from '../interfaces/car-res.interface';
import { apiService } from './api.service';
import { url } from '../constants/urls';
import { AxiosError } from 'axios';
import { IToken } from '../interfaces/token.interface';
import { retrieveLocalStorageData } from '../helpers/retrieveLocalStorageData';
import { authService } from './auth.service';
import { tokenPair } from '../constants/tokenPair';
import { ICar } from '../interfaces/car.interface';

export const carService = {
    getAll: async (page: string): Promise<ICarRes | null> => {
        try {
            const res = await apiService.get<ICarRes>(url.cars.base, {params: {page}});
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await carService.getAll(page);
            } else {
                console.error(axiosError);
            }
        }

        return null;
    },

    post: async (car: Partial<ICar>): Promise<ICar | null> => {
        try {
            const res = await apiService.post<ICar>(url.cars.base, car);
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await carService.post(car);
            } else {
                console.error(axiosError);
            }
        }

        return null;
    },

    getById: async (id: string): Promise<ICar | null> => {
        try {
            const res = await apiService.get<ICar>(url.cars.byId(id));
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await carService.getById(id);
            } else {
                console.error(axiosError);
            }
        }

        return null;
    },

    putById: async (id: string, car: Partial<ICar>): Promise<ICar | null> => {
        try {
            const res = await apiService.put<ICar>(url.cars.byId(id), car);
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await carService.putById(id, car);
            } else {
                console.error(axiosError);
            }
        }

        return null;
    },

    patchById: async (id: string, car: Partial<ICar>): Promise<ICar | null> => {
        try {
            const res = await apiService.patch<ICar>(url.cars.byId(id), car);
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await carService.patchById(id, car);
            } else {
                console.error(axiosError);
            }
        }

        return null;
    },

    deleteById: async (id: string): Promise<void | null> => {
        try {
            const res = await apiService.delete(url.cars.byId(id));
            return res.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                console.error(axiosError);

                const refreshToken = retrieveLocalStorageData<IToken>(tokenPair).refresh;
                await authService.refresh(refreshToken);

                return await carService.deleteById(id);
            } else {
                console.error(axiosError);
            }
        }

        return null;
    },
};