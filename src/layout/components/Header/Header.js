import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon, faPhoneFlip, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(style);
function Header() {
    const myNav = [
        {
            id: 1,
            title: 'Trang chủ',
            to: '/home',
        },
        {
            id: 2,
            title: 'Lớp mới',
            tag: 'Hot',
            to: '/class',
        },
        {
            id: 3,
            title: 'Gia sư',
            to: '/tutor',
        },
        {
            id: 4,
            title: 'Học phí tham khảo',
            tag: 'Mới',
            to: '/reference-tuition',
        },
        {
            id: 5,
            title: 'Tìm gia sư',

            to: '/searchTutor',
        },
        {
            id: 6,
            title: 'Đăng ký làm gia sư',

            to: '/register-as-tutor',
        },
        {
            id: 7,
            title: 'Bài viết',

            to: '/posts',
        },
        {
            id: 8,
            title: 'Liên hệ',

            to: '/contacts',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('header-top-block')}>
                    <span className={cx('phone')}>
                        <FontAwesomeIcon icon={faPhoneFlip} className={cx('phone-icon')} />
                        <Button href="tel: 09222222" className={cx('text-phone')}>
                            092.222.222
                        </Button>
                        -
                        <Button href="tel: 09222222" className={cx('text-phone')}>
                            092.222.222
                        </Button>
                    </span>
                    <span className={cx('mail')}>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('mail-icon')} />
                        <Button href="mailto:daykem@gmail.com" className={cx('text-mail')}>
                            daykem@gmail.com
                        </Button>
                    </span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} className={cx('login-icon')} />
                    <Button to="/login" className={cx('text-login')}>
                        Đăng Nhập
                    </Button>
                </div>
            </div>
            <div>
                <div className={cx('d-flex', 'header-bottom')}>
                    <Button to="/">
                        <img
                            className={cx('logo')}
                            src="https://www.daykemtainha.vn/public/templates/public/giasu/images/logo-wide-giasu.png"
                            alt="logo"
                        />
                    </Button>
                    <div className={cx('navbar navbar-expand-lg')}>
                        <div className={cx('container-fluid nav-mobile flex-row-reverse')}>
                            <div className={cx('nav-icon')}>
                                <button
                                    className={cx('navbar-toggler')}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <FontAwesomeIcon icon={faNavicon} />
                                </button>
                            </div>
                            <div className={cx('collapse navbar-collapse')} id="navbarNavAltMarkup">
                                <ul className={cx('nav-link')}>
                                    {myNav.map((nav, index) => {
                                        return (
                                            <NavLink
                                                className={cx('nav-item')}
                                                key={index}
                                                to={nav.to}
                                                style={({ isActive }) =>
                                                    isActive
                                                        ? {
                                                              color: 'white',
                                                              background: '#43b14b',
                                                              borderRadius: '30px',
                                                          }
                                                        : null
                                                }
                                            >
                                                {nav.title}
                                                <span className={cx(nav.tag === 'Hot' ? 'tag-hot' : 'tag-new')}>
                                                    {nav.tag}
                                                </span>
                                            </NavLink>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
