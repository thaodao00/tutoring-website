import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Tutor-Detail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBirthdayCake, faBook, faGraduationCap, faLocationDot, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { getInfoTutor } from '~/services/workspaces.sevices';
import { useParams } from 'react-router-dom';
import Avatar from '~/assets/avatar/default-avatar.png'
const cx = classNames.bind(styles);
function TutorDetail() {
    // const avatar = re
    const [data, setData] = useState({})
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        async function fetchData() {
            const response = await getInfoTutor(id)
            const { data } = response.data
            if (data) {
                setData(data)
            }
            console.log(response, "2");
        }
        fetchData()
    }, [])
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-center d-flex flex-column" data-aos="fade-right">
                        <img src={data.avatar ? data.avatar : Avatar} className="img-fluid" alt="" />
                        <div>
                            <Button className={cx('mt-5', 'btn')}>Chọn</Button>
                        </div>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h1 className={cx('text-uppercase', 'name')}>{data.name}</h1>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className={cx('list')}>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faBirthdayCake} /> <strong> NĂM SINH:</strong> <span className='text-break'>{data.birthday}</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faMapLocation} /><strong> NƠI Ở:</strong> <span className='text-break'>{data.address}</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} /> <strong>SỐ ĐIỆN THOẠI:</strong> <span className='text-break'>{data.phone}</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} /> <strong> TRÌNH ĐỘ:</strong> <span className='text-break'>{data?.position || ""}</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faBook} /> <strong> MÔN DẠY:</strong>
                                        <span className='text-break'>{data.subject ? data.subject : ""}
                                        </span>
                                    </li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faLocationDot} /> <strong> ĐỊA ĐIỂM DẠY HỌC:</strong> <span className='text-break'>{data.teaching_place ? data.teaching_place : ""}</span></li>
                                </ul>
                            </div>
                            <div className='col-lg-12 mt-3'>
                                <strong className={cx('title')}>GIỚI THIỆU BẢN THÂN</strong>
                                <p className={cx('describe')}>
                                    {data.describe ? data.describe : ""}
                                    {/* Sinh viên năm 4 ngành Ngôn Ngữ Anh. Kĩ năng bài giảng, dạy học sáng tạo, có thể tạo ra các hoạt động thú vị trong quá trình dạy học để giúp học sinh tiếp thu nhanh chóng.
                                    Đã trải quá trình học tiếng anh từ cơ bản đến nâng cao nên có thể hiểu được học sinh cần khắc phục hay tốt ở điểm nào. Từ đó có thể truyền tải kiến thức cho học sinh dễ dàng nắm bắt. */}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TutorDetail