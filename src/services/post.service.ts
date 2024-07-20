import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { urls } from '../constants/urls';

export const postService = {
    getAll: async () => await apiService.get<IPost[]>(urls.posts.all),
    getById: async (id: number) => await apiService.get<IPost>(urls.posts.byId(id)),
    getByUser: async (userId: number) => await apiService.get<IPost[]>(urls.posts.byUser(userId)),
    create: async (post: Partial<IPost>) => await apiService.post<Partial<IPost>>(urls.posts.all, post),
}