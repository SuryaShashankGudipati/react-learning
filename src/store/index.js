import { configureStore } from '@reduxjs/toolkit';

import products from './products/reducer';
import auth from './auth/reducer'

export default configureStore({
    reducer: {
        products,
        auth
    },
});


