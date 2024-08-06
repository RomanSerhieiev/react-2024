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
        byId: (id: string): string => `${endpoint.posts}/${id}`,
        byUser: (userId: string): string => `${endpoint.users}/${userId}${endpoint.posts}`,
    },
    comments: {
        all: endpoint.comments,
        byId: (id: string): string => `${endpoint.comments}/${id}`,
        byPost: (postId: string): string => `${endpoint.posts}/${postId}${endpoint.comments}`,
    },
    albums: {
        all: endpoint.albums,
        byId: (id: string): string => `${endpoint.albums}/${id}`,
        byUser: (userId: string): string => `${endpoint.users}/${userId}${endpoint.albums}`
    },
    photos: {
        all: endpoint.photos,
        byId: (id: string): string => `${endpoint.photos}/${id}`,
        byAlbum: (albumId: string): string => `${endpoint.albums}/${albumId}${endpoint.photos}`
    },
    todos: {
        all: endpoint.todos,
        byId: (id: string): string => `${endpoint.todos}/${id}`,
        byUser: (userId: string): string => `${endpoint.users}/${userId}${endpoint.todos}`
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