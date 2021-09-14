import { configureStore } from '@reduxjs/toolkit';

import products from './products/reducer';
import auth from './auth/reducer'
import cart from './cart/reducer'

export default configureStore({
    reducer: {
        products,
        auth,
        cart
    },
});


