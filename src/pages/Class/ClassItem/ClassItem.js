import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {FaAngleDoubleRight} from "react-icons/fa";
import classNames from 'classnames/bind';

import styles from './ClassItem.module.scss';
import {AiOutlineClockCircle,AiOutlineSchedule} from "react-icons/ai";
import {BsGenderAmbiguous} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {FaMapMarkerAlt,FaBook} from "react-icons/fa";



const cx = classNames.bind(styles);

function ClassItem(props) {
    const {data} = props;
    console.log(data)
    return (
        <div className={cx('course-block', 'clear-fix')}>
            <Col lg={12} md={12}>
                <div className={cx('line-bottom')}>
                    <h3 className={cx('title')}>{data.title}</h3>
                    <div className={cx('code-block')}>
                        <b className={cx('code')}>Mã lớp: {data.classRequirement.classId}</b>
                        <FaAngleDoubleRight
                            className={cx('icon-arrow', 'animate__animated animate__fadeInLeft animate__infinite infinite')}
                        />
                        <a href='' className={cx('more')}>Xem thêm</a>
                    </div>
                </div>
                <div className={cx('fee-block')}>
                    <Row>
                        <Col lg={6} md={12}>
                            <h4 className={cx('fee')}><span>Học phí :</span> {data.tuition}/Tháng</h4>
                        </Col>
                        <Col lg={6} md={12}>
                            <a href='' className={cx('btn-take')} >
                                <span> Phí: <b>25% (750,000)</b></span>
                                <span>Nhận lớp ngay</span>
                            </a>
                        </Col>
                    </Row>
                </div>
                <div className={cx('description')}>
                    <p>{data.title}</p>
                </div>
                <Row>
                    <Col lg={4} className={cx('request-block')}>
                        <AiOutlineClockCircle className={cx('icon-request')}/>
                        <span><b>Tạo lúc:</b> 12:06 29.10.2022</span>
                    </Col>
                    <Col lg={4} className={cx('request-block')}>
                        <BsGenderAmbiguous className={cx('icon-request')}/>
                        <span><b>Yêu cầu gia sư:</b> {data.classRequirement.genderTutor}(degree)</span>
                    </Col>
                    <Col lg={4} className={cx('request-block')}>
                        <AiOutlineSchedule className={cx('icon-request')}/>
                        <span>Tuần học <b>{data.requireRelationshipTimeWeeks.length}</b> buổi (90 phút/buổi)</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className={cx('request-block')}>
                        <FiUser className={cx('icon-request')}/>
                        <span style={{fontSize: '1.4rem'}}><b>1</b> học viên (nam)</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <FaMapMarkerAlt className={cx('icon-request')}/>
                        <span style={{fontSize: '1.4rem'}}>
                                                <b>Địa điểm dạy:</b>
                            {data.classRequirement.address}
                            <a href="" className={cx('map')}>(Xem bản đồ )</a>
                         </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <AiOutlineClockCircle className={cx('icon-request')}/>
                        <span style={{fontSize: '1.4rem'}}>
                            <b>Thời gian rãnh:</b>
                            {data.requireRelationshipTimeWeeks.map((item) => item.time +',')}

                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <FaBook className={cx('icon-request')}/>
                        <span style={{fontSize: '1.4rem'}}>
                            <b> Môn học:</b>
                                   <strong
                                       style={{
                                           // borderLeft: '1px solid #ccc',
                                           color: '#333',
                                           fontWeight: 300,
                                           marginLeft: '8px',
                                           paddingLeft: '8px'
                                       }}>
                                       {data.subject.name}
                                        </strong>
                         </span>
                    </Col>
                </Row>
            </Col>

        </div>
    );
}

export default ClassItem;