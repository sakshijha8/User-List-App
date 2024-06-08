import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from '../components/UserList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: { city: 'Gwenborough' },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders UserList and fetches users', async () => {
  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await screen.findByText(/Leanne Graham/i);
});

test('searches for a user', async () => {
  render(<UserList />);

  await screen.findByText(/Leanne Graham/i);

  const searchInput = screen.getByPlaceholderText(/search by name or username/i);
  fireEvent.change(searchInput, { target: { value: 'Bret' } });

  expect(screen.getByText(/Bret/i)).toBeInTheDocument();
});

test('sorts users by name', async () => {
  render(<UserList />);

  await screen.findByText(/Leanne Graham/i);

  const sortButton = screen.getByText(/sort by name/i);
  fireEvent.click(sortButton);

});
