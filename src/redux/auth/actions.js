import { LOGIN, LOGOUT, RESET_MESSAGE, SIGNUP } from './constants';

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
export function reset() {
    return {
        type: RESET_MESSAGE,
    };
}

export function logout() {
    return {
        type: LOGOUT,
    };
}
