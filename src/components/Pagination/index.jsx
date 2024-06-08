// src/components/Pagination.js
import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(totalUsers / usersPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <MuiPagination 
      count={pageCount} 
      page={currentPage} 
      onChange={handleChange} 
      color="primary" 
      shape="rounded"
    />
  );
};

export default Pagination;
