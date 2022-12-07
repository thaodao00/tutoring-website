import React, { useRef, useState } from 'react';
// import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

import config from '~/config';
import Avatar from '~/assets/avatar/default-avatar.png';
import { FaAddressCard } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { BsCardList } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import classNames from 'classnames/bind';
import styles from './SidebarLeftInfo.module.scss';
import Button from '~/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInfoTutor } from '~/services/workspaces.sevices';
import api from '../../../interceptors/axios';
import { getUserInfo } from '~/redux/auth/actions';
const cx = classNames.bind(styles);

const firebaseConfig = {
    apiKey: 'AIzaSyDqMkz_-TJB70fEBLmrOhp2tn-scHf-CXU',
    authDomain: 'tutor-website-52add.firebaseapp.com',
    projectId: 'tutor-website-52add',
    storageBucket: 'tutor-website-52add.appspot.com',
    messagingSenderId: '424119102073',
    appId: '1:424119102073:web:685693679484cbd8ba02a8',
    measurementId: 'G-R39K0PFMFR',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

function SidebarLeftInfo() {
    const [selectedImage, setSelectedImage] = useState(null);
    const links = [
        {
            name: 'Thông tin cá nhân',
            icon: <FaAddressCard className={cx('icon')} />,
            to: config.routes.infoUser,
        },
        {
            name: 'Thông tin đăng nhập',
            icon: <BiUserCircle className={cx('icon')} />,
            to: config.routes.infoUser,
        },

        {
            name: 'Đăng xuất',
            icon: <HiOutlineLogout className={cx('icon')} />,
            to: config.routes.logout,
        },
    ];
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState(false);
    const editRef = useRef(null);
    const handleEditAvatar = () => {
        setIsEdit(!isEdit);
        const check = editRef.current.classList.contains(cx('hide'));
        if (check) {
            editRef.current.classList.remove(cx('hide'));
        } else {
            editRef.current.classList.add(cx('hide'));
        }
    };

    const handleUpdateAvatar = () => {
        console.log(URL.createObjectURL(selectedImage));

        const storageRef = ref(storage, `files/${auth.user.id}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedImage);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL);
                    console.log(auth.user);
                    api.post('v1/auths/user/avatar', { id: auth.user.id, url: downloadURL })
                        .then((res) => {
                            console.log(res.data);
                            dispatch(getUserInfo());
                            handleEditAvatar();
                        })
                        .catch((e) => console.log(e));
                });
            },
        );
    };

    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        async function fetchData() {
            const response = await getInfoTutor(auth.user.id);
            const { data } = response.data;
            if (data) {
                setData(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={cx('sidebar-left')}>
            <div className={cx('avatar')}>
                <img
                    alt="not fount"
                    src={selectedImage == null ? `${auth.user.urlAvt}` : URL.createObjectURL(selectedImage)}
                />
                <span ref={editRef} onClick={handleEditAvatar} className={cx('edit')}>
                    Chỉnh sửa avatar
                </span>
                {isEdit && (
                    <div className={cx('edit-function')}>
                        <input
                            className={cx('btn-upload')}
                            type="file"
                            onChange={(e) => setSelectedImage(e.target.files[0])}
                        />

                        <Button size="sm" className={cx('function')} onClick={handleUpdateAvatar} variant="dark">
                            Cập nhật
                        </Button>
                        <Button size="sm" onClick={handleEditAvatar} className={cx('close', 'function')}>
                            Đóng
                        </Button>
                    </div>
                )}
            </div>
            <div className={cx('info')}>
                <h4 className={cx('account')}>{auth.user.name}</h4>
                <p className={cx('info-item')}>
                    ID: <span>{auth.user.id}</span> <br />{' '}
                    <Button className={cx('btn-logout')}>
                        <p>Đăng xuất</p>
                    </Button>
                </p>
            </div>
        </div>
    );
}

export default SidebarLeftInfo;
