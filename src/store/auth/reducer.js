import { IS_LOGIN } from './types'

export default function auth(state = { isLoggged: true }, action) {
    switch (action.type) {
        case IS_LOGIN:
            return { ...state, isLoggged: action.payload }
        default:
            return state
    }
}
