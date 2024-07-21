import { AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { url } from '../constants/url';
import { IResponse } from '../interfaces/response.interface';
import { ILocation } from '../interfaces/location.interface';

export const locationService = {
    getAll: async (): Promise<AxiosResponse<IResponse<ILocation[]>>> => await apiService.get<IResponse<ILocation[]>>(url.location.all),
    getById: async (id: string): Promise<AxiosResponse<ILocation>> => await apiService.get<ILocation>(url.location.byId(id)),
}