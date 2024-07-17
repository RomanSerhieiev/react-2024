import IUser from '../models/IUser';
import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
})

axiosInstance.interceptors.request.use(request => {
    request.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    return request;
})

const getUsers = async (): Promise<AxiosResponse<IUser[]>> => {
    return await axiosInstance.get('/users')
};

const getUserById = async (id: number): Promise<AxiosResponse<IUser>> => {
    return await axiosInstance.get(`/users/${id}`)
};

export {
    getUsers,
    getUserById
}