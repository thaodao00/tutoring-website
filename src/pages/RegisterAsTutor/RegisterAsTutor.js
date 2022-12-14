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
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '~/redux/auth/actions';
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

function RegisterAsTutor(props) {
    const auth = useSelector((state) => state.auth);

    const [subjects, setSubjects] = useState([])
    const [levels, setLevels] = useState([])
    const [coin, setCoins] = useState()
    const [loading, setLoading] = useState(false)
    const [level, setLevel] = useState('STUDENT')
    const dispatch = useDispatch()
    const navigator = useNavigate()
    useEffect(() => {
        fetchSubject(subjects).then(subject => setSubjects(subject));
        fetchLevel().then(res => setLevels(res))
    }, [])
    const [val, setVal] = useState([]);
    console.log('====================================');
    console.log(auth.user.roles[0].id);
    console.log('====================================');
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
        await becomeTutor(body).then((res) => {
            if (res.data.status === 1) {

                dispatch(getUserInfo())
                // navigator("/tutor")
                NotificationManager.success(res.data.message);
            }
            else {
                NotificationManager.error(res.data.message);
            }

        })
            .catch((e) => NotificationManager.error(e.response.data.message));

        setLoading(false)

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
            <LoadingOverlay active={loading} spinner text="??ang x??? l??...">
                <div className={cx('wrapper')}>
                    <Container>
                        <Row className='d-flex flex-row'>
                            {auth.user.roles[0].id === "STUDENT" ? (<>
                                <Col lg={6} className='pe-5'>
                                    <h3 className={cx('title', 'line-bottom')}>Th??ng tin Gia s??</h3>
                                    <Col lg={12} className={cx('item')}>
                                        <Form.Label
                                            className={cx('description')}> B???n ??ang l?? <FaStarOfLife className={cx('icon-label')} />
                                        </Form.Label>
                                        <Form.Select className={cx('list-area', 'fs-4')} value={level} onChange={e => setLevel(e.target.value)} placeholder='Tr??nh ?????'>
                                            {levels.map((item, index) => {
                                                return (
                                                    <option value={item.id} key={index}>{item.name}</option>
                                                )
                                            })}

                                        </Form.Select>
                                    </Col>
                                    <Col lg={12} className={cx('item')}>
                                        <Form.Label
                                            className={cx('description')}>M??n d???y <FaStarOfLife className={cx('icon-label')} />
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
                                                ????ng k?? l??m gia s??
                                            </Button>
                                        </center>
                                    </Col>
                                </Col>
                                <Col lg={6} className="card text-white py-5">
                                    <div className={cx("overlay", "card-img-overlay d-flex flex-column align-items-center justify-content-center")}>
                                        <h5 className={cx("text-title", "card-title fw-bold fs-1")}>????NG K?? L??M GIA S??</h5>
                                        <p className="card-text text-center fs-2">
                                            ????? tr??? th??nh gia s??, b???n c???n cung c???p th??m th??ng tin v??o b??n d?????i,<br />b???n c???n chi tr??? <span className={cx('text-coin', ' fs-1 fw-bold')}>48 coin <FaCoins /></span> ????? tr??? th??nh gia s??.
                                        </p>
                                    </div>
                                </Col>
                            </>) : (<Col lg={12} className=" text-white py-5">
                                <div className={cx("overlay-tutor", 'text-center')}>
                                    <h5 className={cx("text-title", "card-title fw-bold fs-1")}>B???N L?? GIA S?? C???A TRUNG T??M GIA S??</h5>
                                    <p className="card-text text-black  fs-2">
                                        C???m ??n b???n ???? l??a ch???n Trung T??m Gia S??, ch??c b???n c?? nhi???u tr???i nghi???m t???t nh???t!!!
                                    </p>
                                    <div className='m-5'>
                                        <img src='https://th.bing.com/th/id/OIP.5MbyOOc05g-3MVzEqEXJ0QAAAA?pid=ImgDet&rs=1' />
                                    </div>
                                </div>
                            </Col>)}




                        </Row>
                    </Container>

                </div>
                <NotificationContainer />
            </LoadingOverlay>

        </>

    );
}

export default RegisterAsTutor;

