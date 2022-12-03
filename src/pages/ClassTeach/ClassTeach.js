import React from 'react';
import classNames from 'classnames/bind';
import style from './ClassTeach.module.scss';
const cx = classNames.bind(style);

function ClassTeach(props) {
    return (
        <div className='container my-5 py-5'>
            {/* <div className={cx('class-none', 'text-center')}>
                <h1 className={cx('text-center p-5')}>HIỆN TẠI BẠN CHƯA ĐĂNG KÝ LỚP DẠY!!!!</h1>
                <img src='https://th.bing.com/th/id/R.64a09625d012aa289afe08a16677b525?rik=pepaPel1oqdsyg&pid=ImgRaw&r=0' height={100} alt="class" />
            </div> */}
            <h1 className='text-center fw-bold'> Danh Sách Lớp Dạy</h1>
            <div className='bg-dark p-5 m-5'>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">MS</th>
                            <th scope="col">TÊN LỚP</th>
                            <th scope="col">TÊN MÔN HỌC</th>
                            <th scope="col">TÊN HỌC VIÊN</th>
                            <th scope="col">TRẠNG THÁI</th>
                            <th scope="col">NGÀY KHÓA HỌC BẤT ĐẦU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClassTeach;