// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'
import Account from './Account'
import Wallet from './Wallet'
import { BiWallet } from 'react-icons/bi'

const UserTabs = ({ active, toggleTab }) => {
    return (
        <Fragment>
            <Nav pills className='mb-2'>
                <NavItem>
                    <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
                        <User className='font-medium-3 me-50' />
                        <span className='fw-bold'>Tài Khoản</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
                        <BiWallet className='font-medium-3 me-50' />
                        <span className='fw-bold'>Ví của bạn</span>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={active}>
                <TabPane tabId='1'>
                    <Account />
                </TabPane>
                <TabPane tabId='2'>
                    <Wallet />
                </TabPane>
            </TabContent>
        </Fragment>
    )
}
export default UserTabs
