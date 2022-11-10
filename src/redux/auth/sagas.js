import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN } from './constants';

const loginUrl = 'http:localhost:8383/tutor-service/auths/login';

function signupApi(email, password) {
    return (
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            // .then(handleApiErrors)
            .then((response) => response.json())
            .then((json) => json)
            .catch((error) => {
                throw error;
            })
    );
}

function* loginSaga(action) {
    const { email, password } = action.payload;
    console.log('login: ', email, '|', password);
    try {
        const response = yield call(signupApi, email, password);
        console.log(response);
        if (response.status == 1) {
            // lấy thông tin user
        }
        yield put({ type: LOGIN_SUCCESS, payload: { user: email } });
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* authSagas() {
    yield takeEvery(LOGIN, loginSaga);
}

export default authSagas;
