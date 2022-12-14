import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { useForm } from 'react-hook-form';
import Button from '~/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import { forgotPassword } from '~/redux/auth/actions';
import api from '~/utils/axios';
import RootNavigator from '~/utils/navigate';

const cx = classNames.bind(styles);

function ForgotPassword(props) {
    const navigate = useNavigate();
    RootNavigator.setNavigate(navigate);

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        watch,
        setError,
    } = useForm();

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const auth = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const handleForgotPass = async () => {
        setLoading(true);
        setMessage(null);
        await api
            .get(`/v1/auths/forgot-password?email=${email}`)
            .then((res) => {
                console.log(res);
                return res.data;
            })
            .then((res) => {
                console.log(res);
                if (res.status === 1) {
                    navigate('/updatePassword', { state: { email } });
                } else {
                    setMessage(res.message);
                }
            })
            .catch((e) => setMessage(e.response?.message));

        setLoading(false);
        // dispatch(forgotPassword(email));
        // update-password
    };

    useEffect(() => {
        if (auth.user) {
            navigate('/');
        }
    }, [auth]);

    return (
        <LoadingOverlay active={loading} spinner text="Đang kiểm tra email">
            <div className={cx('container')}>
                <div className={cx('rows')}>
                    <div className={cx('col-md-4', 'col-md-offset-4')} style={{ margin: '0 auto' }}>
                        <form
                            className={cx('form-login', 'ng-pristine', 'ng-valid')}
                            onSubmit={handleSubmit(handleForgotPass)}
                        >
                            <center>
                                <h4 className={cx('heading-title heading-line-bottom ')}>Quên mật khẩu</h4>
                            </center>
                            <center>
                                <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-red')}>
                                    {message}
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
                                        {errors.email?.type === 'required' && 'Email là bắt buộc'}
                                        {errors.email?.type === 'pattern' && 'Email sai định dạng'}
                                    </error>
                                </div>
                                <Button
                                    type="submit"
                                    className={cx('btn btn-lg btn-block btn-phone ')}
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <i className="fas fa-phone"></i> Gửi
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
}

export default ForgotPassword;
