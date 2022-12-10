import {
    FORGOT_PASSWORD,
    GET_USER,
    LOGIN,
    LOGOUT,
    RESET_MESSAGE,
    SIGNUP,
    UPDATE_INFO_USER,
    UPDATE_PASSWORD,
} from './constants';

export function login(email, password) {
    return {
        type: LOGIN,
        payload: { email, password },
    };
}

export function getUserInfo() {
    return {
        type: GET_USER,
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

export function updatePassword(email, otp, password) {
    return {
        type: UPDATE_PASSWORD,
        payload: { email, otp, password },
    };
}

export function forgotPassword(email) {
    return {
        type: FORGOT_PASSWORD,
        payload: { email },
    };
}

export function updateInfoUser(id, name, gender, phone, birthday, introduce, address) {
    return {
        type: UPDATE_INFO_USER,
        payload: { id, name, gender, phone, birthday, introduce, address },
    };
}
export function logout() {
    return {
        type: LOGOUT,
    };
}
