import { SIGNUP, LOGIN_FAIL, LOGIN_SUCCESS, LOGIN, LOGOUT } from './constants';

const initialState = {
    user: null,
    token: null,
    loading: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload.user, token: action.payload.token };
        case LOGIN_FAIL:
            return { ...state, loading: false, user: null };
        case LOGOUT:
            localStorage.removeItem('token');
            return { ...state, loading: false, user: null };
        default:
            return state;
    }
}

export default authReducer;
