import api from '~/utils/axios';

export const loginService = async (email, password) =>
    await api
        .post('/v1/auths/login', { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((e) => e.response?.data);

export const signupService = async (data) =>
    await api
        .post('/v1/auths/register', data)
        .then((res) => {
            return res.data;
        })
        .catch((e) => e.response?.data);

export const getUserService = async () =>
    await api
        .get('/v1/auths/user')
        .then((res) => {
            return res.data;
        })
        .catch((e) => e.response?.message);
