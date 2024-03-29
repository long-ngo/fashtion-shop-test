const initialState = {
    list: localStorage.getItem('carts')
        ? JSON.parse(localStorage.getItem('carts'))
        : [],
    activeId: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART': {
            if (!localStorage.getItem('carts')) {
                localStorage.setItem('carts', '[]');
            }

            let carts = JSON.parse(localStorage.getItem('carts'));
            let flag = false;

            carts = carts.map((cart) => {
                if (cart._id === action.payload._id) {
                    cart.count += action.payload.count;
                    flag = true;
                }
                return cart;
            });

            let newList = flag ? [...carts] : [...carts, action.payload];

            localStorage.setItem('carts', JSON.stringify(newList));

            return {
                ...state,
                list: newList
            };
        }

        case 'REMOVE_CART': {
            let carts = JSON.parse(localStorage.getItem('carts'));
            const newList = carts.filter((cart) => cart._id !== action.payload);
            localStorage.setItem('carts', JSON.stringify(newList));

            return {
                ...state,
                list: newList
            };
        }

        case 'EDIT_COUNT_CART': {
            let carts = JSON.parse(localStorage.getItem('carts'));
            const newList = carts.map((cart) => {
                if (cart._id === action.payload.id) {
                    cart.count = action.payload.count;
                }
                return cart;
            });
            localStorage.setItem('carts', JSON.stringify(newList));

            return {
                ...state,
                list: newList
            };
        }

        case 'EDIT_CART': {
            let carts = JSON.parse(localStorage.getItem('carts'));

            const newList = carts.map((cart) => {
                if (cart._id === action.payload.id) {
                    cart.name = action.payload.product.name;
                    cart.price = action.payload.product.price;
                    cart.discount = action.payload.product.discount;
                    cart.stock = action.payload.product.stock;
                    cart.image = action.payload.product.image;
                    cart.description = action.payload.product.description;
                }
                return cart;
            });

            localStorage.setItem('carts', JSON.stringify(newList));

            return {
                ...state,
                list: newList
            };
        }

        default:
            return state;
    }
};

export default cartReducer;
