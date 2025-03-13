const Setting = {
    rentOffersCount: 312,
} as const;

export {Setting};

const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer',
    NotFound: '*',
} as const;
export {AppRoute}

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
} as const;

export {AuthorizationStatus}