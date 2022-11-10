import { LOGIN, SIGNUP } from './constants';

export function login(email, password) {
    return {
        type: LOGIN,
        payload: { email, password },
    };
}

export function signup(email, name, password) {
    return {
        type: SIGNUP,
        payload: { email, name, password },
    };
}
