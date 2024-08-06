import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';

export const commentService = {
    getAll: async (): Promise<IComment[]> => {
        const {data} = await apiService.get<IComment[]>(url.comments.all);
        return data;
    },
    getById: async (id: string): Promise<IComment> => {
        const {data} = await apiService.get<IComment>(url.comments.byId(id));
        return data;
    },
    getByPost: async (postId: string): Promise<IComment[]> => {
        const {data} = await apiService.get<IComment[]>(url.comments.byPost(postId));
        return data;
    },
};