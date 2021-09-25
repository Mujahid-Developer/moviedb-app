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
            <Pagination shape="rounded" color="primary" count={numberOfPages} onChange={(e) => handlePageChange(e.target.textContent)} style={{ marginBottom: '70px' }}
                hideNextButton
                hidePrevButton
            />
        </div>
    );
};

export default CustomPagination;