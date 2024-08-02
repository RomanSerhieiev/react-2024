import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ITodo } from '../interfaces/todo.interface';
import { IRes } from '../types/axios-response';

export const todoService = {
    getAll: (): IRes<ITodo[]> => apiService.get<ITodo[]>(url.todos.all),
}