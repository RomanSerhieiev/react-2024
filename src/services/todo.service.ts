import { apiService } from './api.service';
import { url } from '../constants/urls';
import { ITodo } from '../interfaces/todo.interface';
import { IAxiosResponse } from '../types/axios-response';

export const todoService = {
    getAll: (): IAxiosResponse<ITodo[]> => apiService.get<ITodo[]>(url.todos.all),
};