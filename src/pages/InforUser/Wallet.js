import React, { useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { CardBody, CardHeader, CardTitle } from 'reactstrap'
import classNames from 'classnames/bind';
import styles from './InfoUser.module.scss';
import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRef } from 'react'
import { createPayment } from '~/services/workspaces.sevices';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Wallet() {

    const { user } = useSelector((state) => state.auth)
    console.log(user);
    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState("");
    const [billingDetails, setBillingDetails] = useState("");

    const [current, setCurrent] = useState()
    // const [orderId, setOrderID] = useState()
    const currentRef = useRef()
    const recentDevicesArr = [
        {
            device: 'Dell XPS 15',
            location: 'United States',
            browser: 'Chrome on Windows',
            activity: '10, Jan 2021 20:07'
        },
        {
            location: 'Ghana',
            device: 'Google Pixel 3a',
            browser: 'Chrome on Android',
            activity: '11, Jan 2021 10:16'
        },
        {
            location: 'Mayotte',
            device: 'Apple iMac',
            browser: 'Chrome on MacOS',
            activity: '11, Jan 2021 12:10'
        },
        {
            location: 'Mauritania',
            device: 'Apple iPhone XR',
            browser: 'Chrome on iPhone',
            activity: '12, Jan 2021 8:29'
        }
    ]
    currentRef.current = current

    console.log(orderID, "id");
    console.log('====================================');
    console.log(billingDetails.status);
    console.log('====================================');
    const body = {
        "userId": user.id,
        "method": "paypal",
        "transactionId": orderID
    }
    console.log(body, "body");

    useEffect(() => {
        async function fetchData() {
            const res = await createPayment(body)
            console.log(res, "res");
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
                            <CardTitle className='mb-50'><h3 className='fw-bolder mt-2'>Ví của bạn</h3></CardTitle>
                            <div className='d-flex justify-content-between border-bottom mb-1 pb-1'>
                                <h1 className='text-success fw-bolder'>355 Điểm</h1>
                            </div>
                            <p className='mb-2 pb-2 pt-5'>
                                Để có thêm điểm bạn phải nạp tiền qua Paypal
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
                                // fundingSource="paypal"
                                // style={{ "layout": "vertical", "label": "donate" }}
                                // disabled={false}
                                // createOrder={(data, actions) => {
                                //     return actions.order
                                //         .create({
                                //             purchase_units: [
                                //                 {
                                //                     amount: {
                                //                         value: currentRef.current,
                                //                         breakdown: {
                                //                             item_total: {
                                //                                 currency_code: "USD",
                                //                                 value: currentRef.current,
                                //                             },
                                //                         },
                                //                     },
                                //                     items: [
                                //                         {
                                //                             name: "donation-example",
                                //                             quantity: "1",
                                //                             unit_amount: {
                                //                                 currency_code: "USD",
                                //                                 value: currentRef.current,
                                //                             },
                                //                             category: "DONATION",
                                //                         },
                                //                     ],
                                //                 },
                                //             ],
                                //         })
                                //         .then((orderId) => {
                                //             // Your code here after create the donation
                                //             console.log(orderId)
                                //             return orderId
                                //         });
                                // }}
                                // onApprove={(data, actions) => {
                                //     return actions.order.capture().then((details) => {
                                //         const name = details.payer.name.given_name;
                                //         // const token = details.payer.name.token;
                                //         console.log(details)
                                //         console.log(data.orderID, "data")
                                //         setOrderID(details.id)
                                //         alert(`Transaction completed by ${name}`);
                                //     });
                                // }}
                                createOrder={createOrder}
                                onApprove={onApprove}
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>

            <Card className='mt-0'>
                <CardHeader>
                    <CardTitle><h3 className='fw-bolder'>Lịch sử giao dịch</h3></CardTitle>
                </CardHeader>
                <Table className='text-nowrap text-center' responsive>
                    <thead>
                        <tr>
                            <th className='text-start'>Mã số</th>
                            <th>Nội dung thanh toán</th>
                            <th>Số điểm thanh toán</th>
                            <th>Ngày thanh toán</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentDevicesArr.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='text-start'>
                                        {item.browser}
                                    </td>
                                    <td>{item.device}</td>
                                    <td>{item.location}</td>
                                    <td>{item.activity}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card>
        </div>
    )
}

export default Wallet