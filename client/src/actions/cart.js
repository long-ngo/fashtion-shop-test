export const addCart = (cart) => {
    return {
        type: 'ADD_CART',
        payload: cart,
    };
};

export const removeCart = (id) => {
    return {
        type: 'REMOVE_CART',
        payload: id,
    };
};
