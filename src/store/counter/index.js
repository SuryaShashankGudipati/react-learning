import { setAutoFreeze } from '@reduxjs/toolkit/node_modules/immer'
import { useSelector, useDispatch } from 'react-redux'


export default function counter(state = { value: 0, dinesh: "dinesh kurella" }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            return state
    }
}
