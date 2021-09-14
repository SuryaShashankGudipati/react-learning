import { ADD_CART, DELETE_CART, CLEAR_CART } from './types'

export const addToCart = productId => dispatch => {
    dispatch({ type: ADD_CART, payload: productId })
}

export const removeFromCart = productId => (dispatch, getState) => {
    const state = getState()
    const cartItems = state.cart.items
    const removeItem = cartItems.filter(x => x != productId)
    dispatch({ type: DELETE_CART, payload: removeItem })
}


export const clearCart = () => dispatch => {
    dispatch({ type: CLEAR_CART })
}