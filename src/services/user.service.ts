import { IUser } from '../interfaces/IUser';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '../components/axios/axios.instance';
import { IDummyJson } from '../interfaces/IDummyJson';

axiosInstance.interceptors.request.use(request => {
    request.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    return request;
})

const getUsers = async (): Promise<AxiosResponse<IDummyJson<IUser[]>>> => {
    return await axiosInstance.get('/users')
};

const getUserById = async (id: number): Promise<AxiosResponse<IDummyJson<IUser>>> => {
    return await axiosInstance.get(`/users/${id}`)
};

export {
    getUsers,
    getUserById
}