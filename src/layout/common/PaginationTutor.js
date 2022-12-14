import React from 'react';
import ReactPaginate from "react-paginate";

function PaginationTutor(props) {
    const {handlePageClick,pageCount} = props
    return (
        <ReactPaginate pageCount={pageCount}
                       previousLabel={"<"}
                       nextLabel={">"}
                       breakLabel={"..."}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={3}
                       onPageChange={handlePageClick}
                       containerClassName={"pagination "}
                       pageClassName={"page-item"}
                       pageLinkClassName={"page-link"}
                       previousClassName={"page-item"}
                       previousLinkClassName={"page-link"}
                       nextClassName={"page-item"}
                       nextLinkClassName={"page-link"}
                       breakClassName={"page-item"}
                       breakLinkClassName={"page-link"}
                       activeClassName={"active"}>


        </ReactPaginate>
    // <Pagination>
    //     <Pagination.First />
    //     <Pagination.Prev />
    //     <Pagination.Item active>{1}</Pagination.Item>
    //     <Pagination.Item>{2}</Pagination.Item>
    //     <Pagination.Item>{3}</Pagination.Item>
    //     <Pagination.Ellipsis />
    //     <Pagination.Item>{10}</Pagination.Item>
    //     <Pagination.Next />
    //     <Pagination.Last />
    // </Pagination>
        
    );
}

export default PaginationTutor;