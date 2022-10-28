import React from 'react';
import classNames from 'classnames/bind';

import styles from './ReferenceTuition.module.scss';

const cx = classNames.bind(styles);

function OptionItem(props) {
    const {children} = props
    return (
        <option>{children}</option>
    );
}

export default OptionItem;