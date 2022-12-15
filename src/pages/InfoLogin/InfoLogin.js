import React from 'react';
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import config from "~/config";
import styles from "./InfoLogin.module.scss";
import SidebarLeftInfo from "~/layout/components/SidebarLeftInfo";
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUserService } from '~/redux/auth/services';
import { changePassword } from '~/services/workspaces.sevices';
import Button from '~/components/Button';
import LoadingOverlay from 'react-loading-overlay';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function InfoLogin(props) {
    const [data, setData] = useState({})
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [loading, setLoading] = useState(false)
    
    const auth = useSelector((state) => state.auth);

    const handleChangePassword = async () => {

        const body = {
            oldPassword: oldPass,
            newPassword: newPass
        }
        console.log(body);
        if (!oldPass) {
            alert("Bạn chưa nhập mật khẩu cũ !!");
            return
        }
        if (!newPass) {
            alert("Bạn chưa nhập mật khẩu mới !!");
            return
        }
        else {
            setLoading(true)
            const res = await changePassword(body)
            if (res.data.status === 1) {
                NotificationManager.success(res.data.message);
            }
            else {
                NotificationManager.error(res.data.message);
            }
            setLoading(false)
            setNewPass("")
            setOldPass('')
        }

    }

    useEffect(() => {
        async function getData() {
            const response = await getUserService();
            const { data } = response
            if (data) {
                setData(data)
            }
        }
        // getData();
    }, [])
    const maxWidth1200 = useMediaQuery({ maxWidth: 1200 })
    return (
        <LoadingOverlay active={loading} spinner text="Đang xử lý...">
            <div className={cx('wrapper')}>
                <Container>
                    <Row>
                        <Col lg={4} md={4} >
                            <SidebarLeftInfo data={data} />
                        </Col>
                        <Col lg={8} md={8} className={cx('information')}>
                            <h4 className={cx('title', 'line-bottom')}>Thông tin đăng nhập</h4>
                            <Row>
                                <Col lg={4} md={12}>
                                    <Form.Label className={cx('description')}> Tên

                                    </Form.Label>
                                    <Form.Control disabled size='sm' type="text" value={auth.user?.name}
                                        placeholder="" />
                                </Col>
                                <Col lg={4} md={12}>
                                    <Form.Label className={cx('description')} >Email
                                        {/* <span className={cx('not-check')}>Chưa kiểm duyệt</span> */}
                                    </Form.Label>
                                    <Form.Control disabled size='sm' type="text" value={auth.user?.email}
                                        placeholder="" />
                                </Col>
                            </Row>
                            <h4 className={cx('title', 'line-bottom', 'mt-16')} >
                                Cập nhật mật khẩu
                            </h4>

                            <Row>
                                <Col lg={6} md={12}>
                                    <Form.Label className={cx('description')}>Mật khẩu cũ</Form.Label>
                                    <Form.Control size='sm' placeholder='...........' type="password" value={oldPass || ""} onChange={(e) => setOldPass(e.target.value)} />
                                </Col>
                                <Col lg={6} md={12}>
                                    <Form.Label className={cx('description')}>Mật khẩu mới</Form.Label>
                                    <Form.Control size='sm' placeholder='...........' type="password" value={newPass || ""} onChange={(e) => setNewPass(e.target.value)} />
                                </Col>
                            </Row>
                            <div className={cx('function')}>
                                <Button
                                    className={cx('change-pass')} onClick={handleChangePassword}>
                                    Cập nhật
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <NotificationContainer />
        </LoadingOverlay>

    );
}

export default InfoLogin;