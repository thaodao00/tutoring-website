import React, {useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationTutor(props) {
    const {postsPerPage, totalPosts, paginate, currentPage} = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const CheckDisablePrev = (currentPage) => {
        return currentPage === 1

    }
    const checkDisableNext = (currentPage) => {
       return currentPage >= Math.ceil(totalPosts / postsPerPage);
    }

    return (
        <Pagination>
            <Pagination.Prev disabled={CheckDisablePrev(currentPage)}
                             onClick={() => paginate(currentPage - 1)}/>
            {
                pageNumbers.map(number => (
                    <Pagination.Item key={number} active={currentPage === (number)}
                                     onClick={() => {
                                         paginate(number)


                                     }}>
                        {number}
                    </Pagination.Item>
                ))
            }
            <Pagination.Next disabled={checkDisableNext(currentPage)} onClick={() => paginate(currentPage + 1)}/>

        </Pagination>
    );
}

export default PaginationTutor;