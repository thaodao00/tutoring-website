import React from 'react';
import {days} from "~/utils/FakeData";
import DateItem from "~/pages/RegisterAsTutor/DateItem";
import classNames from "classnames/bind";
import styles from "~/pages/RegisterAsTutor/RegisterAsTutor.module.scss";


const cx = classNames.bind(styles);

function DayTutor(props) {


    // const array = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    const hours = [
        {name: 1, value: 60 * 60},
        {name: 2, value: 2 * 60 * 60},
        {name: 3, value: 3 * 60 * 60},
        {name: 4, value: 4 * 60 * 60},
        {name: 5, value: 5 * 60 * 60},
        {name: 6, value: 6 * 60 * 60},
        {name: 7, value: 7 * 60 * 60},
        {name: 8, value: 8 * 60 * 60},
        {name: 9, value: 9 * 60 * 60},
        {name: 10, value: 10 * 60 * 60},
        {name: 11, value: 11 * 60 * 60},
        {name: 12, value: 12 * 60 * 60},
        {name: 13, value: 13 * 60 * 60},
        {name: 14, value: 14 * 60 * 60},
        {name: 15, value: 15 * 60 * 60},
        {name: 16, value: 16 * 60 * 60},
        {name: 17, value: 17 * 60 * 60},
        {name: 18, value: 18 * 60 * 60},
        {name: 19, value: 19 * 60 * 60},
        {name: 20, value: 20 * 60 * 60},
        {name: 21, value: 21 * 60 * 60},
        {name: 22, value: 22 * 60 * 60},
        {name: 23, value: 23 * 60 * 60},

    ]
    const renderSquares = (numbs) => {
        return numbs.map((num, index) => (
            <DateItem value={num.value} key={index} name={num.name}/>
        ));
    };
    return (
        days.map((day, index) => {
            return (
                <div key={index} className={cx('day')}>
                    <span className={cx('day-name')}>{day.label}</span> {renderSquares(hours)}
                </div>
            )
        })

    )
}


export default DayTutor;