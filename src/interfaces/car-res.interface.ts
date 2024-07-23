import { ICar } from './car.interface';

export interface ICarRes {
    total_items: number;
    total_pages: number;
    prev: {
        page: string
    } | null;
    next: {
        page: string
    } | null;
    items: ICar[];
}