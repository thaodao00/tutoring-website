import React, {useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Class.module.scss';
import 'animate.css';
import ClassItem from "~/pages/Class/ClassItem";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FaHandPointRight} from "react-icons/fa";
import {tagLinks} from "~/utils/FakeData";
import PaginationTutor from "~/layout/common/PaginationTutor";
import {getAllClass} from "~/services/workspaces.sevices";


const cx = classNames.bind(styles);


function Class(props) {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        async function test (){
            const response = await getAllClass();
            const {data, status} = response?.data
            console.log(data)
        }
        async function fetchData() {
            const response = await getAllClass();
            const {data, status} = response?.data.data

            if (data) {
                setData(data)
            }
        }
        test()
        fetchData()

    }, [])

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
                                    <Button className={cx('btn-search', 'text-center', 'btn-success')} size="lg">
                                        <FontAwesomeIcon icon={faSearch} className={cx('search-icon')}/>
                                        Tìm
                                    </Button>
                                </Col>

                            </Row>
                        </div>
                        <div className={cx('information')}>
                            {
                                currentPosts.map((item) => {
                                    return (
                                        <ClassItem key={item.id} data={item}/>
                                    )
                                })

                            }
                        </div>
                        <PaginationTutor postsPerPage={postsPerPage}
                                         totalPosts={data.length}
                                         paginate={paginate}
                                         currentPage={currentPage}
                        />
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
                                    tagLinks.map((item) => {
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
