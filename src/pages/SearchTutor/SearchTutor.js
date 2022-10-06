import classNames from 'classnames/bind';
import React from 'react';
import styles from './SearchTutor.module.scss';
const cx = classNames.bind(styles);
function SearchTutor() {
    return <div className={cx('wrapper')}>Search Tutor</div>;
}

export default SearchTutor;
