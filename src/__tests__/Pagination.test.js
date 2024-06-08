import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from '../components/Pagination';

test('renders Pagination and changes page', () => {
  const setCurrentPage = jest.fn();
  render(
    <Pagination
      totalUsers={20}
      usersPerPage={10}
      currentPage={1}
      setCurrentPage={setCurrentPage}
    />
  );

  const pageTwoButton = screen.getByText('2');
  fireEvent.click(pageTwoButton);

  expect(setCurrentPage).toHaveBeenCalledWith(2);
});
