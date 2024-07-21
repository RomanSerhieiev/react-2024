const baseURL = 'https://rickandmortyapi.com/api'

const endpoint = {
    character: '/character',
    location: '/location',
    episode: '/episode',
}

const url = {
    character: {
        all: endpoint.character,
        byId: (id: string): string => `${endpoint.character}/${id}`,
    },
    location: {
        all: endpoint.location,
        byId: (id: string): string => `${endpoint.location}/${id}`,
    },
    episode: {
        all: endpoint.episode,
        byId: (id: string): string => `${endpoint.episode}/${id}`,
    },
}

export {
    baseURL,
    url
}