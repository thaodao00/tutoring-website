import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Button, ButtonGroup, Col, Container, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import styles from './RegisterAsTutor.module.scss';
import { FaCoins, FaStarOfLife } from 'react-icons/fa';
import { address, areas, subjects } from "~/utils/FakeData";
import DateItem from "~/pages/RegisterAsTutor/DateItem";
import OptionItem from "~/pages/ReferenceTuition/OptionItem";
import DayTutor from "~/layout/common/DayTutor";
import { becomeTutor, fetchLevel, fetchSubject, getAllClass, getCoin, getSubject } from "~/services/workspaces.sevices";
import LoadingOverlay from 'react-loading-overlay';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const cx = classNames.bind(styles);

function RegisterAsTutor(props) {
    const [subjects, setSubjects] = useState([])
    const [levels, setLevels] = useState([])
    const [coin, setCoins] = useState()
    const [loading, setLoading] = useState(false)
    const [level, setLevel] = useState('STUDENT')

    useEffect(() => {
        fetchSubject(subjects).then(subject => setSubjects(subject));
        fetchLevel().then(res => setLevels(res))
    }, [])
    const [val, setVal] = useState([]);

    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        setVal(subjects)
        // Case 1 : The user checks the box
        if (checked) {
            setVal([...val, value]
            );
        }
        // Case 2  : The user unchecks the box
        else {
            setVal(
                val.filter((e) => e !== value),
            );
        }
    };

    const fetchBecomeTutor = async () => {
        setLoading(true)
        const body = {
            "level": level,
            "subjectIds": val
        }
        console.log(body);
        if (coin < 48) {
            alert("Bạn không đủ coin, vui lòng nạp coin!!!")
        }
        else {
            const res = await becomeTutor(body)

            console.log(res);
            setLoading(false)

            if (res.data.status === 1) {
                NotificationManager.success(res.data.message);
            }
            else {
                NotificationManager.error(res.data.message);
            }

        }

    }
    const fetchCoin = async () => {

        const res = await getCoin()
        setCoins(res?.data?.data?.balance)
    }
    useEffect(() => {
        fetchCoin()
    }, [])
    return (
        <>
            <LoadingOverlay active={loading} spinner text="Đang xử lý...">
                <div className={cx('wrapper')}>
                    <Container>
                        <Row className='d-flex flex-row'>
                            <Col lg={6} className='pe-5'>
                                <h3 className={cx('title', 'line-bottom')}>Thông tin Gia sư</h3>
                                <Col lg={12} className={cx('item')}>
                                    <Form.Label
                                        className={cx('description')}> Bạn đang là <FaStarOfLife className={cx('icon-label')} />
                                    </Form.Label>
                                    <Form.Select className={cx('list-area', 'fs-4')} value={level} onChange={e => setLevel(e.target.value)} placeholder='Trình độ'>
                                        {levels.map((item, index) => {
                                            return (
                                                <option value={item.id} key={index}>{item.name}</option>
                                            )
                                        })}

                                    </Form.Select>
                                </Col>
                                <Col lg={12} className={cx('item')}>
                                    <Form.Label
                                        className={cx('description')}>Môn dạy <FaStarOfLife className={cx('icon-label')} />
                                    </Form.Label>
                                    <Row className='d-flex'>
                                        {subjects.map((item, index) => {
                                            return (
                                                <Col lg={3} className="form-check" key={index}>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexCheckDefault"
                                                        value={item.id}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        {item.name}
                                                    </label>
                                                </Col>

                                            )
                                        })}
                                    </Row>
                                </Col>
                                <Col lg={12}>
                                    <center>
                                        <Button
                                            style={{ marginTop: '20px' }}
                                            className={cx('btn', 'btn-success px-4 py-3')}
                                            size="lg" onClick={() => fetchBecomeTutor()}>
                                            Đăng ký làm gia sư
                                        </Button>
                                    </center>
                                </Col>
                            </Col>
                            <Col lg={6} className="card text-white py-5">
                                <div className={cx("overlay", "card-img-overlay d-flex flex-column align-items-center justify-content-center")}>
                                    <h5 className={cx("text-title", "card-title fw-bold fs-1")}>ĐĂNG KÝ LÀM GIA SƯ</h5>
                                    <p className="card-text text-center fs-2">
                                        Để trở thành gia sư, bạn cần cung cấp thêm thông tin vào bên dưới,<br />bạn cần chi trả <span className={cx('text-coin', ' fs-1 fw-bold')}>48 coin <FaCoins /></span> để trở thành gia sư.
                                    </p>
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </div>
                <NotificationContainer />
            </LoadingOverlay>

        </>

    );
}

export default RegisterAsTutor;

