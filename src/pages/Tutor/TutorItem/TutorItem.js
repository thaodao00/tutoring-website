import React from 'react';
import classNames from 'classnames/bind';
import styles from './TutorItem.module.scss';
import { faBookBookmark, faGraduationCap, faLocationDot, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTutors } from '~/services/workspaces.sevices';
import Avatar from '~/assets/avatar/default-avatar.png'
import { Fragment } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const cx = classNames.bind(styles);
export const TutorItem = () => {
    // const dataTutor = [
    //     {
    //         name: "Nguyễn Văn A",
    //         address: "Hà Nội",
    //         position: "Sinh Viên",
    //         subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
    //         avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
    //     },
    //     {
    //         name: "Nguyễn Văn A",
    //         address: "Hà Nội",
    //         position: "Sinh Viên",
    //         subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
    //         avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
    //     },
    //     {
    //         name: "Nguyễn Văn B",
    //         address: "Hà Nội",
    //         position: "Sinh Viên",
    //         subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
    //         avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
    //     },
    //     {
    //         name: "Nguyễn Văn C",
    //         address: "Hà Nội",
    //         position: "Sinh Viên",
    //         subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
    //         avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
    //     },
    //     {
    //         name: "Nguyễn Văn D",
    //         address: "Hà Nội",
    //         position: "Sinh Viên",
    //         subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
    //         avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
    //     },
    // ]
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoading(false)
            const response = await getTutors()
            const { data } = response.data
            console.log(data);
            if (data) {
                setData(data)
            }
            setLoading(true)
        }
        fetchData()
    }, [])
    const Loading = () => {
        return (
            <div className=' container row'>

                <div className='col-md-4'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>
                            <Skeleton height={400} />
                        </p>
                    </SkeletonTheme>;
                </div>
                <div className='col-md-4'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>
                            <Skeleton height={400} />
                        </p>
                    </SkeletonTheme>;
                </div>
                <div className='col-md-4'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>
                            <Skeleton height={400} />
                        </p>
                    </SkeletonTheme>;
                </div>
            </div>
        )
    }
    return (
        <>
            <Fragment>
                {loading ? (
                    <Fragment>
                        {data.map((item, index) => {
                            return (
                                <Button to={`/tutor-detail/${item.id}`} className={cx("col-lg-4 col-md-6 col-sm-12 card", "box-card")} key={index}>

                                    <div className={cx('box-item')}>
                                        <img style={{ height: '255px' }} src={item.urlAvt ? item.urlAvt : Avatar} className="card-img-top" alt="..." />
                                        <div className={cx("card-body", "card-bottom")}>
                                            <div className="card-text">
                                                <h4 className={cx('text-name')}>
                                                    {item.name}
                                                </h4>
                                                <ul className={cx('text-list')}>
                                                    {/* <li className={cx('text-item', 'textOverflow')}>
                                                        <FontAwesomeIcon icon={faLocationDot} className={cx('item-icon')} />
                                                        {item.address}
                                                    </li> */}
                                                    {/* <li className={cx('text-item')}>
                                                        <FontAwesomeIcon icon={faGraduationCap} className={cx('item-icon')} />Ngày sinh:
                                                        {index.birthday ? item.birthday : ""}
                                                    </li> */}
                                                    <li className={cx('text-item', 'textOverflow')}>
                                                        <FontAwesomeIcon icon={faBookBookmark} className={cx('item-icon')} />Giới thiêu:{" "}
                                                        {item.introduce ? item.introduce.substring(0, 16) : ""}...
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            )
                        })}</Fragment>

                ) : (<Loading />)}
            </Fragment>
        </>
    )
}
