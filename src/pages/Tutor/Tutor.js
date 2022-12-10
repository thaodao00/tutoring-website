import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tutor.module.scss';
import { Col, Row } from "react-bootstrap";

import GoodTutor from '~/layout/components/GoodTutor/GoodTutor';

import {
    faBookBookmark,
    faGraduationCap,
    faLocationDot,
    faMap,
    faMapLocation,
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import PaginationTutor from "~/layout/common/PaginationTutor";
import { TutorItem } from './TutorItem/TutorItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchGrade, getSubject } from '~/services/workspaces.sevices';

const cx = classNames.bind(styles);

function Tutor() {
    const dataTutor = [
        {
            name: "Nguyễn Văn A",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn A",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn B",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn C",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn D",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
    ]
    const [subject, setSubject] = useState([]);
    const [nameSubject, setNameSubject] = useState('')
    const [grade, setGrade] = useState([]);
    const [nameGrade, setNameGrade] = useState('');
    useEffect(() => {
        async function getSubjects() {
            const response = await getSubject()
            const { data: { data }, } = response
            console.log(data, "daa");
            if (data) {
                setSubject(data)
            }
        }

        fetchGrade(grade).then(res => setGrade(res))

        getSubjects();
    }, [])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container pt-5 pb-5')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-9 col-md-12 col-sm-12 mt-5')}>
                        <div className='row'>
                            <TutorItem />
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-md-12 col-sm-12 mt-5')}>
                        <GoodTutor />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tutor;
