import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('row', 'wrapper')}>
            <div className={cx('col-12 col-md-12 col-sm-12 d-flex col-lg-6', 'footer-left')}>
                <div className={cx('col-md-8')}>
                    <h4 className={cx('footer-title')}>CTY TNHH DỊCH VỤ TÀI NĂNG TRẺ</h4>
                    <div className={cx('footer-sub')}>Văn phòng tư vấn phát triển giáo dục</div>
                    <div>
                        <span className={cx('footer-contact')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} /> Trụ sở: 1269/17 Phạm Thế
                            Hiển, Phường 5, Quận 8, HCM
                        </span>
                    </div>
                    <div>
                        <span className={cx('footer-contact')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} /> Giấy phép ĐKKD số 0316086934
                            do sở kế hoạch và đầu tư thành phố Hồ Chí Minh cấp
                        </span>
                    </div>
                    <div>
                        <span className={cx('footer-contact')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPhoneAlt} />{' '}
                            <Button href="tel: 09222222" className={cx('text-phone')}>
                                092.222.222
                            </Button>
                            {' - '}
                            <Button href="tel: 09222222" className={cx('text-phone')}>
                                092.222.222
                            </Button>
                        </span>
                    </div>
                    <div>
                        <span className={cx('footer-contact')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />{' '}
                            <Button href="mailto:daykem@gmail.com" className={cx('text-mail')}>
                                daykem@gmail.com
                            </Button>
                        </span>
                    </div>

                </div>
                <ul className={cx('col-lg-4 col-md-4 col-sm-12', 'list')}>
                    <li className={cx('item')}>Về chúng tôi</li>
                    <li className={cx('item')}>Câu hỏi thường gặp</li>
                    <li className={cx('item')}>Tuyển dụng</li>
                    <li className={cx('item')}>Hợp đồng mẫu</li>
                    <li className={cx('item')}>Cs bảo mật thông tin</li>
                </ul>
            </div>
            <div className={cx('col-12 col-md-12 col-sm-12 d-flex col-lg-6', 'footer-right')}>
                <div>
                    <h4 className={cx('footer-title')}> Ứng dụng Daykemtainha.vn</h4>
                    <p className={cx('text')}>
                        Hãy cài đặt ngay Ứng dụng Daykemtainha.vn để nhận lớp nhanh hơn (đối với Gia Sư) hoặc tìm Gia sư
                        dễ dàng hơn (đối với Phụ huynh hoặc Học viên){' '}
                    </p>
                    <p className={cx('text')}>Ứng dụng Daykemtainha.vn hiện đã có mặt trên App store và Google play</p>
                    <div className="d-flex">
                        <a href="https://bit.ly/giasu-daykem-ios" target="_blank" rel="noreferrer">
                            <img
                                className={cx('img-app')}
                                src="https://www.daykemtainha.vn/public/templates/public/downloadapp/assets/images/buttons/btn-app-store.png"
                                alt="Error"
                            />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.giasutainangtre.daykemtainha"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className={cx('img-app')}
                                src="https://www.daykemtainha.vn/public/templates/public/downloadapp/assets/images/buttons/btn-google-play.png"
                                alt="Error"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
