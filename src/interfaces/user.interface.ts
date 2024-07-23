export interface IUser {
    id?: number,
    username: string,
    password: string,
    is_active?: boolean,
    is_staff?: boolean,
    is_superuser?: boolean,
    last_login?: string,
    created?: string,
    updated?: string
}