const initialState = {
    index: { navToggle: true },
    auth: {
        user: {},
        loading: false,
        error: null,
        loggedIn: false
    },
    profile: {
        user: {},
        loading: false,
        error: null,
    }
};

export default initialState;
