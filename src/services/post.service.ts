import { IPost } from '../interfaces/post.interface';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios/axios.instance';
import { IDummy } from '../interfaces/dymmy.interface';

class PostService {
    private axiosInstance = axiosInstance;

    constructor() {
        this.axiosInstance.interceptors.request.use(request => {
            request.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            return request;
        });
    }

    public async getAll(): Promise<AxiosResponse<IDummy<IPost[]>>> {
        return await this.axiosInstance.get('/posts');
    }

    public async getById(id: number): Promise<AxiosResponse<IDummy<IPost>>> {
        return await this.axiosInstance.get(`/posts/${id}`);
    }

    public async getAllOfUser(id: number): Promise<AxiosResponse<IDummy<IPost[]>>> {
        return await this.axiosInstance.get(`/users/${id}/posts`);
    }
}

export const postService = new PostService()