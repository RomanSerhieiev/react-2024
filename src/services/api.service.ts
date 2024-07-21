import axios from 'axios';
import { baseURL } from '../constants/url';

export const apiService = axios.create({
    baseURL,
    headers: {}
})