import axios, { AxiosResponse } from 'axios';
import { IPost } from '../models/IPost';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
})

axiosInstance.interceptors.request.use(request => {
    request.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    return request;
})

const getPosts = async (): Promise<AxiosResponse<IPost[]>> => {
    return await axiosInstance('/posts')
};

const getPostsOfUser = async (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return await axiosInstance.get(`/posts?userId=${userId}`)
};

const getPostById = async (id: number): Promise<AxiosResponse<IPost>> => {
    return await axiosInstance.get(`/posts/${id}`)
};

export {
    getPosts,
    getPostById,
    getPostsOfUser
}