import classNames from 'classnames/bind';
import React, {useEffect, useState} from 'react';
import {Button, Col, Container, FloatingLabel, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from '../ReferenceTuition/ReferenceTuition.module.scss';
import {genders, ours} from "~/utils/FakeData";
import OptionItem from "~/pages/ReferenceTuition/OptionItem";
import {useMediaQuery} from "react-responsive";
import ReasonTutor from "~/layout/common/ReasonTutor";
import {
    createClass,
    fetchLevel,
    fetchGrade,
    fetchProvinces,
    fetchSubject,
    getDistrict,
    getWard
} from "~/services/workspaces.sevices";
import DatepickerMultiple from "~/layout/components/DatepickerMultiple/DatapickerMultipe";


const cx = classNames.bind(styles);


function SearchTutor(props) {
    const isTablet = useMediaQuery({maxWidth: 768})
    const maxWidth1024 = useMediaQuery({maxWidth: 1024})
    const maxWidth1200 = useMediaQuery({maxWidth: 1200})
    const convertTablet = () => {
        return `${isTablet ? 'row' : ''}`
    }
    const [subjects, setSubjects] = useState([])
    // get subject
    useEffect(() => {
        fetchSubject(subjects).then(subject => setSubjects(subject));
    }, [])
    //get Level


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleOnKeyPress = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const classTutor = {
        description: '',
        tuition: 0,
        title: "",
        status: "CREATE",
        subjectId: 1,
        gradeId: 1,
        createdBy: 1,
        genderTutor: "Nam",
        address: '',
        fullAddress: '',
        amountStudent: 1,
        level: '',
        dateStart: 0,
        dateEnd: 0,
        timeLesson: 0,
        time: 0

    }
    const [formValue, setFormValue] = useState(classTutor)
    const handleInput = (e) => {
        const {name, value} = e.target
        setFormValue({...formValue, [name]: value})
    }
    const [subjectId, setSubjectId] = useState(1)
    const handleSelectSubject = (e) => {
        const getSubjectId = e.target.value
        setSubjectId(getSubjectId)
    }
    const [gender, setGender] = useState(1)
    const handleSelectGender = (e) => {
        const getGender = e.target.value
        setGender(getGender)

    }
    const [levelId, setLevelId] = useState(1)
    const [level, setLevel] = useState([])
    const handleSelectLevel = (e) => {
        const getLevelId = e.target.value
        setLevelId(getLevelId)
    }
    useEffect(() => {
        fetchLevel(level).then(res => setLevel(res))
    }, [])


    const [provenceId, setProvenceId] = useState(1)
    const [provinces, setProvince] = useState([])

    const handleSelectProvince = (e) => {
        const getProvinceId = e.target.value
        setProvenceId(getProvinceId)

    }
    useEffect(() => {
        fetchProvinces(provinces).then(province => setProvince(province));
    }, [])

    const [district, setDistrict] = useState([])
    const [districtId, setDistrictId] = useState(provenceId)
    const [ward, setWard] = useState([])

    // console.log('pro:' + provenceId)
    const handleSelectDistrict = (e) => {
        const getDistrictId = e.target.value
        setDistrictId(getDistrictId)


    }
    // console.log('dis :' + districtId)


    useEffect(() => {
        // get district

        getDistrict(provenceId).then(res => setDistrict(res.data))
        // get ward

        getWard(districtId).then(res => setWard(res.data))


    }, [provenceId, districtId])


    const [wardId, setWardId] = useState(1)


    const handleSelectWardId = (e) => {
        const getWardId = e.target.value
        setWardId(getWardId)
    }
    const [our, setOur] = useState(30 * 60)
    const handleSelectOur = (e) => {
        const getOur = e.target.value
        setOur(getOur)

    }

    const [dates, setDates] = useState([]);
    const TimeWeeks = dates.map(function (dateStr) {
        return new Date(dateStr);
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFormValue = {
            tuition: parseInt(formValue.tuition),
            title: formValue.title,
            description: formValue.description,
            subjectId: parseInt(subjectId),
            gradeId: 1,
            createdBy: 30,
            classRequirement: {
                genderTutor: gender,
                address: {
                    address: formValue.address,
                    fullAddress: formValue.fullAddress,
                    wardId: parseInt(wardId),
                    type: 'CLASS'
                },
                amountStudent: parseInt(formValue.amountStudent),
                level: levelId,
                dateStart: startDate.getTime(),
                dateEnd: endDate.getTime(),
                timeLesson: parseInt(our)
            },
            requireRelationshipTimeWeeks:
                TimeWeeks.map((item) => {
                    return {
                        date: item.getDate(),
                        hours: item.getHours(),
                        minutes: item.getMinutes()
                    }
                })


        }
        console.log(newFormValue)
        createClass(newFormValue).then(res => res)


    }


    // const animatedComponents = makeAnimated();
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        <div className={cx('detail-content')} onSubmit={handleSubmit}>
                            <h3 className={cx('title')}>Mô tả yêu cầu tìm gia sư </h3>
                            <Row>
                                <Col lg={12}>
                                    <Form.Label className={cx('description')}>Tóm tắt yêu cầu (tối đa 20 từ)
                                        *</Form.Label>
                                    <Form.Control
                                        name='title'
                                        onChange={handleInput}
                                        value={formValue.title}
                                        size='sm'
                                        type="text"
                                        placeholder="Ví dụ: Tìm gia sư tiếng Anh tại Quận 6 Hồ Chí Minh"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Form.Label className={cx('description')}>Địa điểm dạy *</Form.Label>
                                    <Form.Control
                                        name="address"
                                        onChange={handleInput}
                                        value={formValue.address}
                                        size='sm'
                                        type="text"
                                        placeholder="Nhập vị trí"
                                    />
                                </Col>
                                <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()} md={maxWidth1024 ? 6 : 2}
                                     sm={12}>
                                    <Form.Label className={cx('description')}>Số học viên *</Form.Label>
                                    <Form.Control
                                        name='amountStudent'
                                        onChange={handleInput}
                                        onKeyPress={handleOnKeyPress}
                                        value={formValue.amountStudent}
                                        size="sm"
                                        type="number"
                                    />
                                </Col>
                                <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()} md={maxWidth1024 ? 6 : 2}
                                     sm={12}>
                                    <Form.Label className={cx('description')}>Ngày bắt đầu *</Form.Label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showDisabledMonthNavigation
                                        minDate={new Date()}
                                        className={cx('date')}
                                    />

                                </Col>
                                <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()} md={maxWidth1024 ? 6 : 2}
                                     sm={12}>
                                    <Form.Label className={cx('description')}>Ngày kết thúc *</Form.Label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        showDisabledMonthNavigation
                                        minDate={new Date()}
                                        className={cx('date')}
                                    />

                                </Col>

                            </Row>
                            <Row>
                                <Col lg={3}>
                                    <Form.Label
                                        className={cx('description')}>Tỉnh*
                                    </Form.Label>
                                    <Form.Select
                                        onChange={handleSelectProvince}
                                        style={{padding: '14px 18px'}}
                                        size='lg'>
                                        {
                                            provinces.map((item) => {
                                                return (
                                                    <OptionItem key={item.id} value={item.id} children={item.name}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col lg={3}>
                                    <Form.Label className={cx('description')}>Huyện*</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}}
                                                 onChange={handleSelectDistrict}
                                                 size='lg'>
                                        {
                                            district.map((item) => {
                                                return (
                                                    <OptionItem key={item.id} value={item.id} children={item.name}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col lg={6}>
                                    <Form.Label className={cx('description')}>Phường *</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}}
                                                 onChange={handleSelectWardId}
                                                 size='lg'>
                                        {
                                            ward.map((item) => {
                                                return (
                                                    <OptionItem key={item.id} value={item.id} children={item.name}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Form.Label className={cx('description')}>Địa chỉ đầy đủ*</Form.Label>
                                    <Form.Control
                                        name="fullAddress"
                                        onChange={handleInput}
                                        value={formValue.fullAddress}
                                        size='sm'
                                        type="text"
                                        placeholder="Nhập vị trí"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={maxWidth1200 ? 4 : 2} style={{padding: '12px 12px'}}>
                                    <Form.Label className={cx('description')}>Giờ mỗi buổi</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}}
                                                 onChange={handleSelectOur}
                                                 size='lg'>
                                        {
                                            ours.map((item) => {
                                                return (
                                                    <OptionItem value={item.value} key={item.id} children={item.our}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col lg={6} className={cx('item')}>
                                    <Form.Label
                                        className={cx('description')}>Môn dạy
                                    </Form.Label>
                                    <Form.Label
                                        className={cx('note')}>*
                                    </Form.Label>
                                    <Form.Select onChange={handleSelectSubject} style={{padding: '14px 18px'}}
                                                 size='lg'>
                                        {
                                            subjects.map((item) => {
                                                return (
                                                    <OptionItem key={item.id} value={item.id} children={item.name}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>

                                {/*<Col lg={6} className={cx('item')}>*/}
                                {/*    <Form.Label className={cx('description', 'gender')}>Giới tính học viên*/}
                                {/*        *</Form.Label>*/}
                                {/*    <br/>*/}
                                {/*    <ButtonGroup size="lg" className="mb-2">*/}
                                {/*        <Button className={cx('btn-gender')}>Nam</Button>*/}
                                {/*        <Button className={cx('btn-gender')}>Nữ</Button>*/}
                                {/*        <Button className={cx('btn-gender')}>Có cả nam và nữ</Button>*/}
                                {/*    </ButtonGroup>*/}
                                {/*</Col>*/}
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Form.Label
                                        className={cx('description')}> Thời gian bạn có thể nhân lớp
                                    </Form.Label>
                                    <DatepickerMultiple dates={dates} setDates={setDates}/>

                                </Col>
                            </Row>
                            <h3 className={cx('title')}>Yêu cầu gia sư</h3>
                            <Row>
                                <Col lg={4}>
                                    <Form.Label className={cx('description')}>Giới tính</Form.Label>
                                    <Form.Select onChange={handleSelectGender} style={{padding: '14px 18px'}} size='lg'>
                                        {
                                            genders.map((item) => {
                                                return (
                                                    <OptionItem value={item.value} key={item.id}
                                                                children={item.gender}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col lg={2}>
                                    <Form.Label className={cx('description')}>Trình độ</Form.Label>
                                    <Form.Select style={{padding: '14px 18px'}} size='lg' onChange={handleSelectLevel}>
                                        {
                                            level.map((item) => {
                                                return (
                                                    <OptionItem value={item.id} key={item.id} children={item.name}/>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                                <Col lg={2}>
                                    <Form.Label className={cx('description')}>Học phí(vnđ)</Form.Label>
                                    <Form.Control
                                        name='tuition'
                                        onChange={handleInput}
                                        value={formValue.tuition}
                                        size="sm"
                                        type="number"
                                        placeholder="ví dụ: 300000"/>
                                </Col>


                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Form.Label className={cx('description')}>Mô tả chi tiết *</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label=''>
                                        <Form.Control
                                            name="description"
                                            onChange={handleInput}
                                            value={formValue.description}
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{height: '115px'}}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>


                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <ReasonTutor/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <center>
                            <Button
                                onClick={handleSubmit}
                                style={{marginTop: '20px'}}
                                className={cx('btn', 'btn-success')}
                                size="lg">
                                Đăng yêu cầu
                            </Button>
                        </center>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default SearchTutor;
