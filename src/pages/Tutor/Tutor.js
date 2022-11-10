import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tutor.module.scss';
import { Col, Row } from "react-bootstrap";

import GoodTutor from '~/layout/components/GoodTutor/GoodTutor';

import { faBookBookmark, faGraduationCap, faLocationDot, faMap, faMapLocation, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import PaginationTutor from "~/layout/common/PaginationTutor";
import { TutorItem } from './TutorItem/TutorItem';
const cx = classNames.bind(styles);
function Tutor() {
    const dataTutor = [
        {
            name: "Nguyễn Văn A",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn A",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn B",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn C",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
        {
            name: "Nguyễn Văn D",
            address: "Hà Nội",
            position: "Sinh Viên",
            subject: " Tiếng Anh, Tiếng Anh Giao tiếp, Tiếng Anh lớp 5, Tiếng Anh lớp 6, Tiếng Anh lớp 7, Tiếng Anh lớp 8, Tiếng Anh lớp 9",
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop/39352_avatar.jpeg'
        },
    ]
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container pt-5 pb-5')}>
                <div className={cx('row')}>
                    <div className='col-lg-12'>
                        <form className={cx('row mt-5', 'box-form')}>
                            <div className={cx('box-input', 'col-lg-2 col-md-6 col-sm-12 mb-4')}>
                                <input type="text" className={cx("border", 'input-text')} placeholder="Môn học" />
                            </div>
                            <div className={cx('box-input', 'col-lg-2 col-md-6 col-sm-12 mb-4')}>
                                <input type="text" className={cx("border", 'input-text')} placeholder="Năm sinh" />
                            </div>
                            <div className={cx('box-input', 'col-lg-2 col-md-6 col-sm-12 mb-4')}>
                                <select className={cx("border", 'input-text')}>
                                    <option >Giới tính</option>
                                    <option value="1">Nữ</option>
                                    <option value="2">Nam</option>
                                </select>
                            </div>
                            <div className={cx('box-input', 'col-lg-2 col-md-6 col-sm-12 mb-4')}>
                                <select className={cx("border", 'input-text')} >
                                    <option >Trình độ</option>
                                    <option value="1">Sinh Viên</option>
                                    <option value="2">Giáo Viên</option>
                                    <option value="3">Đã Tốt Nghiệp</option>
                                </select>
                            </div>
                            <div className={cx('box-input', 'col-lg-2 col-md-6 col-sm-12 mb-4')}>
                                <select className={cx("border", 'input-text')}>
                                    <option>Khu vực</option>
                                    <option value="Thành phố Hà Nội" data-id="01">Thành phố Hà Nội</option>
                                    <option value="Tỉnh Hà Giang" data-id="02">Tỉnh Hà Giang</option>
                                    <option value="Tỉnh Cao Bằng" data-id="04">Tỉnh Cao Bằng</option>
                                    <option value="Tỉnh Bắc Kạn" data-id="06">Tỉnh Bắc Kạn</option>
                                    <option value="Tỉnh Tuyên Quang" data-id="08">Tỉnh Tuyên Quang</option>
                                    <option value="Tỉnh Lào Cai" data-id="10">Tỉnh Lào Cai</option>
                                    <option value="Tỉnh Điện Biên" data-id="11">Tỉnh Điện Biên</option>
                                    <option value="Tỉnh Lai Châu" data-id="12">Tỉnh Lai Châu</option>
                                    <option value="Tỉnh Sơn La" data-id="14">Tỉnh Sơn La</option>
                                    <option value="Tỉnh Yên Bái" data-id="15">Tỉnh Yên Bái</option>
                                    <option value="Tỉnh Hoà Bình" data-id="17">Tỉnh Hoà Bình</option>
                                    <option value="Tỉnh Thái Nguyên" data-id="19">Tỉnh Thái Nguyên</option>
                                    <option value="Tỉnh Lạng Sơn" data-id="20">Tỉnh Lạng Sơn</option>
                                    <option value="Tỉnh Quảng Ninh" data-id="22">Tỉnh Quảng Ninh</option>
                                    <option value="Tỉnh Bắc Giang" data-id="24">Tỉnh Bắc Giang</option>
                                    <option value="Tỉnh Phú Thọ" data-id="25">Tỉnh Phú Thọ</option>
                                    <option value="Tỉnh Vĩnh Phúc" data-id="26">Tỉnh Vĩnh Phúc</option>
                                    <option value="Tỉnh Bắc Ninh" data-id="27">Tỉnh Bắc Ninh</option>
                                    <option value="Tỉnh Hải Dương" data-id="30">Tỉnh Hải Dương</option>
                                    <option value="Thành phố Hải Phòng" data-id="31">Thành phố Hải Phòng</option>
                                    <option value="Tỉnh Hưng Yên" data-id="33">Tỉnh Hưng Yên</option>
                                    <option value="Tỉnh Thái Bình" data-id="34">Tỉnh Thái Bình</option>
                                    <option value="Tỉnh Hà Nam" data-id="35">Tỉnh Hà Nam</option>
                                    <option value="Tỉnh Nam Định" data-id="36">Tỉnh Nam Định</option>
                                    <option value="Tỉnh Ninh Bình" data-id="37">Tỉnh Ninh Bình</option>
                                    <option value="Tỉnh Thanh Hóa" data-id="38">Tỉnh Thanh Hóa</option>
                                    <option value="Tỉnh Nghệ An" data-id="40">Tỉnh Nghệ An</option>
                                    <option value="Tỉnh Hà Tĩnh" data-id="42">Tỉnh Hà Tĩnh</option>
                                    <option value="Tỉnh Quảng Bình" data-id="44">Tỉnh Quảng Bình</option>
                                    <option value="Tỉnh Quảng Trị" data-id="45">Tỉnh Quảng Trị</option>
                                    <option value="Tỉnh Thừa Thiên Huế" data-id="46">Tỉnh Thừa Thiên Huế</option>
                                    <option value="Thành phố Đà Nẵng" data-id="48">Thành phố Đà Nẵng</option>
                                    <option value="Tỉnh Quảng Nam" data-id="49">Tỉnh Quảng Nam</option>
                                    <option value="Tỉnh Quảng Ngãi" data-id="51">Tỉnh Quảng Ngãi</option>
                                    <option value="Tỉnh Bình Định" data-id="52">Tỉnh Bình Định</option>
                                    <option value="Tỉnh Phú Yên" data-id="54">Tỉnh Phú Yên</option>
                                    <option value="Tỉnh Khánh Hòa" data-id="56">Tỉnh Khánh Hòa</option>
                                    <option value="Tỉnh Ninh Thuận" data-id="58">Tỉnh Ninh Thuận</option>
                                    <option value="Tỉnh Bình Thuận" data-id="60">Tỉnh Bình Thuận</option>
                                    <option value="Tỉnh Kon Tum" data-id="62">Tỉnh Kon Tum</option>
                                    <option value="Tỉnh Gia Lai" data-id="64">Tỉnh Gia Lai</option>
                                    <option value="Tỉnh Đắk Lắk" data-id="66">Tỉnh Đắk Lắk</option>
                                    <option value="Tỉnh Đắk Nông" data-id="67">Tỉnh Đắk Nông</option>
                                    <option value="Tỉnh Lâm Đồng" data-id="68">Tỉnh Lâm Đồng</option>
                                    <option value="Tỉnh Bình Phước" data-id="70">Tỉnh Bình Phước</option>
                                    <option value="Tỉnh Tây Ninh" data-id="72">Tỉnh Tây Ninh</option>
                                    <option value="Tỉnh Bình Dương" data-id="74">Tỉnh Bình Dương</option>
                                    <option value="Tỉnh Đồng Nai" data-id="75">Tỉnh Đồng Nai</option>
                                    <option value="Tỉnh Bà Rịa - Vũng Tàu" data-id="77">Tỉnh Bà Rịa - Vũng Tàu</option>
                                    <option value="Thành phố Hồ Chí Minh" data-id="79">Thành phố Hồ Chí Minh</option>
                                    <option value="Tỉnh Long An" data-id="80">Tỉnh Long An</option>
                                    <option value="Tỉnh Tiền Giang" data-id="82">Tỉnh Tiền Giang</option>
                                    <option value="Tỉnh Bến Tre" data-id="83">Tỉnh Bến Tre</option>
                                    <option value="Tỉnh Trà Vinh" data-id="84">Tỉnh Trà Vinh</option>
                                    <option value="Tỉnh Vĩnh Long" data-id="86">Tỉnh Vĩnh Long</option>
                                    <option value="Tỉnh Đồng Tháp" data-id="87">Tỉnh Đồng Tháp</option>
                                    <option value="Tỉnh An Giang" data-id="89">Tỉnh An Giang</option>
                                    <option value="Tỉnh Kiên Giang" data-id="91">Tỉnh Kiên Giang</option>
                                    <option value="Thành phố Cần Thơ" data-id="92">Thành phố Cần Thơ</option>
                                    <option value="Tỉnh Hậu Giang" data-id="93">Tỉnh Hậu Giang</option>
                                    <option value="Tỉnh Sóc Trăng" data-id="94">Tỉnh Sóc Trăng</option>
                                    <option value="Tỉnh Bạc Liêu" data-id="95">Tỉnh Bạc Liêu</option>
                                    <option value="Tỉnh Cà Mau" data-id="96">Tỉnh Cà Mau</option>
                                </select>
                            </div>
                            <div className={cx('box-input', 'col-lg-2 col-md-6 col-sm-12 mb-4')}>
                                <button type="submit" className={cx("border", 'btn-text')}>
                                    Tìm
                                    <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={cx('col-lg-9 col-md-12 col-sm-12 mt-5')}>
                        <div className='row'>
                         <TutorItem/>
                        </div>
                        <Row>
                            <Col xs={12} lg={12} md={12}>
                                <PaginationTutor />
                            </Col>
                        </Row>
                    </div>
                    <div className={cx('col-lg-3 col-md-12 col-sm-12 mt-5')}>
                        <GoodTutor />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tutor;
