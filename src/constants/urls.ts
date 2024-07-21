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
        byId: (id: string): string => `${endpoints.posts}/${id}`,
        byUser: (userId: string): string => `${endpoints.users}/${userId}${endpoints.posts}`,
    },
    comments: {
        all: endpoints.comments,
        byId: (id: string): string => `${endpoints.comments}/${id}`,
        byPost: (postId: string): string => `${endpoints.posts}/${postId}${endpoints.comments}`,
    },
    albums: {
        all: endpoints.albums,
        byId: (id: string): string => `${endpoints.albums}/${id}`,
        byUser: (userId: string): string => `${endpoints.users}/${userId}${endpoints.albums}`
    },
    photos: {
        all: endpoints.photos,
        byId: (id: string): string => `${endpoints.photos}/${id}`,
        byAlbum: (albumId: string): string => `${endpoints.albums}/${albumId}${endpoints.photos}`
    },
    todos: {
        all: endpoints.todos,
        byId: (id: string): string => `${endpoints.todos}/${id}`,
        byUser: (userId: string): string => `${endpoints.users}/${userId}${endpoints.todos}`
    },
    users: {
        all: endpoints.users,
        byId: (id: string): string => `${endpoints.users}/${id}`
    }
}

export {
    baseURL,
    urls
}