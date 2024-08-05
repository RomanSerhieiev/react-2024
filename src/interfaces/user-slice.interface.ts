import { IUser } from './user.interface';

export type IUserSlice = {
    users: IUser[],
    isLoaded: boolean
}