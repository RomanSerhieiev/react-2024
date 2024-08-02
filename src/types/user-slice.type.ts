import { IUser } from '../interfaces/user.interface';

export type TUserSlice = {
    users: IUser[],
    isLoaded: boolean
}