import { apiService } from './api.service';
import { url } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';
import { AxiosResponse } from 'axios';

export const commentService = {
    getAll: async (): Promise<AxiosResponse<IComment[]>> => await apiService.get<IComment[]>(url.comments.all),
    getById: async (id: string): Promise<AxiosResponse<IComment>> => await apiService.get<IComment>(url.comments.byId(id)),
    getByPost: async (postId: string): Promise<AxiosResponse<IComment[]>> => await apiService.get<IComment[]>(url.comments.byPost(postId)),
}