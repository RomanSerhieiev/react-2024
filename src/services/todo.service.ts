import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ITodo } from '../interfaces/todo.interface';

export const todoService = {
    getAll: async (): Promise<ITodo[]> => {
        const {data} = await apiService.get<ITodo[]>(url.todos.all);
        return data;
    },
    getById: async (id: string): Promise<ITodo> => {
        const {data} = await apiService.get<ITodo>(url.todos.byId(id));
        return data;
    },
    getByUser: async (userId: string): Promise<ITodo[]> => {
        const {data} = await apiService.get<ITodo[]>(url.todos.byUser(userId));
        return data;
    },
};