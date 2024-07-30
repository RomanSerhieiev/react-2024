import axios from 'axios';
import { baseURL, url } from '../constants/urls';
import { tokenPair } from '../constants/token-pair';
import { retrieveLocalStorageData } from '../helpers/retrieve-local-storage-data.helper';
import { IToken } from '../interfaces/token.interface';

export const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {
    if (localStorage.getItem(tokenPair) && (request.url !== url.auth.refresh || request.url !== url.auth.base)) {
        request.headers.set('Authorization', `Bearer ${retrieveLocalStorageData<IToken>(tokenPair).access}`);
    }

    return request;
})