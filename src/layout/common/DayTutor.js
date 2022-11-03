import React from 'react';
import {days} from "~/utils/FakeData";
import DateItem from "~/pages/RegisterAsTutor/DateItem";
import classNames from "classnames/bind";
import styles from "~/pages/RegisterAsTutor/RegisterAsTutor.module.scss";
import {map} from "react-bootstrap/ElementChildren";

const cx = classNames.bind(styles);

function DayTutor(props) {
    const array = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    const renderSquares = (numbs) => {
        return numbs.map((num, index) => (
            <DateItem key={index} value={num}/>
        ));
    };
    return (
            days.map((day, index) => {
                return (
                    <div key={index} className={cx('day')}>
                        <span className={cx('day-name')}>{day.label}</span> {renderSquares(array)}
                    </div>
                )
            })

    )
}


export default DayTutor;