import IUser from '../model/IUser';
import { urls } from '../constants/urls';

const getUsers = async (): Promise<IUser[]> => {
    return await fetch(urls.users)
        .then(value => value.json())
};

const getUserById = async (id: number): Promise<IUser[]> => {
    return await fetch(`${urls.users}/${id}`)
        .then(value => value.json())
};

export {
    getUsers,
    getUserById
}