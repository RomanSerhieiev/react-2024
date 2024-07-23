import axios from 'axios';
import { baseURL, url } from '../constants/urls';
import { tokenPair } from '../constants/tokenPair';
import { retrieveLocalStorageData } from '../helpers/retrieveLocalStorageData';
import { IToken } from '../interfaces/token.interface';

export const apiService = axios.create({baseURL});

apiService.interceptors.request.use((req) => {
    if (localStorage.getItem(tokenPair) && req.url !== url.auth.refresh) {
        req.headers.set('Authorization', `Bearer ${retrieveLocalStorageData<IToken>(tokenPair).access}`);
    }

    return req;
})