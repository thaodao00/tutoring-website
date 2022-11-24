/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { login } from '~/redux/auth/actions';
import Button from '~/components/Button/Button';
import history from '~/utils/history';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setEmail] = useState("")
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth.user) {
            history.replace('/');
        }
    }, [auth]);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));

    };

    return (
        <div className={cx('container')}>
            <div className={cx('rows')}>
                <div className={cx('col-md-4', 'col-md-offset-4')} style={{ margin: '0 auto' }}>
                    <form className={cx('form-login', 'ng-pristine', 'ng-valid')}>
                        <center>
                            <h4 className={cx('heading-title heading-line-bottom ')}>Đăng nhập tài khoản</h4>
                        </center>
                        <center>
                            <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-red')}>
                                {auth.error}
                            </p>
                        </center>
                        <div>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className={cx('form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ')}
                                placeholder="Email"
                                ng-model="email"
                            ></input>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className={cx('form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ')}
                                placeholder="Mật khẩu"
                                type="password"
                                ng-model="pass"
                            ></input>
                            {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid,
                            jsx-a11y/anchor-is-valid */}
                            <button
                                onClick={handleLogin}
                                className={cx('btn btn-lg btn-block btn-phone ')}
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    marginBottom: '20px',
                                }}
                            >
                                <i className="fas fa-phone"></i> Đăng nhập
                            </button>
                        </div>
                        <div className={cx('register-span')}>
                            <span> Bạn chưa có tài khoản? </span>
                            <Button to="/register" className={cx('text-register')}>
                                Đăng Ký
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
                            <i className="fab fa-facebook-f"></i> Đăng nhập <b>Facebook</b>
                        </button>
                        <button
                            href="#"
                            className={cx('btn btn-lg btn-block btn-google')}
                            style={{
                                backgroundColor: '#DB4437',
                            }}
                        >
                            <i className="fab fa-google"></i> Đăng nhập <b>Google</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
