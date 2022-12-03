import React from 'react';
import classNames from 'classnames/bind';

import style from './ClassStudy.module.scss';
import { useSelector } from 'react-redux';
import { getAllClass, getClassById } from '~/services/workspaces.sevices';
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const cx = classNames.bind(style);
function ClassStudy(props) {
    const { user } = useSelector((state) => state.auth)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData(id) {
            setLoading(false)
            const res = await getClassById(id)
            const { data } = res?.data?.data;
            if (data) {
                setData(data)
            }
            setLoading(true)
        }
        fetchData(user.id)
    }, [])
    const Loading = () => {
        return (
            <div className=' container row'>
                <div className='col-md-4'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>
                            <Skeleton height={400} />
                        </p>
                    </SkeletonTheme>;
                </div>
                <div className='col-md-4'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>
                            <Skeleton height={400} />
                        </p>
                    </SkeletonTheme>;
                </div>
                <div className='col-md-4'>
                    <SkeletonTheme color="#666" highlightColor="#999">
                        <p>
                            <Skeleton height={400} />
                        </p>
                    </SkeletonTheme>;
                </div>
            </div>
        )
    }
    return (
        // <>{loading ? (<Loading />) : (
        <div className='container my-5 py-5'>
            {data.length === 0 ? (<div className={cx('class-none', 'text-center')}>
                <h1 className={cx('text-center p-5')}>HIỆN TẠI BẠN CHƯA ĐĂNG KÝ LỚP HỌC!!!!</h1>
                <img src='https://th.bing.com/th/id/R.64a09625d012aa289afe08a16677b525?rik=pepaPel1oqdsyg&pid=ImgRaw&r=0' height={100} alt="class" />
            </div>) : (<> <h1 className='text-center fw-bold'> Danh Sách Lớp Học</h1>
                <div className='bg-dark p-5 m-5'>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Mã số lớp</th>
                                <th scope="col">Tên lớp</th>
                                <th scope="col">Mô tả</th>
                                {/* <th scope="col">TÊN HỌC VIÊN</th> */}
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Thời gian lớp học</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row"> {item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{item.description
                                        }</td>
                                        <td>{item.status === "CREATE" ? ("Chưa hoạt động") : ("Đang hoạt động")}</td>
                                        {/* <td>@mdo</td> */}
                                        <td>{new Date(item.classRequirement.dateStart).toLocaleDateString()} - {new Date(item.classRequirement.dateEnd).toLocaleDateString()}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </>)}


        </div>
        // )}</>

    );
}

export default ClassStudy;