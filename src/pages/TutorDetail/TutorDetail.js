import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Tutor-Detail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faBook, faGraduationCap, faLocationDot, faMapLocation, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { getInfoTutor, getSubjectByTutor } from '~/services/workspaces.sevices';
import { useParams } from 'react-router-dom';
import Avatar from '~/assets/avatar/default-avatar.png'
import { Fragment } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const cx = classNames.bind(styles);
function TutorDetail() {
    const [data, setData] = useState([])
    const [subjects, setSubjects] = useState({})
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const fetchSubjects = async () => {
        const res = await getSubjectByTutor()
        const { data } = res.data
        console.log(data);
        setSubjects(data)
    }
    useEffect(() => {
        async function fetchData() {
            setLoading(false)
            const response = await getInfoTutor(id)

            const { data } = response.data
            if (data) {
                setData(data)
            }
            setLoading(true)

        }
        fetchData()
        fetchSubjects()
    }, [])
    const Loading = () => {
        return (
            <div className=' container m-5 p-5 row'>
                <div className='col-md-6'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>

                            <Skeleton height={450} />

                        </p>
                    </SkeletonTheme>;
                </div>
                <div className='col-md-6'>
                    <Skeleton height={100} width={150} />
                    <Skeleton count={2} width={120} />
                    <Skeleton count={1} width={100} />
                    <Skeleton count={2} width={110} />
                    <Skeleton count={2} width={120} />
                    <Skeleton height={150} />
                </div>
            </div>
        )
    }
    return (
        <>
            <Fragment>
                {loading ?
                    (<div className={cx('wrapper', "container")}>
                        <div className="container m-4">
                            <div className="row">
                                <div className="col-lg-4 text-center d-flex flex-column" data-aos="fade-right">
                                    <img src={data.urlAvt ? data.urlAvt : Avatar} alt="" height="400px" />
                                </div>
                                <div className="col-lg-8 pt-4 content" data-aos="fade-left">
                                    <div className='mx-5 px-5'>

                                        <h1 className={cx('text-uppercase', 'name')}>{data.name}</h1>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className={cx('list')}>
                                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faBirthdayCake} /> <strong> NĂM SINH:</strong> <span className='text-break'>{new Date(data.birthday).toLocaleDateString()}</span></li>
                                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faMapLocation} /><strong> NƠI Ở:</strong> <span className='text-break'>{data.address}</span></li>
                                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} /> <strong> TRÌNH ĐỘ:</strong> <span className='text-break'>{data?.level === "TEACHER" ? ('Giáo Viên') : ('Học Sinh') || ""}</span></li>
                                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faBook} /> <strong> MÔN DẠY: </strong>{subjects.map((item, index) => { return (<span key={index}>{item.name} </span>) })}
                                                        <span className='text-break'>{data.subject ? data.subject : ""}
                                                        </span>
                                                    </li>
                                                    {/* <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faLocationDot} /> <strong> ĐỊA ĐIỂM DẠY HỌC:</strong> <span className='text-break'>{data.teaching_place ? data.teaching_place : ""}</span></li> */}
                                                </ul>
                                            </div>
                                            <div className='col-lg-12 mt-3'>
                                                <strong className={cx('title')}>GIỚI THIỆU BẢN THÂN</strong>
                                                <p className={cx('describe')}>
                                                    {data.introduce ? data.introduce : ""}

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>)
                    :
                    (
                        <Loading />
                    )}
            </Fragment>

        </>

    )
}

export default TutorDetail