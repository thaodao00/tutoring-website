import React, { useEffect } from 'react'
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateInfoUser } from '~/redux/auth/actions';
const cx = classNames.bind(styles);

function Account() {
    const { user, message } = useSelector((state) => state.auth);
    const [phone, setPhone] = useState(user.phone)
    const [username, setUsername] = useState(user.name)
    const [introduce, setIntroduce] = useState(user.introduce)
    const [date, setDate] = useState(new Date(user.birthday).toLocaleDateString())
    const [gender, setGender] = useState(user.gender)
    const dispatch = useDispatch()

    const handleUpdateUser = async () => {
        dispatch(updateInfoUser(user.id, username, gender, phone, new Date(date).getTime(), introduce))
        alert("Cập nhật tài khoản thành công!!")
    }
    return (
        <>
            <Row className='mt-5'>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Tên</Form.Label>
                    <Form.Control size='sm' type="text"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                </Col>
                <Col lg={6} md={12}>
                    <Form.Label className={cx('description')}>Số điện thoại</Form.Label>
                    <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} size='sm' type="text"
                    />

                </Col>
            </Row>
            <Row>
                <Col lg={6} className={cx('item')}>
                    <Col md={12} lg={12}>
                        <Form.Label
                            className={cx('description')}> Giới tính
                        </Form.Label>
                        <br />
                        <select size="lg" className="p-4 w-100" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Chọn giới tính</option>
                            <option value={'MALE'} className='btn-gender'>Nam</option>
                            <option value={'FEMALE'} className='btn-gender'>Nữ</option>
                        </select>
                    </Col>
                </Col>
                <Col lg={6} className={cx('item')}>
                    <Col md={12} lg={12}>
                        <Form.Label
                            className={cx('description')}> Ngày sinh
                        </Form.Label>
                        <Form.Control value={date} onChange={(e) => { setDate(e.target.value) }} size='sm' type="text" />
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <Form.Label className={cx('description')}>Giới thiệu bản thân(1500 ky tự)</Form.Label>
                    <Form.Control as='textarea' style={{ height: '115px' }} size='sm' type="text" value={introduce} onChange={(e) => setIntroduce(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <center>
                    <Button
                        onClick={handleUpdateUser}
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