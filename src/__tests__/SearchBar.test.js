import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../components/SearchBar';

test('renders SearchBar and calls onSearch', () => {
  const handleSearch = jest.fn();
  render(<SearchBar onSearch={handleSearch} />);

  const searchInput = screen.getByPlaceholderText(/search by name or username/i);
  fireEvent.change(searchInput, { target: { value: 'Leanne' } });

  expect(handleSearch).toHaveBeenCalledWith('Leanne');
});
