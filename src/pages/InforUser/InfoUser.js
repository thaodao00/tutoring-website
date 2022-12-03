import React from 'react';
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { Col, Container, Row } from "react-bootstrap";
import SidebarLeftInfo from "~/layout/components/SidebarLeftInfo";
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserService } from '~/redux/auth/services';
import UserTabs from './Tabs';
const cx = classNames.bind(styles);

function InfoUser(props) {
    const [active, setActive] = useState('1')

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col lg={4} md={3} className='mb-5' >
                        <SidebarLeftInfo />
                    </Col>
                    <Col lg={8} md={3}>
                        <UserTabs active={active} toggleTab={toggleTab} />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default InfoUser;