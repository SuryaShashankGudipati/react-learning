import { ALL_PRODUCTS } from './types'

export default function proudcts(state = { allProducts: [] }, action) {
    switch (action.type) {
        case ALL_PRODUCTS:
            return { ...state, allProducts: action.payload }
        default:
            return state
    }
}
