import React from 'react';
import { Col, Row } from "react-bootstrap";
import { FaAngleDoubleRight, FaBook, FaMapMarkerAlt } from "react-icons/fa";
import classNames from 'classnames/bind';

import styles from './ClassStudyItem.module.scss';
import { AiOutlineClockCircle, AiOutlineSchedule } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import dayjs from "moment";


const cx = classNames.bind(styles);

function ClassStudyItem(props) {

    const convertToMinute = (date) => {
        return date / 60
    }


    const { data } = props;
    const formatCurrency = (currency) => {
        currency = currency.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        return currency
    }
    function SwitchCase(props) {

        switch (props.value) {

            case 'ALL':
                return <p>Nam hoăc Nữ</p>
            case 'MALE':
                return <p>Nam</p>

            case 'FEMALE':
                return <p>Nữ</p>
            default:
                return <p>""</p>

        }
    }
    return (
        <div className={cx('course-block', 'clear-fix')}>
            <Col lg={12} md={12}>
                <div className={cx('line-bottom')}>
                    <h3 className={cx('title')}>{data.title}</h3>
                    <div className={cx('code-block')}>
                        <b className={cx('code')}>Mã lớp: {data.id}</b>
                        <FaAngleDoubleRight
                            className={cx('icon-arrow', 'animate__animated animate__fadeInLeft animate__infinite infinite')}
                        />
                    </div>
                </div>
                <div className={cx('fee-block')}>
                    <Row>
                        <Col lg={6} md={12}>
                            <h4 className={cx('fee')}><span>Học phí :</span> {formatCurrency(data.tuition)}/Tháng</h4>
                        </Col>
                        <Col lg={3} md={12} className="bg-light rounded-4 p-4" >
                            <div>
                                <div className={cx('text-status')}>Ngày tạo : {new Date(data.createdAt).toLocaleDateString()}</div>
                                <div className={cx('text-status')}>Trạng thái: {data?.status === "CREATE" ? <>Chưa hoạt động</> : <>Đã nhận</>}</div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={cx('description')}>
                    <strong>Người tạo lớp: </strong>
                    {data.createdBy.name}{" - "}
                    <a href={`mailto:${data.createdBy.email}`}>{data.createdBy.email}</a>
                    <br />
                    <strong>Người nhận lớp: </strong>
                    {data.userApply === null ? ('Chưa có người nhận') : (<>{data.userApply.name} {' - '} <a href={`mailto:${data.userApply.email}`}>{data.userApply.email}</a></>)}
                </div>
                <div className={cx('description')}>
                    <p>{data.description}</p>
                </div>
                <Row>

                    <Col lg={4} className={cx('request-block')}>
                        <BsGenderAmbiguous className={cx('icon-request')} />
                        <span><b>Yêu cầu gia sư:</b><SwitchCase value={data.classRequirement.genderTutor} /></span>

                    </Col>
                    <Col lg={4} className={cx('request-block')}>
                        <AiOutlineSchedule className={cx('icon-request')} />
                        <span>Tuần học <b>{data.requireRelationshipTimeWeeks.length}</b> buổi
                            ({convertToMinute(data.classRequirement.timeLesson)} phút/buổi)</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className={cx('request-block')}>
                        <FiUser className={cx('icon-request')} />
                        <span
                            style={{ fontSize: '1.4rem' }}><b>{data.classRequirement.amountStudent}</b> học viên </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <FaMapMarkerAlt className={cx('icon-request')} />
                        <span style={{ fontSize: '1.4rem' }}>
                            <b>Địa điểm dạy:</b>
                            {data.classRequirement.address.fullAddress}

                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <AiOutlineClockCircle className={cx('icon-request')} />
                        <span style={{ fontSize: '1.4rem' }}>
                            <b>Thời gian rãnh:</b>
                            {data.requireRelationshipTimeWeeks.map((item) => item.date)}

                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <FaBook className={cx('icon-request')} />
                        <span style={{ fontSize: '1.4rem' }}>
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

export default ClassStudyItem;