/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('rows')}>
                <div className={cx('col-md-4', 'col-md-offset-4')}>
                    <form className={cx('form-login', 'ng-pristine', 'ng-valid')}>
                        <center>
                            <h4 className={cx('heading-title heading-line-bottom ')}>Đăng nhập tài khoản</h4>
                        </center>
                        <div>
                            <input
                                className={cx('form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ')}
                                placeholder="Số điện thoại"
                                ng-model="phone"
                            ></input>
                            <input
                                className={cx('form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ')}
                                placeholder="Mật khẩu"
                                type="password"
                                ng-model="pass"
                            ></input>
                            {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid,
                            jsx-a11y/anchor-is-valid */}
                            <a
                                href="#"
                                className={cx('btn btn-lg btn-block btn-phone ')}
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    marginBottom: '20px',
                                }}
                            >
                                <i className="fas fa-phone"></i> Đăng nhập
                            </a>
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
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
