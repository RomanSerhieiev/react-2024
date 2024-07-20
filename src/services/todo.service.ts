import { apiService } from './api.service';
import { urls } from '../constants/urls';
import { ITodo } from '../interfaces/todo.interface';

export const todoService = {
    getAll: async () => await apiService.get<ITodo[]>(urls.todos.all),
    getById: async (id: number) => await apiService.get<ITodo>(urls.todos.byId(id)),
    getByUser: async (userId: number) => await apiService.get<ITodo[]>(urls.todos.byUser(userId)),
    create: async (todo: Partial<ITodo>) => await apiService.post<Partial<ITodo>>(urls.todos.all, todo),
}