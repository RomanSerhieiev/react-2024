const baseURL = 'https://jsonplaceholder.typicode.com/'

const endpoint = {
    posts: '/posts',
    comments: '/comments',
    albums: '/albums',
    photos: '/photos',
    todos: '/todos',
    users: '/users',
}

const url = {
    posts: {
        all: endpoint.posts,
    },
    comments: {
        all: endpoint.comments,
    },
    albums: {
        all: endpoint.albums,
    },
    photos: {
        all: endpoint.photos,
    },
    todos: {
        all: endpoint.todos,
    },
    users: {
        all: endpoint.users,
    }
}

export {
    baseURL,
    url
}