import { IS_LOGIN } from './types'

export const getLogin = (user, pwd) => dispatch => {
    console.log(user, pwd)
    dispatch({ type: IS_LOGIN, payload: true })
}