import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { url } from '../constants/urls';
import { IAxiosResponse } from '../types/axios-response';

export const postService = {
    getAll: (): IAxiosResponse<IPost[]> => apiService.get<IPost[]>(url.posts.all),
};