import { IPost } from '../interfaces/IPost';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '../components/axios/axios.instance';
import { IDummyJson } from '../interfaces/IDummyJson';

axiosInstance.interceptors.request.use(request => {
    request.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    return request;
})

const getPosts = async (): Promise<AxiosResponse<IDummyJson<IPost[]>>> => {
    return await axiosInstance.get('/posts')
};

const getPostById = async (id: number): Promise<AxiosResponse<IDummyJson<IPost>>> => {
    return await axiosInstance.get(`/posts/${id}`)
};

const getPostsOfUser = async (id: number): Promise<AxiosResponse<IDummyJson<IPost[]>>> => {
    return await axiosInstance.get(`/users/${id}/posts`)
};

export {
    getPosts,
    getPostById,
    getPostsOfUser
}