import { ADD_CART, DELETE_CART, CLEAR_CART } from './types'

export default function proudcts(state = { items: [] }, action) {
    switch (action.type) {
        case ADD_CART:
            return { ...state, items: [...state.items, action.payload] }
        case DELETE_CART:
            return { ...state, items: action.payload }
        case CLEAR_CART:
            return { ...state, items: [] }
        default:
            return state
    }
}
