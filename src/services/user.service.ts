import IUser from '../model/IUser';
import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
})

axiosInstance.interceptors.request.use(interceptedRequest => {
    interceptedRequest.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    return interceptedRequest;
})

const getUsers = async (): Promise<AxiosResponse<IUser[]>> => {
    return await axiosInstance('/users')
};

const getUserById = async (id: number): Promise<AxiosResponse<IUser>> => {
    return await axiosInstance(`/users/${id}`)
};

export {
    getUsers,
    getUserById
}