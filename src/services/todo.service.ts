import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ITodo } from '../interfaces/todo.interface';
import { IRes } from '../types/axios-response.type';

export const todoService = {
    getAll: (): IRes<ITodo[]> => apiService.get<ITodo[]>(url.todos.all),
    getById: (id: string): IRes<ITodo> => apiService.get<ITodo>(url.todos.byId(id)),
    getByUser: (userId: string): IRes<ITodo[]> => apiService.get<ITodo[]>(url.todos.byUser(userId)),
}