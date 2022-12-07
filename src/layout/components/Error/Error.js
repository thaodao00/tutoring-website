import React from 'react';
import classNames from "classnames/bind";

import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function Error(props) {
    const {error} = props
    return (
       <span className={cx('error')}>{error}</span>
    );

}

export default Error;