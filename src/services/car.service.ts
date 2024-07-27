import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ICars } from '../interfaces/cars.interface';
import { ICar } from '../interfaces/car.interface';
import { ICarResponse } from '../interfaces/car-response.interface';

interface IPhoto {
    photo: File;
}

export const carService = {
    getAll: async (page: string = '1'): Promise<ICars | null> => {
        const {data} = await apiService.get<ICars>(url.cars.base, {params: {page}});
        return data;
    },

    create: async (car: ICar): Promise<ICarResponse | null> => {
            const {data} = await apiService.post<ICarResponse>(url.cars.base, car);
            return data;
    },

    getById: async (id: string): Promise<ICarResponse | null> => {
            const {data} = await apiService.get<ICarResponse>(url.cars.byId(id));
            return data;
    },

    fullUpdateById: async (id: string, car: ICar): Promise<ICarResponse | null> => {
            const {data} = await apiService.put<ICarResponse>(url.cars.byId(id), car);
            return data;
    },

    partialUpdateById: async (id: string, car: ICar): Promise<ICarResponse | null> => {
            const {data} = await apiService.patch<ICarResponse>(url.cars.byId(id), car);
            return data;
    },

    updatePhotoById: async (id: string, photo: IPhoto): Promise<ICarResponse | null> => {
        const formData = new FormData();
        formData.append('photo', photo.photo);
        const {data} = await apiService.put<ICarResponse>(url.cars.photoById(id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return data;
    },

    deleteById: async (id: string): Promise<void> => {
            const {data} = await apiService.delete(url.cars.byId(id));
            return data;
    },
};