import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon, faPhoneFlip, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import style from './Header.module.scss';
import Button from '~/components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '~/redux/auth/actions';
import config from '~/config';
import Avatar from '~/assets/avatar/default-avatar.png';
import { MdNotifications } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaUserCircle, FaUserGraduate } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { TbEyeglass2, TbLogout } from 'react-icons/tb';
import { useOnClickOutside } from '~/components/Hooks/useOnClickOutside';

const cx = classNames.bind(style);

function Header() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    const isUser = false;
    const refOverClickOutSide = useRef();
    const [isShow, setIsShow] = useState(false);
    useOnClickOutside(refOverClickOutSide, () => setIsShow(!isShow));
    const toggleDropdown = () => {
        setIsShow(!isShow);
        console.log(isShow);
    };

    const myNav = [
        {
            id: 1,
            title: 'Trang chủ',
            to: config.routes.home,
        },
        {
            id: 2,
            title: 'Lớp mới',
            tag: 'Hot',
            to: config.routes.class,
        },
        {
            id: 3,
            title: 'Gia sư',
            to: config.routes.tutor,
        },
        {
            id: 4,
            title: 'Học phí tham khảo',
            tag: 'Mới',
            to: config.routes.ReferenceTuition,
        },
        {
            id: 5,
            title: 'Tìm gia sư',

            to: config.routes.searchTutor,
        },
        {
            id: 6,
            title: 'Đăng ký làm gia sư',

            to: config.routes.registerAsTutor,
        },
        {
            id: 7,
            title: 'Bài viết',

            to: config.routes.posts,
        },
        {
            id: 8,
            title: 'Liên hệ',

            to: config.routes.contacts,
        },
    ];
    const accountLinks = [
        {
            name: 'Thông tin cá nhân',
            icon: <BsFillInfoCircleFill />,
            to: config.routes.infoUser,
        },
        {
            name: 'Thông tin đăng nhập',
            icon: <FaUserCircle />,
            to: config.routes.infoLogin,
        },
        {
            name: 'Danh sách lớp dạy',
            icon: <BsCardList />,
            to: config.routes.classTeach,
        },
        {
            name: 'Danh sách lớp học',
            icon: <BsCardList />,
            to: config.routes.classStudy,
            separate: true,
        },
        {
            name: 'Đăng ký tìm gia sư',
            icon: <TbEyeglass2 />,
            to: config.routes.searchTutor,
        },
        {
            name: 'Đăng ký làm gia sư',
            icon: <FaUserGraduate />,
            to: config.routes.registerAsTutor,
            separate: true,
        },
        {
            name: 'logout',
            icon: <TbLogout />,
            to: config.routes.logout,
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
                {!auth.user ? (
                    <div>
                        <FontAwesomeIcon icon={faUser} className={cx('login-icon')} />
                        <Button to="/login" className={cx('text-login')}>
                            Đăng Nhập
                        </Button>
                    </div>
                ) : (
                    <div className={cx('user')}>
                        <div className={cx('notice')}>
                            <MdNotifications className={cx('icon-notice')} />
                            <span className={cx('badge')}>99+</span>
                        </div>
                        <span onClick={toggleDropdown} className={cx('user-name')}>
                            {auth.user.name}{' '}
                        </span>
                        <div onClick={toggleDropdown} className={cx('avatar')}>
                            <img src={Avatar} alt="" />
                        </div>
                        {isShow ? (
                            <ul ref={refOverClickOutSide} className={cx('dropdown-user')}>
                                {accountLinks.map((item, index) => {
                                    return (
                                        <li
                                            onClick={toggleDropdown}
                                            key={index}
                                            className={cx('item', `${item.separate ? 'separate' : ''}`)}
                                        >
                                            {item.icon}
                                            {item.name == 'logout' ? (
                                                <>
                                                    <Link onClick={handleLogout} className={cx('item-link')}>
                                                        {item.name}
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link to={item.to} className={cx('item-link')}>
                                                        {item.name}
                                                    </Link>
                                                </>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            ''
                        )}
                    </div>
                )}
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
