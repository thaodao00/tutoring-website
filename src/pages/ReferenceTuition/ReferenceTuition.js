import React from 'react';
import classNames from 'classnames/bind';
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {useMediaQuery} from 'react-responsive';


import styles from './ReferenceTuition.module.scss';
import OptionItem from "~/pages/ReferenceTuition/OptionItem";
import {follows, levels, ours, subjects} from "~/utils/FakeData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";



const cx = classNames.bind(styles);

export const reasons = [
    {
        reason: 'Gia sư chất lượng. được kiểm duyệt gắt gao',
        icon: <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')}/>,
    },
    {
        reason: 'Chỉ cần đăng yêu cầu học',
        icon: <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')}/>,
    },
    {
        reason: 'Chúng tôi sẽ làm cầu nối giữa bạn và Gia sư',
        icon: <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')}/>,
    },
    {
        reason: 'Hỗ trợ nhanh chóng, thân thiện',
        icon: <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')}/>,
    },
    {
        reason: ' Dịch vụ gia sư miễn phí',
        icon: <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')}/>,
    },

]

function ReferenceTuition(props) {
    const isTablet = useMediaQuery({maxWidth: 768})
    const maxWidth1024 = useMediaQuery({maxWidth:1024})
    const maxWidth1200 = useMediaQuery({maxWidth:1200})
    const convertTablet = () => {
        return `${isTablet ? 'row':''}`
    }

    const animatedComponents = makeAnimated();


    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        <div className={cx('detail-content')}>
                            <h3 className={cx('title')}>Mô tả yêu cầu tìm gia sư</h3>
                            <Row>
                                <Col md={6} lg={6}>
                                    <Form.Label className={cx('description')}>Số điện thoại liên hệ *</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Ví dụ: 0121********"/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <Form.Label className={cx('description')}>Địa điểm dạy *</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Nhập vị trí"/>
                                </Col>
                            </Row>
                            <Row >
                                <Col  bsPrefix={convertTablet()} lg={2} md={maxWidth1024 ? 6 : 2} sm={12}>
                                    <Form.Label className={cx('description')}>Số học viên *</Form.Label>
                                    <Form.Control readOnly value={1} size="sm" type="text" placeholder="Small text"/>
                                </Col>
                                <Col lg={maxWidth1200 ? 4 : maxWidth1024 ? 4 :2} md={4} sm={12} bsPrefix={convertTablet()}>
                                    <Form.Label className={cx('description')}>Giờ mỗi buổi*</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}} size='lg'>
                                        {
                                            ours.map((item, index) => {
                                                return (
                                                    <OptionItem key={index} children={item.our}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col  lg={4} sm={6} bsPrefix={convertTablet()}>
                                    <Form.Label className={cx('description')}>Môn học *</Form.Label>
                                    <Select
                                        classNamePrefix='react-select'
                                        options={subjects}
                                        components={animatedComponents}
                                        placeholder='Chọn môn học'
                                        isMulti
                                    />
                                </Col>
                                <Col lg={4} md={maxWidth1024 ? 6 :4} bsPrefix={convertTablet()}>
                                    <Form.Label className={cx('description', 'gender', 'mt-20')}>Giới tính học
                                        viên</Form.Label>
                                    <ButtonGroup size="lg" className="mb-2">
                                        <Button className={cx('btn-gender', 'active')}>Nam</Button>
                                        <Button className={cx('btn-gender')}>Nữ</Button>
                                        <Button className={cx('btn-gender')}>Cả 2</Button>
                                    </ButtonGroup>
                                </Col>

                            </Row>
                            <h3 className={cx('title')}>Yêu cầu gia sư</h3>
                            <Row>
                                <Col lg={3} md={maxWidth1024 ? 6 : 3} bsPrefix={convertTablet()}>
                                    <Form.Label className={cx('description', 'gender')}>Giới tính</Form.Label>
                                    <ButtonGroup size="lg" className="mb-2">
                                        <Button className={cx('btn-gender', 'active')}>Nam</Button>
                                        <Button className={cx('btn-gender')}>Nữ</Button>
                                        <Button className={cx('btn-gender')}>Cả 2</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col lg={3} md={maxWidth1024 ? 6 : 2} bsPrefix={convertTablet()}>
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


                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <div className={cx('widget')}>
                            <h4 className={cx('reason-title')}>Tại sao bạn nên tìm giáo viên trên tainangtre.vn ?</h4>
                            {
                                reasons.map((item, index) => {
                                    return (
                                        <p className={cx('reason-item')} key={index}>
                                            {item.icon}
                                            {item.reason}
                                        </p>
                                    )
                                })
                            }

                        </div>
                    </Col>

                </Row>
            </Container>


        </div>
    );
}

export default ReferenceTuition;


