import React from 'react';
import {reasons} from "~/pages/ReferenceTuition/ReferenceTuition";
import classNames from "classnames/bind";

import styles from "~/pages/ReferenceTuition/ReferenceTuition.module.scss";



const cx = classNames.bind(styles);
function ReasonTutor(props) {
    return (
        <div className={cx('widget')}>
            <h4 className={cx('reason-title')}>Tại sao bạn nên tìm giáo viên trên tainangtre.vn ?</h4>
            {
                reasons.map((item, index) => {
                    return (
                        <p className={cx('reason-item')} key={index}>
                            {item.icon}
                            {item.reason}
                        </p>
                    )
                })
            }

        </div>
    );
}

export default ReasonTutor;