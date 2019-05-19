import initialState from '../store/initialState';

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'TOGGLE_NAV':
            if (state.navToggle) {
                return {
                    ...state,
                    navToggle: false
                }
            }
            return {
                ...state,
                navToggle: true
            };
        default:
            return state;
    }
};
