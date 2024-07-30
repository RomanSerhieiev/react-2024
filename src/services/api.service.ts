import axios from 'axios';
import { baseURL, url } from '../constants/urls';
import { retrieveLocalStorageData } from '../helpers/retrieve-local-storage-data.helper';
import { IToken } from '../interfaces/token.interface';
import { EKey } from '../enums/local-storage-keys.enum';

export const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {
    if (localStorage.getItem(EKey.tokenPair) && (request.url !== url.auth.refresh || request.url !== url.auth.base)) {
        request.headers.set('Authorization', `Bearer ${retrieveLocalStorageData<IToken>(EKey.tokenPair).access}`);
    }

    return request;
})