import axios, { AxiosResponse } from 'axios';
import { IPost } from '../model/IPost';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
})

const getPosts = async (): Promise<AxiosResponse<IPost[]>> => {
    return await axiosInstance('/posts')
};

const getPostsOfUser = async (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return await axiosInstance(`/posts?userId=${userId}`)
};

const getPostById = async (id: number): Promise<AxiosResponse<IPost>> => {
    return await axiosInstance(`/posts/${id}`)
};

export {
    getPosts,
    getPostById,
    getPostsOfUser
}