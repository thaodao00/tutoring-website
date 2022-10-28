import React, { useState } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
    faCalendarAlt,
    faClock,
    faGem,
    faHeart,
    faMessage,
    faSmile,
    faThumbsUp,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import {
    faAdd,
    faBook,
    faGraduationCap,
    faMinus,
    faQuestionCircle,
    faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const cx = classNames.bind(styles);
function Home() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const data = [
        {
            icon: <FontAwesomeIcon icon={faThumbsUp} className={cx('box-icon')} />,
            title: 'Chất lượng',
            content: 'Đội ngũ giáo viên được chọn lọc kỹ, có chuyên môn cao, vui vẻ, và tâm huyết với nghề.',
        },
        {
            icon: <FontAwesomeIcon icon={faGem} className={cx('box-icon')} />,
            title: 'Uy tín',
            content:
                'Chúng tôi đã hoạt động hơn 10 năm trong lĩnh vực gia sư, nên rất hiểu rõ tâm lý phụ huynh và học viên.',
        },
        {
            icon: <FontAwesomeIcon icon={faCalendarAlt} className={cx('box-icon')} />,
            title: 'Chương trình học',
            content: 'Chúng tôi luôn đổi mới chương trình sao cho phù hợp với cải cách của bộ giáo dục & đào tạo',
        },
        {
            icon: <FontAwesomeIcon icon={faMessage} className={cx('box-icon')} />,
            title: 'Cách dạy và học',
            content:
                'Chúng tôi luôn đổi mới, mềm dẽo trong cách dạy, làm cho học viên dễ tiếp thu, từ đó tiến bộ nhanh chóng.',
        },
        {
            icon: <FontAwesomeIcon icon={faHeart} className={cx('box-icon')} />,
            title: 'Sự hài lòng',
            content: 'Sự hài lòng của phụ huynh và tiến bộ của học viên là phương châm hoạt động của chúng tôi.',
        },
        {
            icon: <FontAwesomeIcon icon={faClock} className={cx('box-icon')} />,
            title: 'Kết nối thành công',
            content:
                'Bạn chỉ cần 2 phút để đăng tìm GIA SƯ, chúng tôi sẽ liên hệ ngay khi tìm thấy gia sư phù hợp với bạn.',
        },
    ];
    const NEW_TUTOR = [
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn A',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Đào Thị Thu Thảo',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/24276_avatar.jpeg',
            name: 'ĐOÀN PHƯƠNG RANG HOA',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn D',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn E',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn F',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn G',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn H',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn I',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn A',
        },
    ];
    const GOOD_TUTOR = [
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn A',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Đào Thị Thu Thảo',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/24276_avatar.jpeg',
            name: 'ĐOÀN PHƯƠNG RANG HOA',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn D',
            badge: 1,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn E',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn F',
            badge: 1,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn G',
            badge: 3,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn H',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39132_avatar.jpeg',
            name: 'Nguyễn Văn I',
            badge: 2,
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/files/avatar_crop_48_48/39126_avatar.jpg',
            name: 'Nguyễn Văn A',
            badge: 1,
        },
    ];
    const NEW_CLASS = [
        {
            idClass: 1225,
            nameCLass: ' - Cần gia sư cho bé 4 tuổi tại Vũng Tàu, Bà Rịa - Vũng Tàu',
        },
        {
            idClass: 1226,
            nameCLass: ' - Cần gia sư môn Tiếng Anh lớp 9 tại Nha Trang',
        },
        {
            idClass: 1227,
            nameCLass: ' - Cần gia sư môn Autocad tại quận 2, Hồ Chí Minh',
        },
        {
            idClass: 1228,
            nameCLass: ' - Cần gia sư cho bé 7 tuổi  tại Nha Trang, Khánh Hòa',
        },
        {
            idClass: 1229,
            nameCLass: ' - Cần gia sư môn Cờ Tướng tại Vũng Tàu, Bà Rịa - Vũng Tàu',
        },
        {
            idClass: 1230,
            nameCLass:
                ' - Mình cần tìm gia sư đào tạo về nghiệp vụ kế toán, báo cáo thuế, hành chánh nhân sự tại Bình Chánh, Hồ Chí Minh',
        },
        {
            idClass: 1239,
            nameCLass: ' - Cần gia sư môn Toán lớp 6 tại Vũng Tàu, Bà Rịa - Vũng Tàu',
        },
        {
            idClass: 1238,
            nameCLass: ' - Cần gia sư môn Toán lớp 6 tại Vũng Tàu, Bà Rịa - Vũng Tàu',
        },
        {
            idClass: 1237,
            nameCLass: ' - Cần gia sư môn Tiếng Anh lớp 9 tại Nha Trang, Khánh Hòa',
        },
        {
            idClass: 1236,
            nameCLass: ' - Cần gia sư cho bé 4 tuổi tại Vũng Tàu, Bà Rịa - Vũng Tàu',
        },
        {
            idClass: 1235,
            nameCLass: ' - Cần gia sư môn Sinh lớp 10 tại Tây Hồ, Hà Nội',
        },
    ];
    const LIST_DATA_CLASS = [
        {
            name: 'Toán Lớp 1',
            to: '/tutor',
        },
        {
            name: 'Toán Lớp 2',
            to: '/tutor',
        },
        {
            name: 'Toán Lớp 3',
            to: '/tutor',
        },
        {
            name: 'Toán Lớp 4',
            to: '/tutor',
        },
        {
            name: 'Toán Lớp 5',
            to: '/tutor',
        },
        {
            name: 'Toán Lớp 6',
            to: '/tutor',
        },
        {
            name: 'Toán Lớp 7',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 1',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 2',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 3',
            to: '/tutor',
        },

        {
            name: 'Tiếng Việt Lớp 4',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 5',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 6',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 7',
            to: '/tutor',
        },
        {
            name: 'Tiếng Việt Lớp 8',
            to: '/tutor',
        },
        {
            name: 'Tiếng Anh Lớp 3',
            to: '/tutor',
        },
        {
            name: 'Tiếng Anh Lớp 4',
            to: '/tutor',
        },
        {
            name: 'Tiếng Anh Lớp 5',
            to: '/tutor',
        },
    ];
    const LIST_FUNFAC = [
        {
            icon: <FontAwesomeIcon icon={faBook} className={cx('funfact-icon')} />,
            number: 754,
            name: 'LỚP MỚI MỖI NGÀY',
        },
        {
            icon: <FontAwesomeIcon icon={faSmile} className={cx('funfact-icon')} />,
            number: 3000,
            name: 'GIA SƯ',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} className={cx('funfact-icon')} />,
            number: 675,
            name: 'NHẬN LỚP THÀNH CÔNG',
        },
        {
            icon: <FontAwesomeIcon icon={faGraduationCap} className={cx('funfact-icon')} />,
            number: 1248,
            name: 'PHỤ HUYNH HÀI LÒNG',
        },
    ];
    const LIST_COMMENT = [
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/8.webp',
            comment:
                'Mình là Nhàn giáo viên dạy guitar, mình thường liên lạc chị My và chị Mượt để nhận lớp dạy kèm, Do mình chạy sô đi dạy nhiều nên không có thời gian qua trung tâm, mình chỉ qua 2 lần đầu tiên tại Q.8 còn những lần sau mình đều nhận lớp qua chuyển khoản, rất tiện lợi, các lớp có sự cố mình báo về trung tâm đều được giải quyết, mình rất an tâm nên có giới thiệu bạn bè mình để có cơ hội nhận lớp tại trung tâm.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/3.webp',
            comment:
                'Con tôi học lớp 5 là năm cuối cấp 1, tôi rất lo lắng về việc học cho con, công việc của tôi rất nhiều không có nhiều thời gian để kèm cặp con, tôi biết con tố chất thông minh nhưng hơi lười nên tôi rất cần một cô gia sư tận tâm thay tôi kèm cho con mỗi ngày, được người quen giới thiệu tôi đã được Trung tâm gia sư Tài Năng Trẻ sắp xếp cô gia sư Thủy Lợi sv đại học Y Dược, Nhờ sự nhiệt tình của gia sư cuối năm con tôi đạt thành tích xuất sắc, chân thành cảm ơn cô Lợi và trung tâm.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/7.webp',
            comment:
                'Mình là Đào gia sư dạy tiếng Anh, giờ hành chánh mình làm cho một cty nước ngoài, vốn tiếng Anh của mình khá tốt nên mình đăng ký dạy kèm thêm tiếng Anh vào buổi tối tại trung tâm gia sư Tài Năng Trẻ, hiện tại mình đang dạy cho 2 bé, một bé học tối 246 một bé học tối 357, các bé rất dễ thương, mình thấy mỗi lần đi dạy là niềm vui đối với mình, cảm ơn trung tâm nhờ trung tâm mà mình có 2 trò đáng yêu.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/8.webp',
            comment:
                'Mình là Nhàn giáo viên dạy guitar, mình thường liên lạc chị My và chị Mượt để nhận lớp dạy kèm, Do mình chạy sô đi dạy nhiều nên không có thời gian qua trung tâm, mình chỉ qua 2 lần đầu tiên tại Q.8 còn những lần sau mình đều nhận lớp qua chuyển khoản, rất tiện lợi, các lớp có sự cố mình báo về trung tâm đều được giải quyết, mình rất an tâm nên có giới thiệu bạn bè mình để có cơ hội nhận lớp tại trung tâm.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/3.webp',
            comment:
                'Con tôi học lớp 5 là năm cuối cấp 1, tôi rất lo lắng về việc học cho con, công việc của tôi rất nhiều không có nhiều thời gian để kèm cặp con, tôi biết con tố chất thông minh nhưng hơi lười nên tôi rất cần một cô gia sư tận tâm thay tôi kèm cho con mỗi ngày, được người quen giới thiệu tôi đã được Trung tâm gia sư Tài Năng Trẻ sắp xếp cô gia sư Thủy Lợi sv đại học Y Dược, Nhờ sự nhiệt tình của gia sư cuối năm con tôi đạt thành tích xuất sắc, chân thành cảm ơn cô Lợi và trung tâm.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/7.webp',
            comment:
                'Mình là Đào gia sư dạy tiếng Anh, giờ hành chánh mình làm cho một cty nước ngoài, vốn tiếng Anh của mình khá tốt nên mình đăng ký dạy kèm thêm tiếng Anh vào buổi tối tại trung tâm gia sư Tài Năng Trẻ, hiện tại mình đang dạy cho 2 bé, một bé học tối 246 một bé học tối 357, các bé rất dễ thương, mình thấy mỗi lần đi dạy là niềm vui đối với mình, cảm ơn trung tâm nhờ trung tâm mà mình có 2 trò đáng yêu.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/8.webp',
            comment:
                'Mình là Nhàn giáo viên dạy guitar, mình thường liên lạc chị My và chị Mượt để nhận lớp dạy kèm, Do mình chạy sô đi dạy nhiều nên không có thời gian qua trung tâm, mình chỉ qua 2 lần đầu tiên tại Q.8 còn những lần sau mình đều nhận lớp qua chuyển khoản, rất tiện lợi, các lớp có sự cố mình báo về trung tâm đều được giải quyết, mình rất an tâm nên có giới thiệu bạn bè mình để có cơ hội nhận lớp tại trung tâm.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/3.webp',
            comment:
                'Con tôi học lớp 5 là năm cuối cấp 1, tôi rất lo lắng về việc học cho con, công việc của tôi rất nhiều không có nhiều thời gian để kèm cặp con, tôi biết con tố chất thông minh nhưng hơi lười nên tôi rất cần một cô gia sư tận tâm thay tôi kèm cho con mỗi ngày, được người quen giới thiệu tôi đã được Trung tâm gia sư Tài Năng Trẻ sắp xếp cô gia sư Thủy Lợi sv đại học Y Dược, Nhờ sự nhiệt tình của gia sư cuối năm con tôi đạt thành tích xuất sắc, chân thành cảm ơn cô Lợi và trung tâm.',
        },
        {
            avatar: 'https://www.daykemtainha.vn/public/templates/public/giasu/images/testimonials/7.webp',
            comment:
                'Mình là Đào gia sư dạy tiếng Anh, giờ hành chánh mình làm cho một cty nước ngoài, vốn tiếng Anh của mình khá tốt nên mình đăng ký dạy kèm thêm tiếng Anh vào buổi tối tại trung tâm gia sư Tài Năng Trẻ, hiện tại mình đang dạy cho 2 bé, một bé học tối 246 một bé học tối 357, các bé rất dễ thương, mình thấy mỗi lần đi dạy là niềm vui đối với mình, cảm ơn trung tâm nhờ trung tâm mà mình có 2 trò đáng yêu.',
        },
    ];
    const options = {
        nav: true,
        autoplay: true,
        navText: ['Prev', 'Next'],
        smartSpeed: 1000,
        loop: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-bg-top')}>
                <div className={cx('text-bg', 'row')}>
                    <div className={cx('col-12 text-center')}>
                        <p className={cx('text-sub')}>
                            Đội ngũ gia sư Tài Năng Trẻ có hơn <span>3000</span> giáo viên và sinh viên giỏi,
                            <br />
                            chuyên môn hóa từng bộ môn nhận dạy kèm tại nhà trên cả nước.
                        </p>
                        <h1 className={cx('text-main')}>
                            HAY <span>TÌM GIA SƯ GIỎI</span> NGAY
                        </h1>
                        <div className={cx('input-group mb-4 mt-4')}>
                            <input
                                type="text"
                                style={{borderTopLeftRadius: '30px',borderBottomLeftRadius: '30px'}}
                                className={cx('form-control ')}
                                placeholder="Hãy nhập một môn học!"
                                aria-label="Hãy nhập một môn học!"
                                aria-describedby="basic-addon2"
                            />
                            <div className={cx('input-group-append')}>
                                <button className={cx('btn btn-outline-secondary')} type="button">
                                    Tìm gia sư ngay!
                                </button>
                            </div>
                        </div>
                        <div className={cx('text-phone')}>
                            Hoặc gọi ngay:{' '}
                            <span>
                                <Button href="tel: 09222222">092.222.222</Button>
                                {' - '}
                                <Button href="tel: 09222222">092.222.222</Button>
                            </span>
                        </div>
                        <Button className={cx('btn-tutor')}>Tham gia vào đội ngũ Gia Sư!!!</Button>
                        <h2 className={cx('name-app')}>
                            Ứng dụng <b>Gia sư dạy kèm</b>
                        </h2>
                        <div>
                            <img
                                className={cx('img-app')}
                                src="https://www.daykemtainha.vn/public/templates/public/downloadapp/assets/images/buttons/btn-app-store.png"
                                alt="Error"
                            />
                            <img
                                className={cx('img-app')}
                                src="https://www.daykemtainha.vn/public/templates/public/downloadapp/assets/images/buttons/btn-google-play.png"
                                alt="Error"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('divider')}>
                <div className="container">
                    <div className={cx('row', 'box-divider')}>
                        <div className={cx('col-12 col-lg-4 col-md-6 col-sm-12')}>
                            <div className={cx('divider-item', 'mb-3')}>
                                <img
                                    src="https://www.daykemtainha.vn/public/templates/public/giasu/images/icons/graduate.png"
                                    alt="Error"
                                />
                                <h2 className={cx('divider-item__text')}>
                                    Đội ngũ gia sư
                                    <b> chất lượng cao</b>
                                </h2>
                            </div>
                        </div>

                        <div className={cx('col-12 col-lg-4 col-md-6 col-sm-12')}>
                            <div className={cx('divider-item', 'mb-3')}>
                                <img
                                    src="https://www.daykemtainha.vn/public/templates/public/giasu/images/icons/book.png"
                                    alt="Error"
                                />

                                <h2 className={cx('divider-item__text')}>
                                    Tìm gia sư
                                    <b> toàn quốc</b>
                                </h2>
                            </div>
                        </div>
                        <div className={cx('col-12 col-lg-4 col-md-6 col-sm-12')}>
                            <div className={cx('divider-item', 'mb-3')}>
                                <img
                                    src="https://www.daykemtainha.vn/public/templates/public/giasu/images/icons/online.png"
                                    alt="Error"
                                />
                                <h2 className={cx('divider-item__text')}>
                                    Hỗ trợ nhiệt tình
                                    <b> 274</b>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-bg-second')}>
                <div className="container">
                    <div className={cx('row', 'text-bg-second')}>
                        <div className={cx('col-lg-5 col-md-12 col-sm-12', 'text-bg-left')}>
                            <img
                                src="https://www.daykemtainha.vn/public/templates/public/giasu/images/bannergstnt.webp"
                                alt=""
                            />
                        </div>
                        <div className={cx('col-lg-7 col-md-12 col-sm-12', 'text-bg-right')}>
                            <div className="container">
                                <div className={cx('row')}>
                                    <div className={cx('col-12')}>
                                        <h2 className={cx('box-title')}>
                                            Tại sao bạn <span>Chọn chúng tôi</span>?
                                        </h2>
                                    </div>
                                    {data.map((item, index) => {
                                        return (
                                            <div className={cx('col-lg-6 col-md-6 col-sm-12', 'box-item')} key={index}>
                                                {item.icon}
                                                <div className={''}>
                                                    <h4 className={cx('item-title')}>{item.title}</h4>
                                                    <p className={cx('item-content')}>{item.content}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container pt-5')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-3 col-md-12 col-sm-12')}>
                        <div className={cx('widget')}>
                            <h2 className={cx('widget-title')}>
                                Gia sư<span> Mới</span>
                            </h2>
                            <ul className={cx('widget-list')}>
                                {NEW_TUTOR.map((item, index) => {
                                    return (
                                        <li key={index} className={cx('widget--item')}>
                                            <img src={item.avatar} alt="Error" className={cx('widget-item__avatar')} />
                                            <span className={cx('widget-item__name')}>{item.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-md-12 col-sm-12')}>
                        <div className={cx('widget')}>
                            <h2 className={cx('widget-title')}>
                                Gia sư nổi bật<span> Tháng 10</span>
                            </h2>
                            <ul className={cx('widget-list')}>
                                {GOOD_TUTOR.map((item, index) => {
                                    return (
                                        <li key={index} className={cx('widget--item')}>
                                            <img src={item.avatar} alt="Error" className={cx('widget-item__avatar')} />
                                            <span className={cx('widget-item__name')}>{item.name}</span>
                                            <span className={cx('badge')}>{item.badge}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-6 col-md-12 col-sm-12')}>
                        <div className={cx('widget')}>
                            <h2 className={cx('widget-title')}>
                                Lớp<span> Mới</span>
                            </h2>
                            <ul className={cx('widget-list')}>
                                {NEW_CLASS.map((item, index) => {
                                    return (
                                        <li key={index} className={cx('widget--item')}>
                                            <h2 className={cx('widget--item__class')}>
                                                <b className="widget--item__id">{item.idClass}</b>
                                                {item.nameCLass}
                                            </h2>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-md-12')}>
                        <div className={cx('widget')}>
                            <h2 className={cx('widget-title')}>
                                Tìm gia sư theo các<span> môn phổ biến</span>
                            </h2>
                            <div>
                                {LIST_DATA_CLASS.map((item, index) => {
                                    return (
                                        <Button to={item.to} key={index} className={cx('widget-btn')}>
                                            {item.name}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-bg-three')}>
                <div className={cx('container text-white', 'text-bg-three')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-7 col-md-12 col-sm-12')}>
                            <div className={cx('wrapper-bg-three__left')}>
                                <h2 className={cx('wrapper-bg-three__left-title')}>
                                    <span>Đăng ký </span>
                                    ngay!
                                </h2>
                                <p className={cx('wrapper-bg-three__left-sub')}>
                                    <b>- Nếu bạn cần tìm gia sư: </b>hãy<b> Đăng ký ngay </b>
                                    để tiếp cận với hàng nghìn gia sư trên toàn quốc.
                                </p>
                                <p className={cx('wrapper-bg-three__left-sub')}>
                                    <b>- Nếu bạn là gia sư: </b> hãy <b> Đăng ký ngay </b>
                                    để tiếp cận nhanh chống với học viên.
                                </p>
                                <div className={cx('row')}>
                                    {LIST_FUNFAC.map((item, index) => {
                                        return (
                                            <div className={cx('col-lg-3 col-md-6 col-sm-12 ')} key={index}>
                                                <div className={cx('funfact')}>
                                                    {item.icon}
                                                    <h4 className={cx('funfact-number')}>{item.number}</h4>
                                                    <h5 className={cx('funfact-text')}>{item.name}</h5>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-5 col-md-12 col-sm-12')}>
                            <div className={cx('wrapper-bg-three__right')}>
                                <h2 className={cx('procedure-title')}>
                                    Quy trình nhận lớp
                                    <span> của gia sư</span>
                                </h2>
                                <div className={cx('procedure')}>
                                    <p>
                                        Hướng dẫn nhận lớp tại web hoặc ứng dụng: <br /> Daykemtainha.vn
                                    </p>
                                    <ul className={cx('procedure-list')}>
                                        <li className={cx('procedure-item')}>
                                            Bước 1: Đăng ký tài khoản gia sư và cập nhật thông tin gia sư đầy đủ tại:
                                            Daykemtainha.vn
                                        </li>
                                        <li className={cx('procedure-item')}>
                                            Bước 2: Kích “ Nhận lớp ngay” tại lớp bạn muốn nhận, bộ phận giao lớp kiểm
                                            tra thông tin của bạn phù hợp sẽ alo sắp xếp, nếu chưa phù hợp sẽ phản hồi
                                            trong tài khoản của bạn mục “ Danh sách lớp dạy”.
                                        </li>
                                        <li className={cx('procedure-item')}>
                                            Bước 3: Khi bộ phận giao lớp xác nhận bạn được nhận lớp, bạn chuyển khoản
                                            hoặc đến trung tâm nhận lớp.
                                        </li>
                                        <li className={cx('procedure-item')}>
                                            {'=> '}Link tải ứng dụng:{' '}
                                            <a
                                                className={cx('procedure-item-link')}
                                                href="https://www.daykemtainha.vn/ung-dung-gia-su-day-kem"
                                            >
                                                https://www.daykemtainha.vn/ung-dung-gia-su-day-kem
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'question')}>
                <h3 className={cx('question-title')}>
                    <FontAwesomeIcon className={cx('question-icon')} icon={faQuestionCircle} />
                    CÁC CÂU HỎI <span>THƯỜNG GẶP </span>CỦA GIA SƯ
                </h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <button
                            className={cx('question-text', 'bg-white')}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            onClick={() => setShow1(!show1)}
                        >
                            <FontAwesomeIcon icon={show1 ? faMinus : faAdd} className={cx('icon-minus')} />
                            <b> Quy trình nhận lớp thế nào?</b>
                        </button>

                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className={cx('row', 'procedure-class')}>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12')}>
                                        <b>Bước 1: </b>
                                        <br />
                                        - Vào website Daykemtainha.vn
                                        <br />- Chọn mục:Đăng ký làm gia sư
                                        <br />- Điền và chọn đầy đủ thông tin (chú ý các vị trí có dấu * phải có đầy đủ,
                                        trung tâm ưu tiên các bạn có thông tin tốt và có cmnd bằng cấp đầy đủ)
                                        <br />- Chọn nút “Đăng ký làm gia sư”
                                        <br />- Sau khi đăng ký gia sư thành công bạn chọn đăng nhập bằng mật khẩu hoặc
                                        facebook hoặc google
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12')}>
                                        <b>Bước 2: </b>
                                        <br />
                                        - Vào website: Daykemtainha.vn
                                        <br />
                                        - Chọn mục:Lớp mới
                                        <br />
                                        - Hãy tìm đến lớp mà bạn muốn nhận (có thể tìm kiếm theo môn học để tìm nhanh
                                        hơn)
                                        <br />- Nhấn vào nút: “Nhận lớp ngay” và đợi trung tâm phản hồi.
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12')}>
                                        <b>Bước 3: </b>
                                        <br />
                                        Sau khi bạn nhận lớp thành công
                                        <br />
                                        - Vào website: Daykemtainha.vn (chú ý là bạn đã đăng nhập rồi nhé)
                                        <br />
                                        - Bạn vào profile của bạn chọn mục: danh sách lớp dạy
                                        <br />
                                        - Tìm đến lớp mà bạn muốn xem
                                        <br />- Nhấn vào nút: Chi tiết
                                        <br />- Hãy liên hệ với phụ huynh học sinh liền nhé (nếu bạn nhận được lớp
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button
                            className={cx('question-text', 'bg-white')}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            onClick={() => setShow2(!show2)}
                        >
                            <FontAwesomeIcon icon={show2 ? faMinus : faAdd} className={cx('icon-minus')} />
                            <b>Thông tin hợp đồng công ty thế nào?</b>
                        </button>

                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className={cx('row', 'procedure-class')}>
                                    <div className={cx('col-12', 'contract')}>
                                        <Button to="/contract" className={cx('contract-btn')}>
                                            Xem hợp đồng mẫu
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button
                            className={cx('question-text', 'bg-white')}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            onClick={() => setShow3(!show3)}
                        >
                            <FontAwesomeIcon icon={show3 ? faMinus : faAdd} className={cx('icon-minus')} />
                            <b>Số tài khoản của trung tâm</b>
                        </button>

                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className={cx('row', 'procedure-class')}>
                                    <div className={cx('col-12')}>
                                        Sau khi thống nhất nhận lớp với trung tâm, gia sư chuyển khoản 1 trong các tài
                                        khoản dưới đây:
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                    <div className={cx('col-lg-4 col-md-12 col-sm-12 ', 'procedure-item')}>
                                        <b>Tài khoản thông tin 1: </b>
                                        <br />
                                        Ngân hàng: Đông Á chi nhánh An Đông Quận 5
                                        <br />
                                        Chủ tài khoản: Nguyễn Thị Mượt
                                        <br />
                                        Số tài khoản: 010 77 034 64
                                        <br /> <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button
                            className={cx('question-text', 'bg-white')}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                            onClick={() => setShow4(!show4)}
                        >
                            <FontAwesomeIcon icon={show4 ? faMinus : faAdd} className={cx('icon-minus')} />
                            <b>Số trung tâm hỗ trợ 24/7</b>
                        </button>

                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className={cx('row', 'procedure-class')}>
                                    <div className={cx('col-12')}>
                                        <p>
                                            Hãy gọi ngay{' '}
                                            <span>
                                                <Button className={cx('procedure-phone')} href="tel: 09222222">
                                                    092.222.222
                                                </Button>
                                                {' hoặc '}
                                                <Button className={cx('procedure-phone')} href="tel: 09222222">
                                                    092.222.222{' '}
                                                </Button>
                                            </span>
                                            để được hỗ trợ?{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-bg-bottom')}>
                <div className={cx('text-bg', 'row')}>
                    <h2>
                        NHẬN XÉT CỦA
                        <p>PHỤ HUYNH & GIÁO VIÊN</p>
                    </h2>
                </div>
                <div className={cx('carousel-list', 'container')}>
                    <Carousel autoPlay={true} loop>
                        {LIST_COMMENT.map((item, index) => {
                            return (
                                <div className={cx('carousel-item')}>
                                    <img src={item.avatar} alt="" />
                                    <div>
                                        <FontAwesomeIcon icon={faQuoteRight} className={cx('carousel-icon')} />
                                    </div>
                                    <p className="">{item.comment}</p>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Home;
