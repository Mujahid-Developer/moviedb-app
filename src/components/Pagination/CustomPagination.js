import { Pagination } from '@mui/material';
import React from 'react';

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    }
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Pagination count={numberOfPages} onPageChange={(e) => handlePageChange(e.target.value.textContent)} style={{ marginBottom: '70px' }} />
        </div>
    );
};

export default CustomPagination;