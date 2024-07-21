import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ITodo } from '../interfaces/todo.interface';
import { AxiosResponse } from 'axios';

export const todoService = {
    getAll: async (): Promise<AxiosResponse<ITodo[]>> => await apiService.get<ITodo[]>(url.todos.all),
    getById: async (id: string): Promise<AxiosResponse<ITodo>> => await apiService.get<ITodo>(url.todos.byId(id)),
    getByUser: async (userId: string): Promise<AxiosResponse<ITodo[]>> => await apiService.get<ITodo[]>(url.todos.byUser(userId)),
}