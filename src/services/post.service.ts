import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { url } from '../constants/urls';
import { IRes } from '../types/axios-response';

export const postService = {
    getAll: (): IRes<IPost[]> => apiService.get<IPost[]>(url.posts.all),
}