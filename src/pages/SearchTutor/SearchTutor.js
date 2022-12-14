import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import * as yup from 'yup';

import styles from '../ReferenceTuition/ReferenceTuition.module.scss';
import { genders, ours } from "~/utils/FakeData";
import OptionItem from "~/pages/ReferenceTuition/OptionItem";
import { useMediaQuery } from "react-responsive";
import ReasonTutor from "~/layout/common/ReasonTutor";
import {
    createClass,
    fetchLevel,
    fetchProvinces,
    fetchSubject,
    getDistrict,
    getWard,
    getGrade,
    getCoin
} from "~/services/workspaces.sevices";
import { useDispatch, useSelector } from 'react-redux';
import { FaCoins } from 'react-icons/fa';
import LoadingOverlay from 'react-loading-overlay';

import { NotificationContainer, NotificationManager } from 'react-notifications';

const cx = classNames.bind(styles);


function SearchTutor(props) {
    const { user } = useSelector((state) => state.auth)
    const [coin, setCoins] = useState()

    const isTablet = useMediaQuery({ maxWidth: 768 })
    const maxWidth1024 = useMediaQuery({ maxWidth: 1024 })
    const maxWidth1200 = useMediaQuery({ maxWidth: 1200 })
    const dispatch = useDispatch()
    const convertTablet = () => {
        return `${isTablet ? 'row' : ''}`
    }
    const [subjects, setSubjects] = useState([])
    const [loading, setLoading] = useState(false)

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
        const { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }
    const [subjectId, setSubjectId] = useState(1)
    const handleSelectSubject = (e) => {
        const getSubjectId = e.target.value
        setSubjectId(getSubjectId)
    }
    const [gender, setGender] = useState("MALE")
    const handleSelectGender = (e) => {
        const getGender = e.target.value
        setGender(getGender)

    }
    const [levelId, setLevelId] = useState("STUDENT")
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
    const [districtId, setDistrictId] = useState(1)
    const [ward, setWard] = useState([])

    // console.log('pro:' + provenceId)
    const handleSelectDistrict = (e) => {
        const getDistrictId = e.target.value
        setDistrictId(getDistrictId)
    }
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
    const fetchCoin = async () => {

        const res = await getCoin()
        setCoins(res?.data?.data?.balance)
    }
    useEffect(() => {
        fetchCoin()

    }, [])
    const schema = yup.object().shape({
        title: yup.string().required('Ti??u ????? kh??ng ???????c ????? tr???ng!'),
        address: yup.string().required('?????a ch??? kh??ng ???????c ????? tr???ng!'),
        description: yup.string().required('M?? t??? kh??ng ???????c ????? tr???ng!'),

    });

    const handleSubmit = async (data) => {
        setLoading(true)
        const fullA = "";
        let districtName = "";
        let provenceName = "";
        let addDetial = data.address
        let wardName = ""
        ward.map((item, index) => {
            if (item.id === parseInt(wardId)) {
                wardName = item.name
            }
            return wardName

        })
        provinces.map((item, index) => {
            if (item.id === parseInt(provenceId)) {
                provenceName = item.name
            }
            return provenceName
        })
        district.map((item, index) => {
            if (item.id === parseInt(districtId)) {
                districtName = item.name
            }
            return districtName
        })
        const newFormValue = {
            tuition: parseInt(formValue.tuition),
            title: data.title,
            description: data.description,
            subjectId: parseInt(subjectId),
            gradeId: parseInt(grade),
            createdBy: user.id,
            classRequirement: {
                genderTutor: gender,
                address: {
                    address: data.address,
                    fullAddress: fullA.concat(addDetial, ", ", wardName, ", ", districtName, ", ", provenceName),
                    wardId: parseInt(wardId),
                },
                amountStudent: parseInt(formValue.amountStudent),
                level: levelId,
                dateStart: startDate.getTime(),
                dateEnd: endDate.getTime(),
                timeLesson: parseInt(our)
            },
            requireRelationshipTimeWeeks: selectList

        }

        await createClass(newFormValue).then((res) => {

            if (res.data.status === 1) {
                NotificationManager.success(res.data.message);

            }
            else {
                NotificationManager.error(res.data.message);
            }
        })
            .catch((e) => NotificationManager.error(e.response.data.message));

        setLoading(false)


    }


    const day = [
        {
            name: "Th??? 2",
            value: 2,
        },
        {
            name: "Th??? 3",
            value: 3,
        },
        {
            name: "Th??? 4",
            value: 4,
        },
        {
            name: "Th??? 5",
            value: 5,
        },
        {
            name: "Th??? 6",
            value: 6,
        },
        {
            name: "Th??? 7",
            value: 7,
        },
        {
            name: "Ch??? Nh???t",
            value: 1,
        },
    ]
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,]
    const [selectList, setSelectList] = useState([{ day: 2, hours: 1, minutes: 1 },]);
    const [grade, setGrade] = useState(1)
    const [gradeData, setGradeData] = useState([])
    const fetchGrade = async () => {
        const res = await getGrade()
        const { data } = res?.data
        setGradeData(data)
    }
    const handleSelectChange = (index, e) => {
        const list = [...selectList]
        list[index][e.target.name] = e.target.value
        setSelectList(list);

    }
    const handleSelectClick = () => {
        setSelectList([...selectList, { day: 2, hours: 1, minutes: 1 }])
    }
    const handleSelectRemove = index => {
        const list = [...selectList]
        list.splice(index, 1)
        setSelectList(list)
    }
    useEffect(() => {
        fetchGrade()
    }, [])
    return (
        <>
            <LoadingOverlay active={loading} spinner text="??ang x??? l??...">
                <div className="card text-white">
                    <div className={cx('img-class')}></div>
                    <div
                        className={cx("overlay", "card-img-overlay d-flex flex-column align-items-center justify-content-center")}>
                        <h5 className={cx("text-title", "card-title fw-bold fs-1")}>T??M GIA S??</h5>
                        <p className="card-text text-center fs-2">
                            D??? d??ng ti???p c???n v???i c??c gia s?? theo y??u c???u c???a b???n th??n, <br /> b???n ch??? c???n ????ng b??i t??m
                            gia s?? <br /> v???i chi ph?? l??<span
                                className={cx('text-coin', ' fs-1 fw-bold')}> 5 coin <FaCoins /></span> cho m???t b??i ????ng.
                        </p>
                        {/* <p className="card-text"></p> */}
                    </div>
                </div>

                <div className={cx('wrapper')}>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            onSubmit={handleSubmit}
                            initialValues={{
                                title: '',
                                address: '',
                                description: ''

                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={12} md={8} lg={8}>
                                            <div className={cx('detail-content')}>
                                                <h3 className={cx('title')}>M?? t??? y??u c???u t??m gia s?? </h3>
                                                <Row>
                                                    <Form.Group as={Col} lg={12} className="position-relative">

                                                        <Form.Label className={cx('description')}>T??m t???t y??u c???u
                                                            (t???i
                                                            ??a 20 t???)
                                                            *</Form.Label>
                                                        <Form.Control
                                                            name='title'
                                                            onChange={handleChange}
                                                            value={values.title}
                                                            isInvalid={!!errors.title}
                                                            size='sm'
                                                            type="text"
                                                            placeholder="V?? d???: T??m gia s?? ti???ng Anh t???i Qu???n 6 H??? Ch?? Minh"
                                                        />
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            {errors.title}
                                                        </Form.Control.Feedback>

                                                    </Form.Group>

                                                </Row>
                                                <Row>
                                                    <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()}
                                                        md={maxWidth1024 ? 6 : 2}
                                                        sm={12}>
                                                        <Form.Label style={{ marginTop: '20px' }} className={cx('description')}>S??? h???c vi??n
                                                            *</Form.Label>
                                                        <Form.Control
                                                            name='amountStudent'
                                                            onChange={handleInput}
                                                            onKeyPress={handleOnKeyPress}
                                                            value={formValue.amountStudent}
                                                            size="sm"
                                                            type="text"
                                                        />
                                                    </Col>
                                                    <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()}
                                                        md={maxWidth1024 ? 6 : 2}
                                                        sm={12}>
                                                        <Form.Label style={{ marginTop: '20px' }} className={cx('description')}>Ng??y b???t ?????u
                                                            *</Form.Label>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={(date) => setStartDate(date)}
                                                            showDisabledMonthNavigation
                                                            minDate={new Date()}
                                                            className={cx('date')}
                                                        />

                                                    </Col>
                                                    <Col lg={maxWidth1200 ? 6 : 2} bsPrefix={convertTablet()}
                                                        md={maxWidth1024 ? 6 : 2}
                                                        sm={12}>
                                                        <Form.Label style={{ marginTop: '20px' }} className={cx('description')}>Ng??y k???t th??c
                                                            *</Form.Label>
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
                                                            className={cx('description')}>T???nh *
                                                        </Form.Label>
                                                        <Form.Select

                                                            onChange={handleSelectProvince}
                                                            style={{ padding: '14px 18px' }}
                                                            size='lg'>
                                                            <OptionItem children="Ch???n T???nh" />

                                                            {
                                                                provinces.map((item) => {
                                                                    return (
                                                                        <OptionItem key={item.id} value={item.id}
                                                                            children={item.name} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <Form.Label className={cx('description')}>Huy???n*</Form.Label>
                                                        <Form.Select style={{ padding: '14px 18px' }}
                                                            onChange={handleSelectDistrict}
                                                            size='lg'>
                                                            <OptionItem children="Ch???n Huy???n" />

                                                            {
                                                                district.map((item) => {
                                                                    return (
                                                                        <OptionItem key={item.id} value={item.id}
                                                                            children={item.name} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Label className={cx('description')}>Ph?????ng *</Form.Label>
                                                        <Form.Select style={{ padding: '14px 18px' }}
                                                            onChange={handleSelectWardId}
                                                            size='lg'>
                                                            <OptionItem children="Ch???n Ph?????ng" />
                                                            {
                                                                ward.map((item) => {
                                                                    return (
                                                                        <OptionItem key={item.id} value={item.id}
                                                                            children={item.name} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg={12} className="position-relative">
                                                        <Form.Label className={cx('description')}>?????a ch??? c???
                                                            th???*</Form.Label>
                                                        <Form.Control
                                                            name="address"
                                                            onChange={handleChange}
                                                            value={values.address}
                                                            isInvalid={!!errors.address}
                                                            size='sm'
                                                            type="text"
                                                            placeholder="S??? nh??, h???m"
                                                        />
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            {errors.address}
                                                        </Form.Control.Feedback>

                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Col lg={maxWidth1200 ? 4 : 2} style={{ padding: '12px 12px' }}>
                                                        <Form.Label className={cx('description')}>Gi??? m???i
                                                            bu???i</Form.Label>
                                                        <Form.Select style={{ padding: '14px 18px' }}
                                                            onChange={handleSelectOur}
                                                            size='lg'>
                                                            {
                                                                ours.map((item) => {
                                                                    return (
                                                                        <OptionItem value={item.value} key={item.id}
                                                                            children={item.our} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    <Col lg={6} className={cx('item')}>
                                                        <Form.Label
                                                            className={cx('description')}>M??n d???y
                                                        </Form.Label>
                                                        <Form.Label
                                                            className={cx('note')}>*
                                                        </Form.Label>
                                                        <Form.Select onChange={handleSelectSubject}
                                                            style={{ padding: '14px 18px' }}
                                                            size='lg'>
                                                            {
                                                                subjects.map((item) => {
                                                                    return (
                                                                        <OptionItem key={item.id} value={item.id}
                                                                            children={item.name} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    <Col lg={4} className={cx('item')}>
                                                        <Form.Label
                                                            className={cx('description')}>Kh???i l???p
                                                        </Form.Label>
                                                        <Form.Label
                                                            className={cx('note')}>*
                                                        </Form.Label>
                                                        <Form.Select value={grade}
                                                            onChange={e => setGrade(e.target.value)}
                                                            style={{ padding: '14px 18px' }}
                                                            size='lg'>
                                                            {
                                                                gradeData.map((item) => {
                                                                    return (
                                                                        <OptionItem key={item.id} value={item.id}
                                                                            children={item.name} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Form.Label
                                                            className={cx('description', "m-3")}> Th???i gian b???n c?? th???
                                                            nh??n l???p
                                                        </Form.Label>
                                                    </Col>
                                                    <Col lg={12}>
                                                        {selectList.map((item, i) => {
                                                            return (
                                                                <div className='d-flex mb-2 align-items-end' key={i}>
                                                                    <div className='d-flex flex-column'>
                                                                        <Form.Label
                                                                            className={cx('description', "ms-3")}> Th???
                                                                        </Form.Label>
                                                                        <select style={{ padding: '12px 12px' }}
                                                                            className="mx-3" name='day'
                                                                            value={parseInt(item.day)}
                                                                            onChange={(e) => handleSelectChange(i, e)}>
                                                                            {day.map((item, index) => {
                                                                                return (
                                                                                    <option key={index}
                                                                                        value={item.value}>{item.name}</option>
                                                                                )
                                                                            })}
                                                                        </select>
                                                                    </div>
                                                                    <div className='d-flex flex-column'>
                                                                        <Form.Label
                                                                            className={cx('description', "ms-3")}> Gi???
                                                                        </Form.Label>
                                                                        <select style={{ padding: '12px 12px' }}
                                                                            className="mx-3" name='hours'
                                                                            value={parseInt(item.hours)}
                                                                            onChange={(e) => handleSelectChange(i, e)}>
                                                                            {hours.map((item, index) => {
                                                                                return (
                                                                                    <option key={index}
                                                                                        value={item}>{item}</option>
                                                                                )
                                                                            })}
                                                                        </select>
                                                                    </div>
                                                                    <div className='d-flex flex-column'>
                                                                        <Form.Label
                                                                            className={cx('description', "ms-3")}> Ph??t
                                                                        </Form.Label>
                                                                        <select style={{ padding: '12px 12px' }}
                                                                            className="mx-3 " name='minutes'
                                                                            value={parseInt(item.minutes)}
                                                                            onChange={(e) => handleSelectChange(i, e)}>
                                                                            {minutes.map((item, index) => {
                                                                                return (
                                                                                    <option key={index}
                                                                                        value={item}>{item}</option>
                                                                                )
                                                                            })}
                                                                        </select>
                                                                    </div>
                                                                    {selectList.length !== 1 &&
                                                                        <div className='px-3'>
                                                                            <button
                                                                                className='btn btn-dark me-1 fw-bold fs-5 p-3'
                                                                                onClick={() => handleSelectRemove(i)}>
                                                                                X??A
                                                                            </button>
                                                                        </div>

                                                                    }
                                                                    {selectList.length - 1 === i &&
                                                                        <div className='px-3'>
                                                                            <button
                                                                                className='btn btn-dark fw-bold fs-5 p-3'
                                                                                onClick={handleSelectClick}>
                                                                                TH??M
                                                                            </button>
                                                                        </div>

                                                                    }
                                                                </div>
                                                            )
                                                        })}
                                                    </Col>
                                                </Row>
                                                <h3 className={cx('title')}>Y??u c???u gia s??</h3>
                                                <Row>
                                                    <Col lg={4}>
                                                        <Form.Label className={cx('description')}>Gi???i t??nh</Form.Label>
                                                        <Form.Select onChange={handleSelectGender}
                                                            style={{ padding: '14px 18px' }} size='lg'>
                                                            {
                                                                genders.map((item) => {
                                                                    return (
                                                                        <OptionItem value={item.value} key={item.id}
                                                                            children={item.gender} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    <Col lg={2}>
                                                        <Form.Label className={cx('description')}>Tr??nh ?????</Form.Label>
                                                        <Form.Select style={{ padding: '14px 18px' }} size='lg'
                                                            onChange={handleSelectLevel}>
                                                            {
                                                                level.map((item) => {
                                                                    return (
                                                                        <OptionItem value={item.id} key={item.id}
                                                                            children={item.name === "H???c sinh" ? ("Sinh Vi??n") : ("Gi??o Vi??n")} />
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    <Col lg={2}>
                                                        <Form.Label className={cx('description')}>H???c
                                                            ph??(vn??)</Form.Label>
                                                        <Form.Control
                                                            name='tuition'
                                                            onChange={handleInput}
                                                            onKeyPress={handleOnKeyPress}
                                                            value={formValue.tuition}
                                                            size="sm"
                                                            type="text"
                                                            placeholder="v?? d???: 300000" />
                                                    </Col>


                                                </Row>
                                                <Row>
                                                    <Form.Group as={Col} lg={12} className="position-relative">
                                                        <Form.Label className={cx('description')}>M?? t??? chi ti???t *</Form.Label>
                                                        <Form.Control
                                                            name="description"
                                                            onChange={handleChange}
                                                            value={values.description}
                                                            isInvalid={!!errors.description}
                                                            as="textarea"
                                                            placeholder="Leave a comment here"
                                                            style={{ height: '115px' }}
                                                        />
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            {errors.description}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <Col lg={12}>
                                                        <center>
                                                            <Button
                                                                onClick={() => handleSubmit()}
                                                                style={{ marginTop: '20px' }}
                                                                className={cx('btn', 'btn-success px-4 py-3')}
                                                                size="lg">
                                                                ????ng y??u c???u
                                                            </Button>
                                                        </center>
                                                    </Col>
                                                </Row>


                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <ReasonTutor />
                                        </Col>
                                    </Row>

                                </Form>
                            )}
                        </Formik>


                    </Container>
                </div>
                <NotificationContainer />
            </LoadingOverlay>

        </>

    );
}

export default SearchTutor;
