export const onHeader = () => {
    return {
        type: 'ON_HEADER',
        payload: false
    };
};

export const offHeader = () => {
    return {
        type: 'OFF_HEADER',
        payload: true
    };
};

export const clearHeader = () => {
    return {
        type: 'CLEAR_HEADER',
        payload: false
    };
};

export const transparentHeader = () => {
    return {
        type: 'TRANSPARENT_HEADER',
        payload: true
    };
};
