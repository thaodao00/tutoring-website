import React from 'react';
import classNames from 'classnames/bind';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Class.module.scss';
import 'animate.css';
import ClassItem from "~/pages/Class/ClassItem";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FaHandPointRight} from "react-icons/fa";

const cx = classNames.bind(styles);

const data = [
    {
        id: 1,
        title: 'Cần Gia Sư Môn Tiếng Việt Lớp 1 Tại Huyện Bình Xuyên, Tỉnh Vĩnh Phúc',
        idClass: '12323',
        fee: '2,4000,000',
        tax: '25%',
        description: 'bé học để tháng 8 thi lại',
        subjects: [
            {id: 1, name: 'Toán'},
            {id: 2, name: 'Tiếng Anh'},
        ],
        tutorGender: 'nam',
        time: 'Thứ 3 ,thứ 5',
        address: 'tổ dân phố Trại Cúp, thị trấn Bá Hiến, huyện Bình Xuyên, tỉnh Vĩnh Phúc',
        degree: 'Nghề tự do',
    },
    {
        id: 2,
        title: 'Cần Gia Sư Cho Bé 6 Tuổi Bị Tăng Động, Kém Tập Trung Tại Xuyên Mộc, Bà Rịa - Vũng Tàu',
        idClass: '10914  ',
        fee: '2,2000,000',
        tax: '25%',
        description: 'bé học để tháng 8 thi lại',
        subjects: [
            {id: 1, name: 'Toán,'},
            {id: 2, name: 'Tiếng Anh,'},
        ],
        tutorGender: 'nam',
        time: 'Thứ 3 ,thứ 5',
        address: 'tổ dân phố Trại Cúp, thị trấn Bá Hiến, huyện Bình Xuyên, tỉnh Vĩnh Phúc',
        degree: 'Nghề tự do',

    },
    {
        id: 3,
        title: 'Cần Gia Sư Môn Cho Bé 5 Tuổi Chuẩn Bị Vào Lớp 1 Tại Buôn Ma Thuột, Đăk Lăk',
        idClass: '15760  ',
        fee: '1,200,000',
        tax: '25%',
        description: 'bé chuẩn bị vào lớp 1',
        subjects: [
            {id: 1, name: 'Toán'},
            {id: 2, name: 'Tiếng Anh'},
            {id: 3, name: 'Ngữ Văn'}
        ],
        tutorGender: 'nữ',
        time: 'Thứ 3 ,thứ 5',
        address: 'tổ dân phố Trại Cúp, thị trấn Bá Hiến, huyện Bình Xuyên, tỉnh Vĩnh Phúc',
        degree: 'Nghề tự do'
    },
]

const tagLinks = [
    {
        id: 1, tagName: 'Đàn Guitar'
    },
    {
        id: 2, tagName: 'Đàn Piano'
    },
    {
        id: 3, tagName: 'Trẻ chậm nói'
    },
    {
        id: 4, tagName: 'Yoga'
    },
    {
        id: 5, tagName: 'Đàn Violin'
    },
    {
        id: 6, tagName: 'Tiếng việt lớp 1'
    },
    {
        id: 7, tagName: 'Nhảy hiện đại (dancer)'
    },
    {
        id: 8, tagName: 'Toán lớp 1'
    },
    {
        id: 9, tagName: 'Đàn Organ'
    },
    {
        id: 10, tagName: 'Tiếng trung'
    },
    {
        id: 11, tagName: 'Vẽ'
    },
    {
        id: 12, tagName: 'Lập trình'
    },


]


function Class(props) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col lg={9} md={9} sm={12}>
                        <div className={cx('search-area')}>
                            <Row>
                                <Col lg={7} md={6} sm={12}>
                                    <Form.Control size="lg" type="text" placeholder="Môn học"/>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <Form.Select className={cx('list-area')} placeholder='Khu vực'>
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={2} md={12} sm={12}>
                                    <Button className={cx('btn-search', 'text-center')} size="lg">
                                        <FontAwesomeIcon icon={faSearch} className={cx('search-icon')}/>
                                        Tìm
                                    </Button>
                                </Col>

                            </Row>
                        </div>
                        <div className={cx('information')}>
                            {
                                data.map((item) => {
                                    return (
                                        <ClassItem key={item.id} data={item}/>
                                    )
                                })

                            }
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className={cx('sidebar-right')}>
                            <div className={cx('widget')}>
                                <center>
                                    <p>"Bạn đã tham gia đội ngũ Gia Sư của chúng tôi chưa??"</p>
                                    <a href="" className={cx('btn-register')}>Đăng kỳ làm gia sư</a>
                                </center>
                            </div>
                            <div className={cx('widget-hotline')}>
                                <center>
                                    <h4 className={cx('text')}>Hãy gọi ngay:</h4>
                                    <a className={cx('hotline-link')} href=''>093 143 9203</a>
                                    <h4 className={cx('text')}>Hoặc</h4>
                                    <a className={cx('hotline-link')} href=''>093 143 9203</a>
                                    <h4 className={cx('text')}>Để được hỗ trợ</h4>
                                </center>
                            </div>
                            <div className={cx('need')}>
                                <h5 className={cx('need-title', 'line-bottom')}>Gia sư cần biết</h5>
                                <a className={cx('need-link')} href="">
                                    <FaHandPointRight style={{marginRight: '4px'}}/>
                                    Quy trình nhận lớp
                                </a>
                                <a className={cx('need-link')} href="">
                                    <FaHandPointRight style={{marginRight: '4px'}}/>
                                    Hợp đồng mẫu
                                </a>
                            </div>
                            <div className={cx('tag')}>
                                <h5 className={cx('need-title', 'line-bottom')}>Gia sư cần biết</h5>
                                {
                                    tagLinks.map((item)=>{
                                        return (
                                            <a key={item.id} href='' className={cx('tag-link')}>{item.tagName}</a>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </Col>

                </Row>

            </Container>

        </div>
    );
}


export default Class;
