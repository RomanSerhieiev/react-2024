import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';
import { IAxiosResponse } from '../types/axios-response';

export const commentService = {
    getAll: (): IAxiosResponse<IComment[]> => apiService.get<IComment[]>(url.comments.all),
};