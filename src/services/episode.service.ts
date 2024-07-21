import { AxiosResponse } from 'axios';
import { apiService } from './api.service';
import { url } from '../constants/url';
import { IResponse } from '../interfaces/response.interface';
import { IEpisode } from '../interfaces/episode.interface';

export const episodeService = {
    getAll: async (): Promise<AxiosResponse<IResponse<IEpisode[]>>> => await apiService.get<IResponse<IEpisode[]>>(url.episode.all),
    getById: async (id: string): Promise<AxiosResponse<IEpisode>> => await apiService.get<IEpisode>(url.episode.byId(id)),
}