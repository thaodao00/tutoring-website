import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN } from './constants';
import { loginService, getUserService } from './services';

import history from '~/utils/history';

function* loginSaga(action) {
    const { email, password } = action.payload;
    console.log('login: ', email, '|', password);
    try {
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
            yield put({ type: LOGIN_FAIL });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* authSagas() {
    yield takeEvery(LOGIN, loginSaga);
}

export default authSagas;
