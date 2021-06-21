const initialState = {
    hide: false
};

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_FOOTER': {
            return {
                ...state,
                hide: action.payload
            };
        }

        case 'OFF_FOOTER': {
            return {
                ...state,
                hide: action.payload
            };
        }

        default:
            return state;
    }
};

export default footerReducer;
