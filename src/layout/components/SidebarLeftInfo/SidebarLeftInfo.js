import React, {useRef, useState} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

import config from "~/config";
import Avatar from "~/assets/avatar/default-avatar.png";
import {FaAddressCard} from "react-icons/fa";
import {BiUserCircle} from "react-icons/bi";
import {BsCardList} from "react-icons/bs";
import {HiOutlineLogout} from "react-icons/hi";
import classNames from "classnames/bind";
import styles from "./SidebarLeftInfo.module.scss";

const cx = classNames.bind(styles);

function SidebarLeftInfo(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const links = [
        {
            name: 'Thông tin cá nhân',
            icon: <FaAddressCard className={cx('icon')}/>,
            to: config.routes.infoUser,
        },
        {
            name: 'Thông tin đăng nhập',
            icon: <BiUserCircle className={cx('icon')}/>,
            to: config.routes.infoUser,
        },
        {
            name: 'Danh sách lớp dạy',
            icon: <BsCardList className={cx('icon')}/>,
            to: config.routes.listClassTeach,
        },
        {
            name: 'Dánh sách lớp học',
            icon: <BsCardList className={cx('icon')}/>,
            to: config.routes.listClassStudy,
        },
        {
            name: 'Đăng xuất',
            icon: <HiOutlineLogout className={cx('icon')}/>,
            to: config.routes.logout,
        }
    ]
    const [isEdit, setIsEdit] = useState(false)
    const editRef = useRef(null)
    const handleEditAvatar = () => {
        setIsEdit(!isEdit)
        const check = editRef.current.classList.contains(cx('hide'))
        if (check) {
            editRef.current.classList.remove(cx('hide'))
        } else {
            editRef.current.classList.add(cx('hide'))
        }
    }
    return (
        <div className={cx('sidebar-left')}>
            <div className={cx('avatar')}>
                <img alt="not fount"
                     src={selectedImage == null ? `${Avatar}` : URL.createObjectURL(selectedImage)}/>
                <span ref={editRef} onClick={handleEditAvatar}
                      className={cx('edit')}>Chỉnh sửa avatar</span>
                {
                    isEdit && (
                        <div className={cx('edit-function')}>
                            <input
                                className={cx('btn-upload')}
                                type='file'
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                            />

                            <Button size='sm' className={cx('function')} variant='dark'>Cập nhật</Button>
                            <Button size='sm' onClick={handleEditAvatar}
                                    className={cx('close', 'function')}>Đóng</Button>
                        </div>
                    )
                }
            </div>
            <div className={cx('info')}>
                <h4 className={cx('account')}>Tài khoản 3219</h4>
                <p className={cx('info-item')}>ID: <span>39801</span></p>
                <p className={cx('info-item')}>Điện thoại:<span style={{color: '#ccc'}}>1321388</span></p>
                <div className={cx('list-route')}>
                    {
                        links.map((item, index) => {
                            return (
                                <li key={index} className={cx('route-item')}>
                                    <span className={cx('icon')}>{item.icon}</span>
                                    <Link to={item.to} className={cx('route-link')}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SidebarLeftInfo;