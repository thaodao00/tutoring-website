import React from 'react'
import { Fragment } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Subject.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { getSubject } from '~/services/workspaces.sevices';
const cx = classNames.bind(styles);
export const Subject = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        async function fetchData() {
            const response = await getSubject();
            // console.log(response, ">>>1");
            const { data, status } = response?.data
            if (data) {
                setData(data)
                console.log(data);
            }
        }
        fetchData()

    }, [])
    return (
        <Fragment>
            {data.map((item) => {
                return (
                    <Button key={item.id} className={cx('widget-btn')}>
                        {item.name}
                    </Button>
                );
            })}
        </Fragment>
    )
}
