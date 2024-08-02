const baseURL = 'https://jsonplaceholder.typicode.com'

const endpoint = {
    posts: '/posts',
    users: '/users',
}

const url = {
    posts: {
        all: endpoint.posts
    },
    users: {
        all: endpoint.users
    }
}

export {
    baseURL,
    url
}