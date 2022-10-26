import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const Slider = ({ slider }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return <div>{<img src={slider[currentIndex].avatar} alt="" />}</div>;
};

export default Slider;
