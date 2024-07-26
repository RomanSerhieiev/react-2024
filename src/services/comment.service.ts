import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';
import { IRes } from '../types/axios-response.type';

export const commentService = {
    getAll: (): IRes<IComment[]> => apiService.get<IComment[]>(url.comments.all),
    getById: (id: string): IRes<IComment> => apiService.get<IComment>(url.comments.byId(id)),
    getByPost: (postId: string): IRes<IComment[]> => apiService.get<IComment[]>(url.comments.byPost(postId)),
}