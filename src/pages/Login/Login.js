/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { login, login_google, reset } from '~/redux/auth/actions';
import Button from '~/components/Button/Button';
import history from '~/utils/history';
import LoadingOverlay from 'react-loading-overlay';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RootNavigator from '~/utils/navigate';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from '~/utils/refreshTokenSetup';
import { gapi } from 'gapi-script';

const cx = classNames.bind(styles);

const clientId = '99864235626-n4b9hi03i9a1k855bu5q0mdu6dbm4sbm.apps.googleusercontent.com';

function Login() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setEmail] = useState("")
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    RootNavigator.setNavigate(navigate);
    useEffect(() => {
        dispatch(reset());
        // d.signOut();
        // signOut();
    }, []);
    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess: () => {
            console.log('logout true');
        },
        onFailure: () => {
            console.log('logout false');
        },
    });

    useEffect(() => {
        if (auth.user) {
            navigate('/');
        }
    }, [auth]);

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: clientId,
            });
        });
    }, []);

    const handleLogin = () => {
        dispatch(login(email, password));
    };

    const onSuccess = (res) => {
        console.log('????ng nh???p th??nh c??ng', res.profileObj);
        refreshTokenSetup(res);
        dispatch(login_google(res.profileObj.email, res.profileObj.name));
    };

    const onFailure = (res) => {
        console.log('????ng nh???p kh??ng th??nh c??ng', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        // isSignedIn: true,
    });

    return (
        <LoadingOverlay active={auth.loading} spinner text="??ang ????ng nh???p">
            <div className={cx('container')}>
                <div className={cx('rows')}>
                    <div
                        className={cx('col-md-4', 'col-md-offset-4', 'bg-white')}
                        style={{ margin: '0 auto', backgroundColor: 'white' }}
                    >
                        <div className={cx('form-login', 'ng-pristine', 'ng-valid')}>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <center>
                                    <h4 className={cx('heading-title heading-line-bottom ')}>????ng nh???p t??i kho???n</h4>
                                </center>
                                <center>
                                    <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-red')}>
                                        {auth.error}
                                    </p>
                                </center>
                                <div>
                                    <input
                                        onInput={(e) => setEmail(e.target.value)}
                                        className={cx(
                                            'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                        )}
                                        placeholder="Email"
                                        ng-model="email"
                                        name="email"
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                        })}
                                    ></input>
                                    <div className={cx('error')}>
                                        <error className={cx('text-error')}>
                                            {errors.email?.type === 'required' && 'Email l?? b???t bu???c'}
                                            {errors.email?.type === 'pattern' && 'Email sai ?????nh d???ng'}
                                        </error>
                                    </div>
                                    <input
                                        onInput={(e) => setPassword(e.target.value)}
                                        className={cx(
                                            'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                        )}
                                        placeholder="M???t kh???u"
                                        type="password"
                                        ng-model="pass"
                                        name="password"
                                        {...register('password', {
                                            required: true,
                                            minLength: 3,
                                            maxLength: 20,
                                        })}
                                    ></input>
                                    <div className={cx('error')}>
                                        <error className={cx('text-error')}>
                                            {errors.password?.type === 'required' && 'M???t kh???u l?? b???t bu???c'}
                                            {errors.password?.type === 'minLength' && 'M???t kh???u kh??ng nh??? h??n 3 k?? t???'}
                                            {errors.password?.type === 'maxLength' && 'M???t kh???u kh??ng l???n h??n 20 k?? t???'}
                                        </error>
                                    </div>
                                    {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid,
                            jsx-a11y/anchor-is-valid */}
                                    <button
                                        type="submit"
                                        className={cx('btn btn-lg btn-block btn-phone ')}
                                        style={{
                                            backgroundColor: 'var(--primary)',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        <i className="fas fa-phone"></i> ????ng nh???p
                                    </button>
                                </div>
                                <div className={cx('forgot-span')}>
                                    <Button to="/forgotPassword" className={cx('text-forgot')}>
                                        Qu??n m???t kh???u?
                                    </Button>
                                </div>
                                <div className={cx('register-span')}>
                                    <span> B???n ch??a c?? t??i kho???n? </span>
                                    <Button to="/register" className={cx('text-register')}>
                                        ????ng K??
                                    </Button>
                                </div>

                                <div className={cx('hr-empty')}></div>
                                <button
                                    href="#"
                                    className={cx('btn btn-lg btn-block btn-facebook')}
                                    style={{
                                        backgroundColor: '#3C5A99',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <i className="fab fa-facebook-f"></i> ????ng nh???p <b>Facebook</b>
                                </button>
                            </form>
                            <button
                                onClick={signIn}
                                className={cx('btn btn-lg btn-block btn-google')}
                                style={{
                                    backgroundColor: '#DB4437',
                                }}
                            >
                                <i className="fab fa-google"></i> ????ng nh???p <b>Google</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
}

export default Login;
