import { ICarResponse } from './car-response.interface';

export interface ICars {
    total_items: number,
    total_pages: number,
    prev: {
        page: string
    } | null,
    next: {
        page: string
    } | null,
    items: ICarResponse[]
}