const baseURL = 'https://jsonplaceholder.typicode.com/'

const endpoints = {
    posts: '/posts',
    comments: '/comments',
    albums: '/albums',
    photos: '/photos',
    todos: '/todos',
    users: '/users',
}

const urls = {
    posts: {
        all: endpoints.posts,
        byId: (id: number): string => `${endpoints.posts}/${id}`,
        byUser: (userId: number): string => `${endpoints.users}/${userId}${endpoints.posts}`,
    },
    comments: {
        all: endpoints.comments,
        byId: (id: number): string => `${endpoints.comments}/${id}`,
        byPost: (postId: number): string => `${endpoints.posts}/${postId}${endpoints.comments}`,
    },
    albums: {
        all: endpoints.albums,
        byId: (id: number): string => `${endpoints.albums}/${id}`,
        byUser: (userId: number): string => `${endpoints.users}/${userId}${endpoints.albums}`
    },
    photos: {
        all: endpoints.photos,
        byId: (id: number): string => `${endpoints.photos}/${id}`,
        byAlbum: (albumId: number): string => `${endpoints.albums}/${albumId}${endpoints.photos}`
    },
    todos: {
        all: endpoints.todos,
        byId: (id: number): string => `${endpoints.todos}/${id}`,
        byUser: (userId: number): string => `${endpoints.users}/${userId}${endpoints.todos}`
    },
    users: {
        all: endpoints.users,
        byId: (id: number): string => `${endpoints.users}/${id}`
    }
}

export {
    baseURL,
    urls
}