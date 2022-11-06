import React from 'react'
import classNames from 'classnames/bind';
import styles from './Tutor-Detail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBirthdayCake, faBook, faGraduationCap, faLocationDot, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function TutorDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-center d-flex flex-column" data-aos="fade-right">
                        <img src="https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg" className="img-fluid" alt="" />
                        <di>
                            <Button className={cx('mt-5', 'btn')}>Chọn</Button>
                        </di>

                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h1 className={cx('text-uppercase', 'name')}>Nguyeen ngoc yen nhu</h1>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className={cx('list')}>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faBirthdayCake} /> <strong> NĂM SINH:</strong> <span className='text-break'>1 May 1995</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faMapLocation} /><strong> NƠI Ở:</strong> <span className='text-break'>www.example.com</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} /> <strong> TRÌNH ĐỘ:</strong> <span className='text-break'>+123 456 7890</span></li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faBook} /> <strong> MÔN DẠY:</strong>
                                        <span className='text-break'>Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9
                                        </span>
                                    </li>
                                    <li className={cx('item')}><FontAwesomeIcon className={cx('icon')} icon={faLocationDot} /> <strong> ĐỊA ĐIỂM DẠY HỌC:</strong> <span className='text-break'>New , USA</span></li>
                                </ul>
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <strong className={cx('title')}>GIỚI THIỆU BẢN THÂN</strong>
                                <p className={cx('describe')}>
                                    Sinh viên năm 4 ngành Ngôn Ngữ Anh. Kĩ năng bài giảng, dạy học sáng tạo, có thể tạo ra các hoạt động thú vị trong quá trình dạy học để giúp học sinh tiếp thu nhanh chóng.
                                    Đã trải quá trình học tiếng anh từ cơ bản đến nâng cao nên có thể hiểu được học sinh cần khắc phục hay tốt ở điểm nào. Từ đó có thể truyền tải kiến thức cho học sinh dễ dàng nắm bắt.
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