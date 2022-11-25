import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Register.module.scss';
import Button from '~/components/Button/Button';
import { reset, signup } from '~/redux/auth/actions';
import LoadingOverlay from 'react-loading-overlay';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);
function Register() {
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
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confimPass, setConfirmpass] = useState('');
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(reset());
    }, []);

    const onSubmit = (data) => {
        if (watch('confirmPassword') !== watch('password')) {
            return setError('confirmPassword', { type: 'validate', message: 'Mật khẩu không khớp' });
        }
        dispatch(signup(email, name, password));
    };

    return (
        <LoadingOverlay active={auth.loading} spinner text="Đang đăng ký">
            <div className={cx('container')}>
                <div className={cx('rows')}>
                    <div className={cx('col-md-4', 'col-md-offset-4')} style={{ margin: '0 auto' }}>
                        <form className={cx('form-login', 'ng-pristine', 'ng-valid')} onSubmit={handleSubmit(onSubmit)}>
                            <center>
                                <h4 className={cx('heading-title heading-line-bottom ')}>Đăng ký tài khoản</h4>
                            </center>
                            <center>
                                <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-red')}>
                                    {auth.error}
                                </p>
                                <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-primary')}>
                                    {auth.message}
                                </p>
                            </center>
                            <div>
                                <input
                                    name="name"
                                    onInput={(e) => setName(e.target.value)}
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Họ tên"
                                    ng-model="text"
                                    {...register('name', { required: true })}
                                ></input>
                                <div className={cx('error')}>
                                    <error className={cx('text-error')}>
                                        {errors.name?.type === 'required' && 'Họ tên là bắt buộc'}
                                    </error>
                                </div>
                                <input
                                    onInput={(e) => setEmail(e.target.value)}
                                    name="email"
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Email"
                                    ng-model="email"
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
                                <input
                                    onInput={(e) => setPassword(e.target.value)}
                                    name="password"
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Mật Khẩu"
                                    type="password"
                                    ng-model="pass"
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
                                <Button
                                    // onClick={handleSignup}
                                    type="submit"
                                    className={cx('btn btn-lg btn-block btn-phone ')}
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <i className="fas fa-phone"></i> Đăng ký
                                </Button>
                                <div className={cx('login-span')}>
                                    <span> Bạn đã có tài khoản? </span>
                                    <Button to="/login" className={cx('text-login')}>
                                        Đăng Nhập
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
}

export default Register;
