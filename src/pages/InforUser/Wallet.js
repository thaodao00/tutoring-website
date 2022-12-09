import React, { useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { CardBody, CardHeader, CardTitle } from 'reactstrap'
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRef } from 'react'
import { createPayment, getCoin, getHistoryPayment } from '~/services/workspaces.sevices';
import { useSelector } from 'react-redux';
import { FaCoins, FaPaypal } from 'react-icons/fa';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const cx = classNames.bind(styles);

function Wallet() {

    const { user } = useSelector((state) => state.auth)
    const [history, setHistory] = useState([])
    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState("");
    const [billingDetails, setBillingDetails] = useState("");
    const [coin, setCoin] = useState()


    const [current, setCurrent] = useState()
    const currentRef = useRef()
    currentRef.current = current

    const body = {
        "userId": user.id,
        "method": "PAYPAL",
        "transactionId": orderID
    }
    const fetchCoin = async () => {
        const res = await getCoin()
        const { data } = res?.data

        if (data) {
            setCoin(data.balance)
        }
    }
    const fetchHistoryPayment = async () => {
        const res = await getHistoryPayment()
        const { data } = res?.data
        if (data) {
            setHistory(data)
        }
    }
    useEffect(() => {
        fetchCoin()
        fetchHistoryPayment()
    }, [history])
    useEffect(() => {
        async function fetchData() {
            const res = await createPayment(body)
            console.log(res, "pay");
            if (res.data.status === 1) {
                NotificationManager.success(res.data.message);
            }
            else {
                NotificationManager.error(res.data.message);
            }
        }
        if (billingDetails.status === "COMPLETED") {
            fetchData();
        }
    }, [billingDetails])

    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: currentRef.current,
                        },
                    },
                ],
                // remove the applicaiton_context object if you need your users to add a shipping address
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setBillingDetails(details);

            setSucceeded(true);
        }).catch(err => setPaypalErrorMessage("Something went wrong."));
    };
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <Card>
                        <CardBody>
                            <CardTitle className='mb-50'><h3 className='fw-bolder mt-2 text-warning'><FaCoins /> Coin của bạn</h3></CardTitle>
                            <div className='d-flex justify-content-between border-bottom mb-1 pb-1'>
                                <h1 className='text-black fw-bolder'>{coin}</h1>
                            </div>
                            <p className='mb-2 pb-2 pt-5'>
                                Để có thêm Coin bạn phải nạp tiền qua Paypal
                            </p>
                        </CardBody>
                    </Card>

                </div>
                <div className='col-6' style={{ "zIndex": "1" }}>
                    <div className={cx('action-icons', "wallet")}>
                        <select style={{ "width": "100%", "padding": "10px", "outline": "none", "marginBottom": "15px", "borderRadius": "5px" }} value={current} onChange={(e) => setCurrent(e.target.value)}>
                            <option>
                                Chọn số tiền cần nạp
                            </option>
                            <option value="1">
                                1 USD
                            </option>
                            <option value="2">
                                2 USD
                            </option>
                            <option value="3">
                                3 USD
                            </option>
                            <option value="4">
                                4 USD
                            </option>
                            <option value="5">
                                5 USD
                            </option>
                            <option value="6">
                                6 USD
                            </option>
                            <option value="7">
                                7 USD
                            </option>
                            <option value="8">
                                8 USD
                            </option>
                            <option value="9">
                                9 USD
                            </option>
                            <option value="10">
                                10 USD
                            </option>
                            <option value="15">
                                15 USD
                            </option>
                            <option value="20">
                                20 USD
                            </option>
                            <option value="25">
                                25 USD
                            </option>
                            <option value="30">
                                30 USD
                            </option>
                            <option value="35">
                                35 USD
                            </option>
                            <option value="40">
                                40 USD
                            </option>
                            <option value="50">
                                50 USD
                            </option>
                            <option value="100">
                                100 USD
                            </option>
                        </select>
                        <PayPalScriptProvider options={{ "client-id": "AWh2N_QYAt5pVmm9yjJO9hs0ALmLOybUUqZi7WK-v9BQxf6JDM1jmK5E87-X1Llm55T9C_XTc2R9l2Pf" }} >
                            <PayPalButtons
                                createOrder={createOrder}
                                onApprove={onApprove}
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>

            <Card className='mt-0'>
                <CardHeader className={cx('history-title')}>
                    <CardTitle><h3 className='fw-bolder'>Lịch sử giao dịch</h3></CardTitle>
                </CardHeader>
                {history.length === 0 ? (<div className={cx('history-none')}>
                    <h1>Bạn chưa có lịch sử giao dịch!!!</h1>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c8fcab6d-bfd2-464b-895c-b0731ff3ee9e/ddew82u-19bc3c11-950c-42d8-812b-91ca019fffcd.png' height={100} alt='' /></div>) : (
                    <Table className='text-nowrap text-center' responsive>
                        <thead>
                            <tr>
                                <th className='text-start'>Mã số</th>
                                <th>Số tiền</th>
                                <th>Phương thức</th>
                                <th>Ngày tạo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>  {history.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='text-start'>
                                            {item.transactionId}
                                        </td>
                                        <td>{item.amount} {item.currencyCode}</td>
                                        <td><FaPaypal className='text-primary' />{item.method}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                )
                            })}
                            </>

                        </tbody>
                    </Table>
                )}


            </Card>
            <NotificationContainer />
        </div>
    )
}

export default Wallet