const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const endpoint = {
    auth: '/auth',
    me: '/me',
    refresh: '/refresh',
    cars: '/cars',
    photo: '/photo',
    users: '/users'
}

const url = {
    auth: {
        base: endpoint.auth,
        me: `${endpoint.auth}${endpoint.me}`,
        refresh: `${endpoint.auth}${endpoint.refresh}`,
    },
    cars: {
        base: endpoint.cars,
        byId: (id: string): string => `${endpoint.cars}/${id}`,
        photoById: (id: string): string => `${endpoint.cars}/${id}${endpoint.photo}`,
    },
    users: {
        base: endpoint.users,
    }
}

export {
    baseURL,
    url
}