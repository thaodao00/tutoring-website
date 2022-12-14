import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingOverlay from 'react-loading-overlay';

import styles from './Class.module.scss';
import 'animate.css';
import ClassItem from "~/pages/Class/ClassItem";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FaHandPointRight } from "react-icons/fa";
import { tagLinks } from "~/utils/FakeData";
import PaginationTutor from "~/layout/common/PaginationTutor";
import {
    getDataBySubjectIdGradeId,
    getGrade,
    getSubject,
    pagination, paginationByGradeId,
    paginationBySubjectId,
    paginationSearch,
} from "~/services/workspaces.sevices";
import config from "~/config";


const cx = classNames.bind(styles);


function Class(props) {
    const [pageCount, setPageCount] = useState(0);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [subject, setSubject] = useState([])
    const [subjectId, setSubjectId] = useState('ALL')
    const [grade, setGrade] = useState([])
    const [gradeId, setGradeId] = useState('ALL')
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

    let maxResult = 10;
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const response = await pagination(1, maxResult);
            const { data, status } = response?.data
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
    const fetchSearchValue = async (subjectId, gradeId) => {
        const response = await getDataBySubjectIdGradeId(subjectId, gradeId)
        const { data, status } = response?.data
        const total = data.total
        const currentPage = (Math.ceil(total / maxResult))
        setPageCount(currentPage)
        return data.data



    }
    const fetchData = async (currentPage) => {
        const response = await pagination(currentPage, maxResult);
        const { data } = await response?.data;
        const total = data.total
        setPageCount(Math.floor(total / maxResult))
        return data.data;
    };
    const fetchDataBySubjectId = async (currentPage, subjectId) => {
        const response = await paginationBySubjectId(subjectId);
        const { data } = await response?.data;
        const total = data.total
        setPageCount(Math.ceil(total / maxResult))
        return data.data


    };
    const fetchDataByGradeId = async (currentPage, gradeId) => {
        const response = await paginationByGradeId(gradeId);
        const { data } = await response?.data;
        const total = data.total
        setPageCount(Math.ceil(total / maxResult))
        return data.data

    };

    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (subjectId === 'ALL' && gradeId === 'ALL') {
            e.preventDefault()
            window.location.reload();


        } else if (gradeId === 'ALL' && subjectId !== 'ALL') {
            const data = await fetchDataBySubjectId(1, subjectId)
            if (data.length > 0) {
                setData(data)
                setIsResult(true)
            } else {
                setIsResult(false)
            }

        }
        else if (gradeId !== 'ALL' && subjectId === 'ALL') {
            const data = await fetchDataByGradeId(1, gradeId)
            if (data.length > 0) {
                setData(data)
                setIsResult(true)
            } else {
                setIsResult(false)
            }

        } else {
            const dataFromSever = await fetchSearchValue(subjectId, gradeId)
            if (dataFromSever.length > 0) {
                setData(dataFromSever)
                setIsResult(true)
                SetIsSearch(true)
            } else {
                setIsResult(false)

            }
        }


        setLoading(false)

    }


    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        setLoading(true)
        if (isSearch === true) {
            const dataFromSever = await fetchSearchValue(subjectId, gradeId)
            setData(dataFromSever)
        }

        else if (gradeId === 'ALL' && subjectId !== 'ALL') {
            const commentsFormServer = await fetchDataBySubjectId(currentPage, subjectId);
            setData(commentsFormServer);
        } else if (gradeId !== 'ALL' && subjectId === 'ALL') {
            const commentsFormServer = await fetchDataByGradeId(currentPage, gradeId);
            setData(commentsFormServer);
        } else {
            const commentsFormServer = await fetchData(currentPage);
            setData(commentsFormServer);
        }
        setLoading(false)
    };

    return (
        <LoadingOverlay active={loading} spinner text="??ang x??? l??...">

            <div className={cx('wrapper')}>
                <Container>
                    <Row>
                        <Col lg={9} md={9} sm={12}>
                            <div className={cx('search-area')}>
                                <Row>
                                    <Col lg={7} md={6} sm={12}>
                                        <Form.Select className={cx('list-area', 'fs-4')}
                                            placeholder='Khu v???c'
                                            onChange={handleSelectSubjectId}
                                        >


                                            {subject.map((subject) => {
                                                return (
                                                    <option value={subject.id}>{subject.name}</option>

                                                )
                                            })}
                                            <option value={'ALL'}>T???t c???</option>

                                        </Form.Select>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <Form.Select className={cx('list-area', 'fs-4')}
                                            placeholder='Khu v???c'
                                            onChange={handleSelectGradeId}
                                        >

                                            {grade.map((grade) => {
                                                return (
                                                    <option value={grade.id}>{grade.name}</option>
                                                )
                                            })}
                                            <option value={'ALL'}>T???t c???</option>

                                        </Form.Select>
                                    </Col>
                                    <Col lg={2} md={12} sm={12}>
                                        <Button className={cx('btn-search', 'text-center', 'btn-success')}
                                            size="lg"
                                            onClick={handleSearch}
                                        >
                                            <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                                            T??m
                                        </Button>
                                    </Col>

                                </Row>
                            </div>
                            {!isResult && (<h3 className={cx('not-result')}>Kh??ng c?? k???t qu??? t??m ki???m</h3>)}
                            {
                                isResult && (
                                    <div className={cx('information')}>
                                        {
                                            data.map((item) => {
                                                return (
                                                    <ClassItem key={item.id} data={item} />
                                                )
                                            })

                                        }
                                        <PaginationTutor pageCount={pageCount} handlePageClick={handlePageClick} />
                                    </div>
                                )
                            }
                        </Col>

                        <Col lg={3} md={3} sm={12}>
                            <div className={cx('sidebar-right')}>
                                <div className={cx('widget')}>
                                    <center>
                                        <p>"B???n ???? tham gia ?????i ng?? Gia S?? c???a ch??ng t??i ch??a??"</p>
                                        <a href={config.routes.registerAsTutor} className={cx('btn-register')}>????ng k???
                                            l??m gia s??</a>
                                    </center>
                                </div>
                                <div className={cx('widget-hotline')}>
                                    <center>
                                        <h4 className={cx('text')}>H??y g???i ngay:</h4>
                                        <a className={cx('hotline-link')} href=''>093 143 9203</a>
                                        <h4 className={cx('text')}>Ho???c</h4>
                                        <a className={cx('hotline-link')} href=''>093 143 9203</a>
                                        <h4 className={cx('text')}>????? ???????c h??? tr???</h4>
                                    </center>
                                </div>
                                <div className={cx('need')}>
                                    <h5 className={cx('need-title', 'line-bottom')}>Gia s?? c???n bi???t</h5>
                                    <a className={cx('need-link')} href="">
                                        <FaHandPointRight style={{ marginRight: '4px' }} />
                                        Quy tr??nh nh???n l???p
                                    </a>
                                    <a className={cx('need-link')} href="">
                                        <FaHandPointRight style={{ marginRight: '4px' }} />
                                        H???p ?????ng m???u
                                    </a>
                                </div>
                                <div className={cx('tag')}>
                                    <h5 className={cx('need-title', 'line-bottom')}>Gia s?? c???n bi???t</h5>
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
