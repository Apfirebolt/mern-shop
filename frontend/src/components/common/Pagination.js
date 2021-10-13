import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationComponent = (props) => {
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{props.currentPage}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next onClick={() => props.incrementPage()} />
            <Pagination.Last onClick={() => props.decrementPage()} />
        </Pagination>
    );
}

export default PaginationComponent


