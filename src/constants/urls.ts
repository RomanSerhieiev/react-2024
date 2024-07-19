const baseURL = 'https://dummyjson.com'

const users = '/users'
const posts = '/posts'

const urls = {
    users: {
        all: users,
    },
    posts: {
        byUserPosts: (userId: number): string => `${users}/${userId}${posts}`
    }
}

export {
    baseURL,
    urls
}