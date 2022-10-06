import classNames from 'classnames/bind';
import React from 'react';
import styles from './Posts.module.scss';
const cx = classNames.bind(styles);
function Posts() {
    return <div className={cx('wrapper')}>Posts</div>;
}

export default Posts;
