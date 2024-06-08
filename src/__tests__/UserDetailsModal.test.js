import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDetailsModal from '../components/UserDetailsModal';

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: { city: 'Gwenborough', street: 'Kulas Light', suite: 'Apt. 556', zipcode: '92998-3874' },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

test('renders UserDetailsModal and closes', () => {
  const handleClose = jest.fn();
  render(<UserDetailsModal user={user} onClose={handleClose} />);

  expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();

  const closeButton = screen.getByText(/×/i);
  fireEvent.click(closeButton);

  expect(handleClose).toHaveBeenCalled();
});
