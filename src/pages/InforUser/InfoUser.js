import React, {useRef, useState} from 'react';
import classNames from 'classnames/bind';
import {Button, ButtonGroup, Col, Container, FormControl, Row} from "react-bootstrap";
import {Link} from "react-router-dom"


import styles from './InfoUser.module.scss';
import Avatar from '~/assets/avatar/default-avatar.png';
import config from "~/config";
import Form from "react-bootstrap/Form";
import {FaAddressCard} from 'react-icons/fa';
import {BiUserCircle} from "react-icons/bi";
import {BsCardList} from "react-icons/bs";
import {HiOutlineLogout} from 'react-icons/hi'


const cx = classNames.bind(styles);

function InfoUser(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const links = [
        {
            name: 'Thông tin cá nhân',
            icon: <FaAddressCard className={cx('icon')}/>,
            to: config.routes.infoUser,
        },
        {
            name: 'Thông tin đăng nhập',
            icon: <BiUserCircle className={cx('icon')}/>,
            to: config.routes.infoUser,
        },
        {
            name: 'Danh sách lớp dạy',
            icon: <BsCardList className={cx('icon')}/>,
            to: config.routes.listClassTeach,
        },
        {
            name: 'Dánh sách lớp học',
            icon: <BsCardList className={cx('icon')}/>,
            to: config.routes.listClassStudy,
        },
        {
            name: 'Đăng xuất',
            icon: <HiOutlineLogout className={cx('icon')}/>,
            to: config.routes.logout,
        }
    ]
    const [isEdit, setIsEdit] = useState(false)
    const editRef = useRef(null)
    const handleEditAvatar = () => {
        setIsEdit(!isEdit)
        const check = editRef.current.classList.contains(cx('hide'))
        if (check) {
            editRef.current.classList.remove(cx('hide'))
        } else {
            editRef.current.classList.add(cx('hide'))
        }
    }
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col lg={3} md={3} className={cx('sidebar-left')}>
                        <div className={cx('avatar')}>
                            <img alt="not fount"
                                 src={selectedImage == null ? `${Avatar}` : URL.createObjectURL(selectedImage)}/>
                            <span ref={editRef} onClick={handleEditAvatar}
                                  className={cx('edit')}>Chỉnh sửa avatar</span>
                            {
                                isEdit && (
                                    <div className={cx('edit-function')}>
                                        <input
                                            className={cx('btn-upload')}
                                            type='file'
                                            onChange={(e) => setSelectedImage(e.target.files[0])}
                                        />

                                        <Button size='sm' className={cx('function')} variant='dark'>Cập nhật</Button>
                                        <Button size='sm' onClick={handleEditAvatar}
                                                className={cx('close', 'function')}>Đóng</Button>
                                    </div>
                                )
                            }
                        </div>
                        <div className={cx('info')}>
                            <h4 className={cx('account')}>Tài khoản 3219</h4>
                            <p className={cx('info-item')}>ID: <span>39801</span></p>
                            <p className={cx('info-item')}>Điện thoại:<span style={{color: '#ccc'}}>1321388</span></p>
                            <div className={cx('list-route')}>
                                {
                                    links.map((item, index) => {
                                        return (
                                            <li key={index} className={cx('route-item')}>
                                                <span className={cx('icon')}>{item.icon}</span>
                                                <Link to={item.to} className={cx('route-link')}>{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>


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
                                    <ButtonGroup role={"group"} size="lg" className="mb-2">
                                        <span className={cx('btn-gender', 'active')}>Nam</span>
                                        <span className={cx('btn-gender')}>Nữ</span>
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