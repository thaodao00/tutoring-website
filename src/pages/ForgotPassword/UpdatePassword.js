import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './UpdatePassword.module.scss';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '~/utils/axios';
import LoadingOverlay from 'react-loading-overlay';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useSelector } from 'react-redux';
import RootNavigator from '~/utils/navigate';

const cx = classNames.bind(styles);

function UpdatePassword(props) {
    const navigate = useNavigate();
    RootNavigator.setNavigate(navigate);
    const location = useLocation();
    const { email } = location.state;
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm();
    const auth = useSelector((state) => state.auth);
    const [codeOTP, setCodeOTP] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (auth.user) {
            navigate('/');
        }
    }, [auth]);

    const handleForgotPass = async () => {
        setLoading(true);
        setMessage(null);
        await api
            .post('v1/auths/forgot-password/', { email, password, otp: parseInt(codeOTP) })
            .then((res) => {
                return res.data;
            })
            .then((res) => {
                setMessage(res.message);
                if (res.status == 1) {
                    NotificationManager.success('Đã cập nhật mật khẩu mới');
                } else {
                    NotificationManager.error(res.message);
                }
            })
            .catch((e) => setMessage(e.response?.message));

        setLoading(false);
    };

    return (
        <LoadingOverlay active={loading} spinner text="Vui lòng chờ">
            <div className={cx('container')}>
                <div className={cx('rows')}>
                    <div className={cx('col-md-4', 'col-md-offset-4')} style={{ margin: '0 auto' }}>
                        <form
                            className={cx('form-login', 'ng-pristine', 'ng-valid')}
                            onSubmit={handleSubmit(handleForgotPass)}
                        >
                            <center>
                                <h4 className={cx('heading-title heading-line-bottom ')}>Cập nhật mật khẩu mới</h4>
                            </center>
                            <div>
                                <input
                                    onInput={(e) => setCodeOTP(e.target.value)}
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Nhập mã OTP"
                                    ng-model="text"
                                    name="codeOTP"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    {...register('codeOTP', {
                                        required: true,
                                    })}
                                ></input>
                                <div className={cx('error')}>
                                    <error className={cx('text-error')}>
                                        {errors.codeOTP?.type === 'required' && 'Mã OTP là bắt buộc'}
                                    </error>
                                </div>
                                <input
                                    onInput={(e) => setPassword(e.target.value)}
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Mật khẩu"
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
                                        {errors.password?.type === 'required' && 'Mật khẩu là bắt buộc'}
                                        {errors.password?.type === 'minLength' && 'Mật khẩu không nhỏ hơn 3 ký tự'}
                                        {errors.password?.type === 'maxLength' && 'Mật khẩu không lớn hơn 20 ký tự'}
                                    </error>
                                </div>
                                <input
                                    name="confirmPassword"
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Nhập lại mật khẩu"
                                    type="password"
                                    ng-model="pass"
                                    {...register('confirmPassword', {
                                        required: 'true',
                                        minLength: 3,
                                        maxLength: 20,
                                        validate: (value) => value === getValues('password'),
                                    })}
                                ></input>
                                <div className={cx('error')}>
                                    <error className={cx('text-error')}>
                                        {errors.confirmPassword?.type === 'required' && 'Vui lòng nhập lại mật khẩu'}
                                        {errors.confirmPassword?.type === 'validate' && 'Mật khẩu không khớp'}
                                        {errors.confirmPassword?.type === 'minLength' &&
                                            'Mật khẩu không nhỏ hơn 3 ký tự'}
                                        {errors.confirmPassword?.type === 'maxLength' &&
                                            'Mật khẩu không lớn hơn 20 ký tự'}
                                    </error>
                                </div>
                                {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid,
                            jsx-a11y/anchor-is-valid */}
                                <button
                                    // onClick={handleLogin}
                                    type="submit"
                                    className={cx('btn btn-lg btn-block btn-phone ')}
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <i className="fas fa-phone"></i> Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <NotificationContainer />
        </LoadingOverlay>
    );
}

export default UpdatePassword;
