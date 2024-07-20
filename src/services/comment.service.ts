import { apiService } from './api.service';
import { urls } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';

export const commentService = {
    getAll: async () => await apiService.get<IComment[]>(urls.comments.all),
    getById: async (id: number) => await apiService.get<IComment>(urls.comments.byId(id)),
    getByPost: async (postId: number) => await apiService.get<IComment[]>(urls.comments.byPost(postId)),
    create: async (comment: Partial<IComment>) => await apiService.post<Partial<IComment>>(urls.comments.all, comment),
}