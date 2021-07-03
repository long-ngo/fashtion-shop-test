export const addCart = (cart) => {
    return {
        type: 'ADD_CART',
        payload: cart
    };
};

export const removeCart = (id) => {
    return {
        type: 'REMOVE_CART',
        payload: id
    };
};

export const editCart = (id, product) => {
    return {
        type: 'EDIT_CART',
        payload: {
            id,
            product
        }
    };
};

export const editCountCart = (id, count) => {
    return {
        type: 'EDIT_COUNT_CART',
        payload: {
            id,
            count
        }
    };
};
