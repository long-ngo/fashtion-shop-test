const initialState = {
    transparent: false,
    hide: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_HEADER': {
            return {
                ...state,
                hide: action.payload
            };
        }

        case 'OFF_HEADER': {
            return {
                ...state,
                hide: action.payload
            };
        }

        case 'CLEAR_HEADER': {
            return {
                ...state,
                transparent: action.payload
            };
        }

        case 'TRANSPARENT_HEADER': {
            return {
                ...state,
                transparent: action.payload
            };
        }

        default:
            return state;
    }
};

export default headerReducer;
