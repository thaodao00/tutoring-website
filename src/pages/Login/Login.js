/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { login } from '~/redux/auth/actions';
const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setEmail] = useState("")
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(auth);
    }, [auth]);

    const handleLogin = () => {
        dispatch(login(email, password));
    };

    return (
        <div className={cx('container')}>
            <div className={cx('rows')}>
                <div className={cx('col-md-4', 'col-md-offset-4')}>
                    {/* <form className={cx('form-login', 'ng-pristine', 'ng-valid')} > */}
                    <center>
                        <h4 className={cx('heading-title heading-line-bottom ')}>Đăng nhập tài khoản</h4>
                    </center>
                    <div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className={cx('form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ')}
                            placeholder="Số điện thoại"
                            ng-model="phone"
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
                            {/* <i className="fas fa-phone"></i> Đăng nhập */}
                        </button>
                    </div>
                    <div className={cx('hr-empty')}></div>
                    <a
                        href="#"
                        className={cx('btn btn-lg btn-block btn-facebook')}
                        style={{
                            backgroundColor: '#3C5A99',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fab fa-facebook-f"></i> Đăng nhập <b>Facebook</b>
                    </a>
                    <a
                        href="#"
                        className={cx('btn btn-lg btn-block btn-google')}
                        style={{
                            backgroundColor: '#DB4437',
                        }}
                    >
                        <i className="fab fa-google"></i> Đăng nhập <b>Google</b>
                    </a>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}

export default Login;
