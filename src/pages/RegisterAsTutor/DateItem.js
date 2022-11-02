import React, {useRef} from 'react';
import classNames from "classnames/bind";
import styles from "~/pages/RegisterAsTutor/RegisterAsTutor.module.scss";

const cx = classNames.bind(styles);

function DateItem(props) {
    const {value} = props;
    const refButton = useRef(null)

    const onMouseDown = () => {
        const check = refButton.current.classList.contains(cx('active'))
        console.log(check)
        if(check){
            refButton.current.classList.remove(cx('active'))
        }
        else{
            refButton.current.classList.add(cx('active'))
        }
    }
    return (
        <button ref={refButton} onMouseDown={onMouseDown} className={cx(`value`)} onClick={null}>
            {value}
        </button>
    );
}

export default DateItem;