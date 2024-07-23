import { ICarRes } from '../interfaces/car-res.interface';
import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ICars } from '../interfaces/cars';
import { ICarReq } from '../interfaces/car-req.interface';

export const carService = {
    getAll: async (page: string = '1'): Promise<ICars | null> => {
        const res = await apiService.get<ICars>(url.cars.base, {params: {page}});
        return res.data;
    },

    post: async (car: ICarReq): Promise<ICarRes | null> => {
            const res = await apiService.post<ICarRes>(url.cars.base, car);
            return res.data;
    },

    getById: async (id: string): Promise<ICarRes | null> => {
            const res = await apiService.get<ICarRes>(url.cars.byId(id));
            return res.data;
    },

    putById: async (id: string, car: ICarReq): Promise<ICarRes | null> => {
            const res = await apiService.put<ICarRes>(url.cars.byId(id), car);
            return res.data;
    },

    patchById: async (id: string, car: ICarReq): Promise<ICarRes | null> => {
            const res = await apiService.patch<ICarRes>(url.cars.byId(id), car);
            return res.data;
    },

    deleteById: async (id: string): Promise<void> => {
            const res = await apiService.delete(url.cars.byId(id));
            return res.data;
    },
};