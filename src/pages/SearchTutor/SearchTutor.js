import classNames from 'classnames/bind';
import React, {useState} from 'react';
import {Button, ButtonGroup, Col, Container, FloatingLabel, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from '../ReferenceTuition/ReferenceTuition.module.scss';
import {follows, levels, subjects} from "~/utils/FakeData";
import OptionItem from "~/pages/ReferenceTuition/OptionItem";
import {useMediaQuery} from "react-responsive";
import ReasonTutor from "~/layout/common/ReasonTutor";
import DayTutor from "~/layout/common/DayTutor";



const cx = classNames.bind(styles);


function SearchTutor(props) {
    const isTablet = useMediaQuery({maxWidth: 768})
    const maxWidth1024 = useMediaQuery({maxWidth:1024})
    const maxWidth1200 = useMediaQuery({maxWidth:1200})
    const convertTablet = () => {
        return `${isTablet ? 'row':''}`
    }
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
    };
    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const animatedComponents = makeAnimated();
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        <div className={cx('detail-content')}>
                            <h3 className={cx('title')}>Mô tả yêu cầu tìm gia sư</h3>
                            <Row>
                                <Col  lg={6}>
                                    <Form.Label className={cx('description')}>Số điện thoại liên hệ *</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Ví dụ: 0121********"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col  lg={12}>
                                    <Form.Label className={cx('description')}>Tóm tắt yêu cầu (tối đa 20 từ) *</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Ví dụ: Tìm gia sư tiếng Anh tại Quận 6 Hồ Chí Minh"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col  lg={6}>
                                    <Form.Label className={cx('description')}>Địa điểm dạy *</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Nhập vị trí"/>
                                </Col>
                                <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()} md={maxWidth1024 ? 6 : 2} sm={12} >
                                    <Form.Label className={cx('description')}>Số học viên *</Form.Label>
                                    <Form.Control readOnly value={1} size="sm" type="text" placeholder="Small text"/>
                                </Col>
                                <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()} md={maxWidth1024 ? 6 : 2} sm={12}  >
                                    <Form.Label className={cx('description')}>Ngày bắt đầu *</Form.Label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showDisabledMonthNavigation
                                        minDate={new Date()}
                                        className={cx('date')}
                                    />

                                </Col>
                                <Col lg={maxWidth1200 ? 4 : 2}  >
                                    <Form.Label className={cx('description')}>Giờ mỗi buổi</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}} size='lg'>
                                        {
                                            follows.map((item, index) => {
                                                return (
                                                    <OptionItem key={index} children={item.follow}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} className={cx('item')}>
                                    <Form.Label
                                        className={cx('description')}>Môn dạy
                                    </Form.Label>
                                    <Form.Label
                                        className={cx('note')}>*
                                    </Form.Label>
                                    <Select
                                        classNamePrefix='react-select'
                                        options={subjects}
                                        components={animatedComponents}
                                        placeholder='chọn môn học'
                                        isMulti
                                    />
                                </Col>
                                <Col lg={6} className={cx('item')}>
                                    <Form.Label className={cx('description', 'gender')}>Giới tính học viên *</Form.Label>
                                    <br/>
                                    <ButtonGroup size="lg" className="mb-2">
                                        <Button className={cx('btn-gender', 'active')}>Nam</Button>
                                        <Button className={cx('btn-gender')}>Nữ</Button>
                                        <Button className={cx('btn-gender')}>Có cả nam và nữ</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Form.Label
                                        className={cx('description')}> Thời gian bạn có thể nhân lớp
                                    </Form.Label>
                                    <DayTutor/>

                                </Col>
                            </Row>
                            <h3 className={cx('title')}>Yêu cầu gia sư</h3>
                            <Row>
                                <Col lg={4} >
                                    <Form.Label className={cx('description', 'gender')}>Giới tính</Form.Label>
                                    <br/>
                                    <ButtonGroup size="lg" className="mb-2">
                                        <Button className={cx('btn-gender', 'active')}>Nam</Button>
                                        <Button className={cx('btn-gender')}>Nữ</Button>
                                        <Button className={cx('btn-gender')}>Tùy</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col lg={2}>
                                    <Form.Label className={cx('description')}>Trình độ</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}} size='lg'>
                                        {
                                            levels.map((item, index) => {
                                                return (
                                                    <OptionItem key={index} children={item.level}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col lg={2}>
                                    <Form.Label className={cx('description')}>Học phí(vnđ)</Form.Label>
                                    <Form.Control  size="sm" type="text" placeholder="ví dụ: 300000"/>
                                </Col>
                                <Col lg={2} md={maxWidth1024 ? 6 : 2} bsPrefix={convertTablet()}>
                                    <Form.Label className={cx('description')}>Theo</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}} size='lg'>
                                        {
                                            follows.map((item, index) => {
                                                return (
                                                    <OptionItem key={index} children={item.follow}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>

                                <Col lg={2} md={maxWidth1024 ? 6 : 2} sm={12} bsPrefix={convertTablet()}>
                                    <Form.Label className={cx('description')}>Buổi/Tuần</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="Ví dụ 3"/>
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={12} >
                                    <Form.Label className={cx('description')}>Mô tả chi tiết *</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label=''>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{height: '115px'}}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col  lg={3}>
                                    <Form.Label className={cx('description')}>CODE khuyến mãi</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="code"/>
                                </Col>
                            </Row>


                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                       <ReasonTutor/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <center>
                            <Button
                                style={{marginTop:'20px'}}
                                className={cx('btn','btn-success')}
                                size="lg">
                               Đăng yêu cầu
                            </Button>
                        </center>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}
export default SearchTutor;
