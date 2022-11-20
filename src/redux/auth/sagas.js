import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN, SIGNUP, LOADING } from './constants';
import { loginService, signupService, getUserService } from './services';

import history from '~/utils/history';

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
            history.back();
        } else {
            yield put({ type: LOGIN_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
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

function* authSagas() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(SIGNUP, signupSaga);
}

export default authSagas;
