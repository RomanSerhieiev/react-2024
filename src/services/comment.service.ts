import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';
import { IRes } from '../types/axios-response';

export const commentService = {
    getAll: (): IRes<IComment[]> => apiService.get<IComment[]>(url.comments.all),
}