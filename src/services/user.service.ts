import IUser from '../model/IUser';
import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
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