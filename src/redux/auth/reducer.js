import { SIGNUP, LOGIN_FAIL, LOGIN_SUCCESS, LOGIN, LOGOUT } from './constants';
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

const initialState = {
    user: null,
    token: null,
    loading: false,
    message: null,
    error: null,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload.user, message: null, error: null };
        case LOGIN_FAIL:
            return { ...state, loading: false, user: null, error: action.payload.error, message: null };
        case LOGOUT:
            localStorage.removeItem('token');
            return { ...state, loading: false, user: null };
        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false, message: action.payload.message, error: null };
        case SIGNUP_ERROR:
            return { ...state, isLoading: false, error: action.payload.error };
        default:
            return state;
    }
}

export default authReducer;
