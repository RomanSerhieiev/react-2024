import { AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { url } from '../constants/url';
import { ICharacter } from '../interfaces/character.interface';
import { IResponse } from '../interfaces/response.interface';

export const characterService = {
    getAll: async (page: string): Promise<AxiosResponse<IResponse<ICharacter[]>>> => await apiService.get<IResponse<ICharacter[]>>(url.character.all, {
        params: {
            page
        }
    }),
    getById: async (id: string): Promise<AxiosResponse<ICharacter>> => await apiService.get<ICharacter>(url.character.byId(id)),
}