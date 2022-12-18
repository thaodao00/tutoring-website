import React, {useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LoadingOverlay from 'react-loading-overlay';

import styles from './Class.module.scss';
import 'animate.css';
import ClassItem from "~/pages/Class/ClassItem";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FaHandPointRight} from "react-icons/fa";
import {tagLinks} from "~/utils/FakeData";
import PaginationTutor from "~/layout/common/PaginationTutor";
import {
    getGrade,
    getSubject,
    pagination,
    paginationSearch,
} from "~/services/workspaces.sevices";


const cx = classNames.bind(styles);


function Class(props) {
    const [pageCount, setPageCount] = useState(0);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [subject, setSubject] = useState([])
    const [subjectId, setSubjectId] = useState(1)
    const [grade, setGrade] = useState([])
    const [gradeId, setGradeId] = useState(1)
    const [isSearch, SetIsSearch] = useState(false)
    const [isResult, setIsResult] = useState(true)
    const handleSelectSubjectId = (e) => {
        const getSubjectId = e.target.value
        setSubjectId(getSubjectId)
    }
    const handleSelectGradeId = (e) => {
        const getGradeId = e.target.value
        setGradeId(getGradeId)
    }

    let maxResult = 2;
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const response = await pagination(1, maxResult);
            const {data, status} = response?.data
            const total = data.total
            setPageCount(Math.floor(total / maxResult));

            if (data.data) {
                setData(data.data)
                setLoading(false)
            }
        }

        getSubject(subject).then(subject => setSubject(subject.data.data))
        getGrade(grade).then(grade => setGrade(grade.data.data))

        fetchData()

    }, [maxResult])
    const fetchSearchValue = async (currentPage, subjectId, gradeId) => {
        const response = await paginationSearch(currentPage, maxResult, subjectId, gradeId)
        const {data, status} = response?.data
        const total = data.total
        setPageCount(Math.floor(total / maxResult));
        const result = data.data
        return result

    }
    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)
        const dataFromSever = await fetchSearchValue(1, subjectId, gradeId)
        if (dataFromSever.length > 0) {
            setData(dataFromSever)
            setIsResult(true)
        } else {
            setIsResult(false)

        }

        SetIsSearch(true)
        setLoading(false)

    }
    const fetchData = async (currentPage) => {
        const response = await pagination(currentPage, maxResult);
        const {data} = await response?.data.data;
        return data;
    };
    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        setLoading(true)
        if (isSearch === true) {
            const dataFromSever = await fetchSearchValue(currentPage, subjectId, gradeId)
            setData(dataFromSever)
        } else {
            const commentsFormServer = await fetchData(currentPage);
            setData(commentsFormServer);
        }
        setLoading(false)
    };

    return (
        <LoadingOverlay active={loading} spinner text="Đang xử lý...">

            <div className={cx('wrapper')}>
                <Container>
                    <Row>
                        <Col lg={9} md={9} sm={12}>
                            <div className={cx('search-area')}>
                                <Row>
                                    <Col lg={7} md={6} sm={12}>
                                        <Form.Select className={cx('list-area')}
                                                     placeholder='Khu vực'
                                                     onChange={handleSelectSubjectId}
                                        >
                                            {subject.map((subject) => {
                                                return (
                                                    <option value={subject.id}>{subject.name}</option>
                                                )
                                            })}

                                        </Form.Select>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <Form.Select className={cx('list-area')}
                                                     placeholder='Khu vực'
                                                     onChange={handleSelectGradeId}
                                        >
                                            {grade.map((grade) => {
                                                return (
                                                    <option value={grade.id}>{grade.name}</option>
                                                )
                                            })}

                                        </Form.Select>
                                    </Col>
                                    <Col lg={2} md={12} sm={12}>
                                        <Button className={cx('btn-search', 'text-center', 'btn-success')}
                                                size="lg"
                                                onClick={handleSearch}
                                        >
                                            <FontAwesomeIcon icon={faSearch} className={cx('search-icon')}/>
                                            Tìm
                                        </Button>
                                    </Col>

                                </Row>
                            </div>
                            {!isResult && (<h3 className={cx('not-result')}>Không có kết quả tìm kiếm</h3>)}
                            {
                                isResult && (
                                    <div className={cx('information')}>
                                        {
                                            data.map((item) => {
                                                return (
                                                    <ClassItem key={item.id} data={item}/>
                                                )
                                            })

                                        }
                                        <PaginationTutor pageCount={pageCount} handlePageClick={handlePageClick}/>
                                    </div>
                                )
                            }
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
        </LoadingOverlay>
    );
}


export default Class;
