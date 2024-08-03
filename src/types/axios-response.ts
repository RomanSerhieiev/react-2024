import { AxiosResponse } from 'axios';

export type IAxiosResponse<T> = Promise<AxiosResponse<T>>