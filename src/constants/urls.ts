const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const endpoint = {
    auth: '/auth',
    cars: '/cars',
    users: '/users',
    me: '/me',
    refresh: '/refresh',
    photo: '/photo'
}

const url = {
    auth: {
        base: endpoint.auth,
        me: `${endpoint.auth}${endpoint.me}`,
        refresh: `${endpoint.auth}${endpoint.refresh}`,
    },
    cars: {
        all: endpoint.cars,
        byId: (id: string): string => `${endpoint.cars}/${id}`,
        photoById: (id: string): string => `${endpoint.cars}/${id}${endpoint.photo}`,
    },
    users: {
        all: endpoint.users,
    }
}

export {
    baseURL,
    url
}