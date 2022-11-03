import React from 'react'
import classNames from 'classnames/bind';
import styles from './GoodTutor.module.scss';
const cx = classNames.bind(styles);
function GoodTutor() {
    const GOOD_TUTOR = [
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn A',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Đào Thị Thu Thảo',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/24276_avatar.jpeg',
            name: 'ĐOÀN PHƯƠNG RANG HOA',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn D',
            badge: 1,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn E',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn F',
            badge: 1,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn G',
            badge: 3,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn H',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn I',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn A',
            badge: 1,
        },
    ];
    return (
        <div className={cx('widget')}>
            <h2 className={cx('widget-title')}>
                Gia sư nổi bật<span> Tháng 10</span>
            </h2>
            <ul className={cx('widget-list')}>
                {GOOD_TUTOR.map((item, index) => {
                    return (
                        <li key={index} className={cx('widget--item')}>
                            <img src={item.avatar} alt="Error" className={cx('widget-item__avatar')} />
                            <span className={cx('widget-item__name')}>{item.name}</span>
                            <span className={cx('badge')}>{item.badge}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default GoodTutor