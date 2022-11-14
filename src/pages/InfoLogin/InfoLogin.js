import React from 'react';
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classNames from "classnames/bind";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

import config from "~/config";
import styles from "./InfoLogin.module.scss";
import SidebarLeftInfo from "~/layout/components/SidebarLeftInfo";
import {FaFacebookF} from 'react-icons/fa';
import {BsGoogle} from 'react-icons/bs';

const cx = classNames.bind(styles);

function InfoLogin(props) {
    const maxWidth1200 = useMediaQuery({maxWidth:1200})
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col lg={3} md={3} >
                        <SidebarLeftInfo/>
                    </Col>
                    <Col lg={9} md={9} className={cx('information')}>
                        <h4 className={cx('title', 'line-bottom')}>Thông tin đăng nhập</h4>
                        <Row>
                            <Col lg={4} md={12}>
                                <Form.Label className={cx('description')}>Số điện thoại
                                    <span className={cx('not-check')}>Chưa kiểm duyệt</span>
                                </Form.Label>
                                <Form.Control  size='sm' type="text"
                                              placeholder=""/>
                            </Col>
                        </Row>
                        <h4 className={cx('title', 'line-bottom','mt-16')} >
                            Cập nhật mật khẩu
                        </h4>

                        <Row>
                            <Col lg={6} md={12}>
                                <Form.Label className={cx('description')}>Mật khẩu mới</Form.Label>
                                <Form.Control size='sm' type="password"/>
                            </Col>
                            <Col lg={6} md={12}>
                                <Form.Label className={cx('description')}>Gõ lại mật khẩu</Form.Label>
                                <Form.Control size='sm' type="password"/>
                            </Col>
                        </Row>
                        <div className={cx('function')}>
                            <Button variant="primary"
                                    className={cx('btn-primary')}>
                                Cập nhật
                            </Button>
                            <Button  className={cx('btn-default','ml-4')}>
                                Đóng
                            </Button>
                        </div>
                        <h4 className={cx('title', 'line-bottom','mt-16')} >
                            <span className={cx('text-or')}>hoặc</span> Kết nối Facebook, Google
                        </h4>
                        <Row>
                            <Col lg={maxWidth1200 ? 6 : 4} md={6}>
                                <div className="d-grid gap-0">
                                    <ButtonGroup size="lg" className="mb-2">
                                        <Link to={config.routes.login}>
                                            <Button className={cx('btn__icon-social')}>
                                                <FaFacebookF/>
                                            </Button>
                                        </Link>
                                        <Link to={config.routes.login}>
                                            <Button className={cx('btn-social')} variant="primary" size="lg">
                                                Kết nối với facebook
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </div>
                            </Col>
                            <Col lg={maxWidth1200 ? 6 : 4} md={6} >
                                <div className="d-grid gap-2">
                                    <ButtonGroup size="lg" >
                                        <Link to={config.routes.login}>
                                            <Button variant='secondary' className={cx('btn__icon-social')}>
                                                <BsGoogle/>
                                            </Button>
                                        </Link>
                                        <Link to={config.routes.login}>
                                            <Button className={cx('btn-social')} variant="secondary" size="lg">
                                                Thoát Google
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default InfoLogin;