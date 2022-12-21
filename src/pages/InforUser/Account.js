/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getUserInfo, updateInfoUser } from '~/redux/auth/actions';
import OptionItem from '../ReferenceTuition/OptionItem';
import { fetchProvinces, getDistrict, getSubjectByTutor, getWard, updateUser } from '~/services/workspaces.sevices';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LoadingOverlay from 'react-loading-overlay';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

function Account() {
    const { user, message } = useSelector((state) => state.auth);
    const auth = useSelector((state) => state.auth);
    const [phone, setPhone] = useState(user.phone)
    const [username, setUsername] = useState(user.name)
    const [introduce, setIntroduce] = useState(user.introduce)
    const [date, setDate] = useState(new Date(user.birthday).toLocaleDateString())
    const [gender, setGender] = useState(user.gender)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [provenceId, setProvenceId] = useState()
    const [provinces, setProvince] = useState([])
    const [district, setDistrict] = useState([])
    const [districtId, setDistrictId] = useState()
    const [ward, setWard] = useState([])
    const [subject, setSubject] = useState([]);

    const [wardId, setWardId] = useState(user.address?.wardId || '')
    const handleSelectProvince = (e) => {
        const getProvinceId = e.target.value
        setProvenceId(getProvinceId)
    }
    useEffect(() => {
        fetchProvinces().then(province => setProvince(province));
    }, [auth])

    const [addressData, setAddressData] = useState(user.addresses)

    let addD = ""
    let addF = ""
    addressData.map((item) => {
        return (
            addD = item.address,
            addF = item.fullAddress
        )
    })
    const [addressDetail, setAddressDetail] = useState(addD)
    const [fullAddress, setAddressFull] = useState(addF)
    const arrA = addF.split(",")
    const listA = [...arrA]

    const handleSelectDistrict = (e) => {
        const getDistrictId = e.target.value
        setDistrictId(getDistrictId)
    }
    const handleSelectWardId = (e) => {
        const getWardId = e.target.value
        setWardId(getWardId)
    }
    useEffect(() => {
        getDistrict(provenceId).then(res => setDistrict(res.data))
    }, [provenceId])
    useMemo(() => {
        getWard(districtId).then(res => setWard(res.data))
    }, [districtId])

    let fullA = "";
    let districtName = listA[2];
    let provenceName = listA[3];
    let wardName = listA[1];
    console.log(wardName, "222");

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

    const handleInput = (e) => {
        setAddressDetail(e.target.value)
        setAddressFull(fullA.concat(e.target.value, ", ", wardName, ", ", districtName, ", ", provenceName))
        console.log(fullAddress, 11);


    }
    console.log(fullAddress, 22);
    useEffect(() => {
        setAddressFull(fullA.concat(addressDetail, ", ", wardName, ", ", districtName, ", ", provenceName))
        console.log(fullAddress, 33);

    }, [addressDetail, wardName, districtName, provenceName, fullAddress])


    const handleUpdateUser = async () => {
        setLoading(true)
        setAddressFull(fullAddress)
        const address = {
            "address": addressDetail,
            "fullAddress": fullAddress,
            "wardId": wardId
        }
        const body = {
            id: user.id,
            name: username,
            gender: gender,
            phone: phone,
            birthday: new Date(date).getTime(),
            introduce: introduce,
            address: address
        }
        await updateUser(body).then((res) => {
            if (res.data.status === 1) {
                NotificationManager.success(res.data.message);
                dispatch(getUserInfo())
            }
            else {
                NotificationManager.error(res.data.message);
            }
        })
            .catch((e) => NotificationManager.error(e.response.data.message));
        setLoading(false)

    }

    useEffect(() => {
        async function fetchSubject() {
            const res = await getSubjectByTutor()
            const { data: { data }, } = res
            console.log(data, "daa");
            if (data) {
                setSubject(data)
            }
        }
        fetchSubject()
    }, [])
    return (
        <>
            <LoadingOverlay active={loading} spinner text="Đang xử lý...">
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
                            <Form.Control value={date} onChange={(e) => { setDate(e.target.value) }} size='sm' type="text" placeholder='mm/dd/yy' />
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col lg={3}>
                            <Form.Label
                                className={cx('description')}>Tỉnh *
                            </Form.Label>
                            <Form.Select

                                onChange={handleSelectProvince}
                                style={{ padding: '14px 18px' }}
                                size='lg'>
                                <OptionItem children="Chọn Tỉnh" />

                                {
                                    provinces.map((item) => {
                                        return (
                                            <OptionItem key={item.id} value={item.id} children={item.name} />
                                        )
                                    })
                                }
                            </Form.Select>
                        </Col>
                        <Col lg={3}>
                            <Form.Label className={cx('description')}>Huyện*</Form.Label>
                            <Form.Select style={{ padding: '14px 18px' }}
                                onChange={handleSelectDistrict}
                                size='lg'>
                                <OptionItem children="Chọn Huyện" />

                                {
                                    district.map((item) => {
                                        return (
                                            <OptionItem key={item.id} value={item.id} children={item.name} />
                                        )
                                    })
                                }
                            </Form.Select>
                        </Col>
                        <Col lg={3}>
                            <Form.Label className={cx('description')}>Phường *</Form.Label>
                            <Form.Select style={{ padding: '14px 18px' }}
                                onChange={handleSelectWardId}
                                size='lg'>
                                <OptionItem children="Chọn Phường" />

                                {
                                    ward.map((item) => {
                                        return (
                                            <OptionItem key={item.id} value={item.id} children={item.name} />
                                        )
                                    })
                                }
                            </Form.Select>
                        </Col>

                        <Col lg={3}>
                            <Form.Label className={cx('description')} >Địa chỉ cụ thể*</Form.Label>
                            <Form.Control
                                name="address"
                                onChange={handleInput}
                                value={addressDetail}
                                size='sm'
                                type="text"
                                placeholder="Số nhà, hẻm"
                            />
                        </Col>

                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Form.Label className={cx('description')} >Địa chỉ</Form.Label>
                            <Form.Control
                                disabled
                                // name="address"
                                value={fullAddress}
                                size='sm'
                                type="text"
                                placeholder="Số nhà, hẻm"
                            />
                        </Col>
                    </Row>
                </Row>
                {user.roles[0].roleName === "GIÁO VIÊN" ? (
                    <Row>
                        <Col lg={12}>
                            <Form.Label className={cx('description')} >Môn dạy</Form.Label>
                            <p>
                                {subject.map((item, index) => {
                                    return (<p>{item.name}</p>)
                                })}
                            </p>
                        </Col>
                    </Row>) : (<></>)}


                <Row>
                    <Col lg={12} md={12}>
                        <Form.Label className={cx('description')}>Giới thiệu bản thân(1500 ky tự)</Form.Label>
                        <Form.Control as='textarea' style={{ height: '115px' }} size='sm' type="text" value={introduce} onChange={(e) => setIntroduce(e.target.value)} />
                    </Col>
                </Row>
                <center>
                    <Button
                        onClick={() => handleUpdateUser()}
                        style={{ marginTop: '20px', marginBottom: '20px' }}
                        className={cx('btn', 'btn-success')}
                        size="lg">
                        Cập nhật
                    </Button>
                </center>
                <NotificationContainer />

            </LoadingOverlay>
        </>
    )
}

export default Account