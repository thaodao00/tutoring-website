import React, {useState} from 'react';
import classNames from 'classnames/bind';
import {Button, ButtonGroup, Col, Container, FloatingLabel, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import styles from './RegisterAsTutor.module.scss';
import {FaStarOfLife} from 'react-icons/fa';
import {address, areas, subjects} from "~/utils/FakeData";
import DateItem from "~/pages/RegisterAsTutor/DateItem";
import OptionItem from "~/pages/ReferenceTuition/OptionItem";
import DayTutor from "~/layout/common/DayTutor";


const cx = classNames.bind(styles);


function RegisterAsTutor(props) {

    const [isDisabled, setIsDisabled] = useState(false)
    const animatedComponents = makeAnimated();
    const array = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    const renderSquares = (numbs) => {
        return numbs.map((num, index) => (
            <DateItem  key={index}  value={num} />
        ));
    };


    return (
        <div className={cx('wrapper')}>
            <Container>
                <h3 className={cx('title', 'line-bottom')}>Thông tin cá nhân</h3>
                <Row>
                    <Col lg={6} className={cx('item')}>

                        <Form.Label
                            className={cx('description')}> Họ tên <FaStarOfLife className={cx('icon-label')}/>
                        </Form.Label>
                        <Form.Control size='sm' type="text" placeholder="Nhập vị trí"/>

                    </Col>
                    <Col lg={6} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Số điện thoại <FaStarOfLife className={cx('icon-label')}/>
                        </Form.Label>
                        <Form.Control size='sm' type="text" placeholder="Nhập vị trí"/>

                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Email<FaStarOfLife className={cx('icon-label')}/>
                        </Form.Label>
                        <Form.Control size='sm' type="text" placeholder="Nhập vị trí"/>
                    </Col>
                    <Col lg={4} className={cx('item')}>
                        <Col md={12} lg={12}>
                            <Form.Label
                                className={cx('description')}> Giới tính <FaStarOfLife className={cx('icon-label')}/>
                            </Form.Label>
                            <ButtonGroup role={"group"} size="lg" className="mb-2">
                                <span className='btn-gender active'>Nam</span>
                                <span className={'btn-gender'}>Nữ</span>
                            </ButtonGroup>
                        </Col>
                    </Col>
                    <Col lg={2} className={cx('item')}>
                        <Col md={12} lg={12}>
                            <Form.Label
                                className={cx('description')}> Năm sinh<FaStarOfLife className={cx('icon-label')}/>
                            </Form.Label>
                            <Form.Control size='sm' type="text"/>
                        </Col>
                    </Col>
                    <Col lg={12} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Địa chỉ<FaStarOfLife className={cx('icon-label')}/>
                        </Form.Label>
                        <Form.Control size='sm' type="text" placeholder="Nhập vị trí"/>
                    </Col>

                </Row>
                <Row>
                    <Form.Label
                        className={cx('description')}>Giới thiệu bản thân
                        <FaStarOfLife className={cx('icon-label')}/>
                        <em> (1500 ký tự)</em>
                    </Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label=''>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{height: '115px'}}
                        />
                    </FloatingLabel>
                </Row>
                <h3 className={cx('title', 'line-bottom')}>Thông tin Gia sư</h3>
                <Row>
                    <Col lg={6} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Bạn đang là <FaStarOfLife className={cx('icon-label')}/>
                        </Form.Label>
                        <Form.Control size='sm' type="text"/>
                    </Col>
                    <Col lg={6} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}>Môn dạy <FaStarOfLife className={cx('icon-label')}/>
                        </Form.Label>

                        <Select
                            classNamePrefix='react-select'
                            options={subjects}
                            components={animatedComponents}
                            placeholder='Gõ vào rồi chọn môn'
                            isMulti
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Khu vực bạn đang ở <FaStarOfLife
                            className={cx('icon-label')}/>
                        </Form.Label>
                        <Form.Select style={{padding: '14px 18px'}} size='lg'>
                            {
                                areas.map((item, index) => {
                                    return (
                                        <OptionItem key={index} children={item.label}/>
                                    )
                                })
                            }
                        </Form.Select>
                    </Col>
                    <Col lg={6} className={cx('item')}>
                        <Form.Label
                            style={{display: 'inline-block'}}
                            className={cx('description')}> Khu vực bạn có thể dạy
                            <FaStarOfLife className={cx('icon-label')}/>
                            <em> (Bạn phải chọn khu vực bạn đang ở)</em>
                        </Form.Label>
                        <Select
                            classNamePrefix='react-select'
                            options={address}
                            components={animatedComponents}
                            isDisabled={isDisabled}
                            placeholder={isDisabled ? '' : 'Gõ vào rồi chọn địa điểm'}
                            isMulti
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Trường bạn đã học
                        </Form.Label>
                        <Form.Control size='sm' type="text" placeholder='Tên trường'/>
                    </Col>
                    <Col lg={2} className={cx('item')}>
                        <Form.Label
                            className={cx('description')}> Năm tốt nghiệp
                        </Form.Label>
                        <Form.Control size='sm' type="text" placeholder='vd:2000'/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Form.Label
                            className={cx('description')}> Thời gian bạn có thể nhân lớp
                        </Form.Label>
                        <DayTutor/>
                        <p className={cx('note')}>(Thời gian được hiển thị từ 0 giờ -> 23 giờ)</p>

                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <center>
                            <Button
                                style={{marginTop:'20px'}}
                                className={cx('btn','btn-success')}
                                size="lg">
                                Đăng ký làm gia sư
                            </Button>
                        </center>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default RegisterAsTutor;

