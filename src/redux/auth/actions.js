import {
    FORGOT_PASSWORD,
    GET_USER,
    LOGIN,
    LOGOUT,
    RESET_MESSAGE,
    SIGNUP,
    UPDATE_INFO_USER,
    UPDATE_PASSWORD,
    LOGIN_GOOGLE,
} from './constants';

export function login(email, password) {
    return {
        type: LOGIN,
        payload: { email, password },
    };
}

export function login_google(email, name) {
    return {
        type: LOGIN_GOOGLE,
        payload: { email, name },
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

export function updateInfoUser(id, name, gender, phone, birthday, introduce) {
    return {
        type: UPDATE_INFO_USER,
        payload: { id, name, gender, phone, birthday, introduce },
    };
}
export function logout() {
    return {
        type: LOGOUT,
    };
}
