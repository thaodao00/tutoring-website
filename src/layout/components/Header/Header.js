import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon, faPhoneFlip, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
import { useEffect } from 'react';
import { getInfoTutor } from '~/services/workspaces.sevices';

const cx = classNames.bind(style);

function Header() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const isUser = false;
    const refOverClickOutSide = useRef();
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState({});
    useOnClickOutside(refOverClickOutSide, () => setIsShow(!isShow));
    const toggleDropdown = () => {
        setIsShow(!isShow);
        console.log(isShow);
    };

    useEffect(() => {
        async function fetchData() {
            if (auth.user) {
                const response = await getInfoTutor(auth.user.id);
                const { data } = response.data;
                if (data) {
                    setData(data);
                }
            }
        }
        fetchData();
    }, []);

    const handleLogout = () => {
        dispatch(logout());
    };

    const myNav = [
        {
            id: 1,
            title: 'Trang ch???',
            to: config.routes.home,
        },
        {
            id: 2,
            title: 'L???p m???i',
            tag: 'Hot',
            to: config.routes.class,
        },
        {
            id: 3,
            title: 'Gia s??',
            to: config.routes.tutor,
        },
        {
            id: 4,
            title: 'H???c ph?? tham kh???o',
            tag: 'M???i',
            to: config.routes.ReferenceTuition,
        },
        {
            id: 5,
            title: 'T??m gia s??',

            to: config.routes.searchTutor,
        },
        {
            id: 6,
            title: '????ng k?? l??m gia s??',

            to: config.routes.registerAsTutor,
        },
        {
            id: 8,
            title: 'Li??n h???',

            to: config.routes.contacts,
        },
    ];

    const accountLinks = [
        {
            name: 'Th??ng tin ????ng nh???p',
            icon: <FaUserCircle />,
            to: config.routes.infoLogin,
        },
        {
            name: 'Th??ng tin c?? nh??n',
            icon: <BsFillInfoCircleFill />,
            to: config.routes.infoUser,
        },

        // {
        //     name: 'Danh s??ch l???p d???y',
        //     icon: <BsCardList />,
        //     to: config.routes.classTeach,
        // },
        {
            name: 'Danh s??ch l???p h???c',
            icon: <BsCardList />,
            to: config.routes.classStudy,
            separate: true,
        },
        {
            name: '????ng k?? t??m gia s??',
            icon: <TbEyeglass2 />,
            to: config.routes.searchTutor,
        },
        {
            name: '????ng k?? l??m gia s??',
            icon: <FaUserGraduate />,
            to: config.routes.registerAsTutor,
            separate: true,
        },
        {
            name: '????ng xu???t',
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
                            0363275624
                        </Button>
                        -
                        <Button href="tel: 09222222" className={cx('text-phone')}>
                            0893156752
                        </Button>
                    </span>
                    <span className={cx('mail')}>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('mail-icon')} />
                        <Button href="mailto:daykem@gmail.com" className={cx('text-mail')}>
                            trungtamgiasu@gmail.com
                        </Button>
                    </span>
                </div>
                {!auth.user ? (
                    <div>
                        <FontAwesomeIcon icon={faUser} className={cx('login-icon')} />
                        <Button to="/login" className={cx('text-login')}>
                            ????ng Nh???p
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
                            <img className="rounded-circle" src={auth.user.urlAvt ? auth.user.urlAvt : Avatar} alt="" />
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
                                            {item.name == '????ng xu???t' ? (
                                                <>
                                                    <Link
                                                        to={'/home'}
                                                        onClick={handleLogout}
                                                        className={cx('item-link')}
                                                    >
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
                            src="https://ohay.vn/blog/wp-content/uploads/2020/03/trung-tam-gia-su-sai-gon.png"
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


                                    <>
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
                                    </>

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
