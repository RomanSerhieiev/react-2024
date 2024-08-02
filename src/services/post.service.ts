import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { url } from '../constants/urls';

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        const {data} = await apiService.get<IPost[]>(url.posts.all);
        return data
    }
}