import axios from 'axios';
import { baseURL } from '../constants/urls';

export const apiService = axios.create({
    baseURL,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});