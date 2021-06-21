import { combineReducers } from 'redux';
import cartReducer from './cart';
import headerReducer from './header';
import footerReducer from './footer';

const rootReducer = combineReducers({
    cart: cartReducer,
    header: headerReducer,
    footer: footerReducer
});

export default rootReducer;
