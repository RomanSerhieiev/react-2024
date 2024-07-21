import { apiService } from './api.service';
import { IPost } from '../interfaces/post.interface';
import { url } from '../constants/urls';
import { AxiosResponse } from 'axios';

export const postService = {
    getAll: async (): Promise<AxiosResponse<IPost[]>> => await apiService.get<IPost[]>(url.posts.all),
    getById: async (id: string): Promise<AxiosResponse<IPost>> => await apiService.get<IPost>(url.posts.byId(id)),
    getByUser: async (userId: string): Promise<AxiosResponse<IPost[]>> => await apiService.get<IPost[]>(url.posts.byUser(userId)),
}