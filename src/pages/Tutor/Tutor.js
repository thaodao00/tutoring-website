import classNames from 'classnames/bind';
import React from 'react';
import styles from './Tutor.module.scss';
const cx = classNames.bind(styles);
function Tutor() {
    return <div className={cx('wrapper')}>Tutor</div>;
}

export default Tutor;
