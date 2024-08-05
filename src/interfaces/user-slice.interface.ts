import { IUser } from './user.interface';

export type IUserSlice = {
    user: IUser | null,
    users: IUser[],
    isLoaded: boolean
}