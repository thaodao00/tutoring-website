import React from 'react';
import classNames from 'classnames/bind';
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";



import styles from './InfoUser.module.scss';
import Form from "react-bootstrap/Form";
import SidebarLeftInfo from "~/layout/components/SidebarLeftInfo";




const cx = classNames.bind(styles);

function InfoUser(props) {


    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col lg={3} md={3} >
                        <SidebarLeftInfo/>
                    </Col>


                    <Col lg={9} md={9} className={cx('information')}>
                        <h4 className={cx('title', 'line-bottom')}>Thông tin cá nhân</h4>
                        <Row>
                            <Col lg={6} md={12}>
                                <Form.Label className={cx('description')}>Họ tên</Form.Label>
                                <Form.Control readOnly value={'Tài khoản 3219'} size='sm' type="text"
                                              placeholder="Ví dụ: 0121********"/>
                            </Col>
                            <Col lg={6} md={12}>
                                <Form.Label className={cx('description')}>Số điện thoại</Form.Label>
                                <Form.Control readOnly value={'+12121212'} size='sm' type="text"
                                              placeholder="Ví dụ: 0121********"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12}>
                                <Form.Label className={cx('description')}>Email</Form.Label>
                                <Form.Control size='sm' type="text" placeholder=""/>
                            </Col>
                            <Col lg={4} className={cx('item')}>
                                <Col md={12} lg={12}>
                                    <Form.Label
                                        className={cx('description')}> Giới tính
                                    </Form.Label>
                                    <br/>
                                    <ButtonGroup size="lg" className="mb-2">
                                        <button className='btn-gender'>Nam</button>
                                        <button className='btn-gender'>Nữ</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                            <Col lg={2} className={cx('item')}>
                                <Col md={12} lg={12}>
                                    <Form.Label
                                        className={cx('description')}> Năm sinh
                                    </Form.Label>
                                    <Form.Control size='sm' type="text"/>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12}>
                                <Form.Label className={cx('description')}>Địa chỉ</Form.Label>
                                <Form.Control size='sm' type="text"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12}>
                                <Form.Label className={cx('description')}>Giới thiệu bản thân(1500 ky tự)</Form.Label>
                                <Form.Control as='textarea' style={{height: '115px'}} size='sm' type="text"/>
                            </Col>
                        </Row>
                        <Row>
                            <center>
                                <Button
                                    style={{marginTop: '20px', marginBottom: '20px'}}
                                    className={cx('btn', 'btn-success')}
                                    size="lg">
                                    Cập nhật
                                </Button>
                            </center>
                        </Row>
                        <h4 className={cx('title', 'line-bottom')}>Thông tin gia sư</h4>
                        <Row>
                            <center>
                                <Button
                                    style={{marginTop: '20px', textTransform: 'uppercase'}}
                                    className={cx('btn', 'btn-success')}
                                    size="lg">
                                    Đăng ký làm gia sư
                                </Button>
                            </center>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default InfoUser;