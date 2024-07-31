import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { url } from '../constants/urls';
import { IRes } from '../types/axios-response.type';

export const postService = {
    getAll: (): IRes<IPost[]> => apiService.get<IPost[]>(url.posts.all),
    getById: (id: string): IRes<IPost> => apiService.get<IPost>(url.posts.byId(id)),
    getByUser: (userId: string): IRes<IPost[]> => apiService.get<IPost[]>(url.posts.byUser(userId)),
}