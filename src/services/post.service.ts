import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { url } from '../constants/urls';

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        const {data} = await apiService.get<IPost[]>(url.posts.all);
        return data;
    },
    getById: async (id: string): Promise<IPost> => {
        const {data} = await apiService.get<IPost>(url.posts.byId(id));
        return data;
    },
    getByUser: async (userId: string): Promise<IPost[]> => {
        const {data} = await apiService.get<IPost[]>(url.posts.byUser(userId));
        return data;
    },
};