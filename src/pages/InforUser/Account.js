import React from 'react'
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Account() {
    const auth = useSelector((state) => state.auth);
    return (
        <>
            <Row className='mt-5'>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Tên</Form.Label>
                    <Form.Control readOnly size='sm' type="text"
                        disabled value={auth.user.name} />
                </Col>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Số điện thoại</Form.Label>
                    <Form.Control readOnly value={auth.user?.phone} size='sm' type="text" disabled
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Email</Form.Label>
                    <Form.Control size='sm' type="text" value={auth.user.email} disabled />
                </Col>
                <Col lg={4} className={cx('item')}>
                    <Col md={12} lg={12}>
                        <Form.Label
                            className={cx('description')}> Giới tính
                        </Form.Label>
                        <br />
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
                        <Form.Control size='sm' type="text" />
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <Form.Label className={cx('description')}>Địa chỉ</Form.Label>
                    <Form.Control size='sm' type="text" />
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <Form.Label className={cx('description')}>Giới thiệu bản thân(1500 ky tự)</Form.Label>
                    <Form.Control as='textarea' style={{ height: '115px' }} size='sm' type="text" />
                </Col>
            </Row>
            <Row>
                <center>
                    <Button
                        style={{ marginTop: '20px', marginBottom: '20px' }}
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
                        style={{ marginTop: '20px', textTransform: 'uppercase' }}
                        className={cx('btn', 'btn-success')}
                        size="lg">
                        Đăng ký làm gia sư
                    </Button>
                </center>
            </Row></>
    )
}

export default Account