import { ALL_PRODUCTS } from './types'

import { products } from './data'

export const getAllProducts = () => dispatch => {
    dispatch({ type: ALL_PRODUCTS, payload: products })
}