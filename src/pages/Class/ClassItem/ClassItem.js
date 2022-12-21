import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { FaAngleDoubleRight, FaBook, FaCoins, FaMapMarkerAlt } from "react-icons/fa";
import classNames from 'classnames/bind';

import styles from './ClassItem.module.scss';
import { AiOutlineClockCircle, AiOutlineSchedule } from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import dayjs from "moment";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LoadingOverlay from 'react-loading-overlay';
import { async } from '@firebase/util';
import { applyClass } from '~/services/workspaces.sevices'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function ClassItem(props) {
    const { user } = useSelector((state) => state.auth)

    const [loading, setLoading] = useState(false)


    const convertToDate = (date) => {
        const newDate = new Date(date)
        dayjs.locale('vi')
        return 'Thứ' + " " + dayjs(newDate).locale('vi').format('dddd') + ":" + ' ' + newDate.getMonth() + "h" + newDate.getMinutes()
    }
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
    const handleClick = async () => {
        setLoading(true)
        const body = {
            userApplyId: user.id,
            classId: data.id,
            createBy: data.createdBy.id
        }

        await applyClass(body).then((res) => {
            if (res.data.status === 1) {
                NotificationManager.success(res.status)
            }
            else {
                NotificationManager.error(res.data.message)
            }
        })
            .catch(e => NotificationManager.error(e.response.data.message))
        setLoading(false)

    }
    return (
        <LoadingOverlay active={loading} spinner text="Đang xử lý...">
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
                                <h4 className={cx('fee')}><span>Học phí :</span> {formatCurrency(data.tuition)}/Tháng</h4><br></br>
                                <h4 ><strong>Thời gian khóa học:</strong> {new Date(data.classRequirement.dateStart).toLocaleDateString()} - {new Date(data.classRequirement.dateEnd).toLocaleDateString()}</h4>

                            </Col>
                            <Col lg={6} md={12}>
                                { }
                                <button className={cx('btn-take')} onClick={handleClick} disabled={data.status === "CREATE" ? false : true}>
                                    <span> Phí: <b>20% ({formatCurrency(data.tuition * 0.2 / 1)})</b></span>
                                    <div></div>
                                    <b>Quy đổi {Math.round(data.tuition * 0.2 / 1) / 1000} coin <FaCoins className='text-warning' /></b>
                                    <div></div>
                                    {data.status === "CREATE" ? (<span>Nhận lớp ngay</span>) : (<span>Lớp đã có người nhận</span>)}

                                </button>
                            </Col>
                        </Row>
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
                        <Col lg={4} className={cx('request-block')}>
                            <span><AiOutlineClockCircle className={cx('icon-request')} /><b>Thời gian dạy: </b>{data.requireRelationshipTimeWeeks.map((item, index) => {
                                return (
                                    <p key={index} className="p-0 m-0"> {item.day == 1 ? ("Chủ Nhật") : ('Thứ ' + item.day)} lúc {item.hours} giờ: {item.minutes} phút </p>
                                )

                            })}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className={cx('request-block')}>
                            <FiUser className={cx('icon-request')} />
                            <span
                                style={{ fontSize: '1.4rem' }}><b>{data.classRequirement.amountStudent}</b> học viên</span>
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

            </div >
            <NotificationContainer />

        </LoadingOverlay >


    );
}

export default ClassItem;