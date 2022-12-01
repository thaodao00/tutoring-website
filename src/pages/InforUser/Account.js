import React from 'react'
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Account() {
    const auth = useSelector((state) => state.auth);
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [introduce, setIntroduce] = useState('')
    const [date, setDate] = useState()
    const [gender, setGender] = useState()

    // const handleUpdateUser =() =>{
    //     const 
    // }
    return (
        <>
            <Row className='mt-5'>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Tên</Form.Label>
                    <Form.Control size='sm' type="text" placeholder={auth.user.name}
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                </Col>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Số điện thoại</Form.Label>
                    <Form.Control placeholder={auth.user?.phone} value={phone} onChange={(e) => setUsername(e.target.value)} size='sm' type="text"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Email</Form.Label>
                    <Form.Control size='sm' type="text" value={email} placeholder={auth.user.email} onChange={(e) => setUsername(e.target.value)} />
                </Col>
                <Col lg={4} className={cx('item')}>
                    <Col md={12} lg={12}>
                        <Form.Label
                            className={cx('description')}> Giới tính
                        </Form.Label>
                        <br />
                        <select size="lg" className="p-4" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Chọn giới tính</option>
                            <option value={'MALE'} className='btn-gender'>Nam</option>
                            <option value={'FEMALE'} className='btn-gender'>Nữ</option>
                        </select>
                    </Col>
                </Col>
                <Col lg={2} className={cx('item')}>
                    <Col md={12} lg={12}>
                        <Form.Label
                            className={cx('description')}> Năm sinh
                        </Form.Label>
                        <Form.Control placeholder='dd/mm//yy' size='sm' type="text" />
                    </Col>
                </Col>
            </Row>
            {/* <Row>
                <Col lg={12} md={12}>
                    <Form.Label className={cx('description')}>Địa chỉ</Form.Label>
                    <Form.Control size='sm' type="text" />
                </Col>
            </Row> */}
            <Row>
                <Col lg={12} md={12}>
                    <Form.Label className={cx('description')}>Giới thiệu bản thân(1500 ky tự)</Form.Label>
                    <Form.Control as='textarea' style={{ height: '115px' }} size='sm' type="text" value={introduce} onChange={(e) => setIntroduce(e.target.value)} />
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