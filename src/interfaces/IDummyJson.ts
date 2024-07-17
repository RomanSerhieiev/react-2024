export interface IDummyJson<T> {
    limit: number,
    skip: number,
    total: number,
    users: T,
    posts: T
}