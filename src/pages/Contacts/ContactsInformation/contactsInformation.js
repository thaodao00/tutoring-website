import className from 'classnames/bind';
import { BsPinMap, BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import styles from './ContactsInformation.module.scss';

const cx = className.bind(styles);

const address = [
    {
        title: 'Trụ sở chính',
        address: '1269/17 Phạm Thế Hiển, Phường 5, Quận 8, Tp HCM',
    },
    {
        title: 'Chi nhánh 1',
        address: 'Số 20, đường 20, Phường Bình Trị Đông, Quận 2',
    },
    {
        title: 'Chi nhánh 2',
        address: '327/80 Phan Huy Ích, Phường 14, Quận Gò Vấp',
    },
    {
        title: 'Chi nhánh 3',
        address: 'Số C7b/137 đường Phạm Hùng, Bình Hưng, Bình Chánh, TP HCM (Gần cầu Chánh Hưng Q8)',
    },
];

const hotline = [
    {
        phone_num: '090 333 1985 - 09 87 87 0217',
        owner: 'cô Mượt',
    },
];

const email = [
    {
        mail: 'giasutainangtre.vn@gmail.com - info@giasutainangtre.vn',
    },
];

function ContactInformation() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <div className={cx('title')}>VĂN PHÒNG TƯ VẤN PHÁT TRIỂN GIÁO DỤC</div>
                <div className={cx('title--bold')}>GIA SƯ TÀI NĂNG TRẺ</div>
            </header>
            <div className={cx('row', 'body')}>
                <div className="col-xl-6 col-lg-12">
                    <div className="row">
                        <div className={cx('col-2', 'border-top')}>
                            <a href="/contacts" className={cx('icon-column')}>
                                <BsPinMap className={cx('icon')} />
                            </a>
                        </div>
                        <div className={cx('col-10', 'address-list')}>
                            {address.map((item, index) => {
                                return (
                                    <div key={index} className={cx('address_tag')}>
                                        <div>{item.title}</div>
                                        <div>{item.address}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="row">
                        <div className={cx('col-2')}>
                            <a href="/contacts" className={cx('icon-column')}>
                                <BsTelephone className={cx('icon')} />
                            </a>
                        </div>
                        <div className={cx('col-10', 'address-list')}>
                            <div>Hotline</div>
                            {hotline.map((item) => {
                                return (
                                    <div className={cx('hotline_tag')}>
                                        <div className={cx('margin-right', 'text-gray')}>{item.phone_num}</div>
                                        <div>{item.owner}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('col-2')}>
                            <a href="/contacts" className={cx('icon-column')}>
                                <AiOutlineMail className={cx('icon')} />
                            </a>
                        </div>
                        <div className={cx('col-10', 'address-list')}>
                            <div>Email</div>
                            {email.map((item) => {
                                return (
                                    <div className={cx('hotline_tag')}>
                                        <div className={cx('margin-right', 'text-gray')}>{item.mail}</div>
                                        <div>{item.owner}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInformation;
