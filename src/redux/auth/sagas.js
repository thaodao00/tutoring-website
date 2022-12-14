import { call, put, takeEvery } from 'redux-saga/effects';
import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN,
    SIGNUP,
    LOADING,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    UPDATE_INFO_USER_SUCCESS,
    UPDATE_INFO_USER_FAIL,
    UPDATE_INFO_USER,
    GET_USER,
    LOGIN_GOOGLE,
} from './constants';
import {
    loginGoogleService,
    loginService,
    signupService,
    getUserService,
    updatePasswordService,
    forgotPasswordService,
} from './services';

// import history from '~/utils/history';
import RootNavigate from '~/utils/navigate';
import { updateUser } from '~/services/workspaces.sevices';

function* loginSaga(action) {
    const { email, password } = action.payload;
    console.log('login: ', email, '|', password);
    try {
        yield put({ type: LOADING });
        const response = yield call(loginService, email, password);
        console.log(response);
        if (response.status == 1) {
            // lưu token
            localStorage.setItem('token', response.data);

            // lấy thông tin user
            const user = yield call(getUserService);
            yield put({ type: LOGIN_SUCCESS, payload: { user: user.data } });

            RootNavigate.getNavigate()('/');
        } else {
            yield put({ type: LOGIN_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* loginGoogleSaga(action) {
    const { email, name } = action.payload;
    console.log('login: ', email, ' | ', name);
    try {
        yield put({ type: LOADING });
        const response = yield call(loginGoogleService, email, name);
        console.log(response);
        if (response.status == 1) {
            // lưu token
            localStorage.setItem('token', response.data);

            // lấy thông tin user
            const user = yield call(getUserService);
            yield put({ type: LOGIN_SUCCESS, payload: { user: user.data } });

            RootNavigate.getNavigate()('/');
        } else {
            yield put({ type: LOGIN_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* getUserInfoSaga() {
    try {
        // lấy thông tin user
        const user = yield call(getUserService);
        if (user) {
            yield put({ type: LOGIN_SUCCESS, payload: { user: user.data } });
        }
    } catch (error) { }
}
function* updateInfoSaga(action) {
    try {
        const { id, name, gender, phone, birthday, introduce, address } = action.payload;
        const { data, status, message } = yield call(updateUser, { id, name, gender, phone, birthday, introduce, address });
        if (status === 1) {
            yield put({ type: UPDATE_INFO_USER_SUCCESS, payload: { user: data, message: message } });
        } else {
            yield put({ type: UPDATE_INFO_USER_FAIL, payload: { error: message } });
        }
    } catch (error) { }
}
function* signupSaga(action) {
    const { email, name, password } = action.payload;
    console.log('signup: ', email, '|', name, '|', password);
    try {
        yield put({ type: LOADING });
        const response = yield call(signupService, { email, name, password });
        console.log(response);
        if (response.status == 1) {
            yield put({ type: SIGNUP_SUCCESS, payload: { message: response.message } });
        } else {
            yield put({ type: SIGNUP_ERROR, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: SIGNUP_ERROR, payload: { error: 'Vui lòng thử lại' } });
    }
}

function* updatePasswordSaga(action) {
    const { email, otp, password } = action.payload;
    try {
        yield put({ type: LOADING });
        const response = yield call(updatePasswordService, { email, otp, password });
        console.log(response);
        if (response.status == 1) {
            // lưu token
            localStorage.setItem('token', response.data);

            // lấy thông tin email
            const email = yield call(forgotPasswordService);
            yield put({ type: UPDATE_PASSWORD_SUCCESS, payload: { email: email.data } });
        } else {
            yield put({ type: UPDATE_PASSWORD_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: UPDATE_PASSWORD_FAIL, payload: { error: 'Vui lòng thử lại' } });
    }
}

function* forgotPasswordSaga(action) {
    const { email } = action.payload;
    try {
        yield put({ type: LOADING });
        const response = yield call(forgotPasswordService, { email });
        console.log(response);
        if (response.status == 1) {
            yield put({ type: FORGOT_PASSWORD_SUCCESS, payload: { message: response.message } });
        } else {
            yield put({ type: FORGOT_PASSWORD_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: FORGOT_PASSWORD_FAIL, payload: { error: 'Vui lòng thử lại' } });
    }
}

function* authSagas() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(SIGNUP, signupSaga);
    yield takeEvery(GET_USER, getUserInfoSaga);
    yield takeEvery(UPDATE_PASSWORD, updatePasswordSaga);
    yield takeEvery(FORGOT_PASSWORD, forgotPasswordSaga);
    yield takeEvery(UPDATE_INFO_USER, updateInfoSaga);
    yield takeEvery(LOGIN_GOOGLE, loginGoogleSaga);
}

export default authSagas;
