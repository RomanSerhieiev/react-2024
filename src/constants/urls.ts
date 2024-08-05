const baseURL = 'https://jsonplaceholder.typicode.com'

const endpoint = {
    posts: '/posts',
    users: '/users',
}

const url = {
    posts: {
        all: endpoint.posts,
        byId: (id: string): string => `${endpoint.posts}/${id}`,
    },
    users: {
        all: endpoint.users,
        byId: (id: string): string => `${endpoint.users}/${id}`
    }
}

export {
    baseURL,
    url
}