import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';
import UserDetailsModal from '../Modal/UserDetailModal';
import { AppContainer, TableContainer as StyledTableContainer, SearchContainer } from '../../styles/userDetail';

const UserList = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedUser, setSelectedUser] = useState(null);


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => 
      sortOrder === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name)
    );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <AppContainer>
      <SearchContainer>
        <SearchBar onSearch={handleSearch} />
        <Button variant="contained" onClick={handleSort}>
          Sort by Name ({sortOrder})
        </Button>
      </SearchContainer>
      <StyledTableContainer>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ '& .MuiTableCell-root': { fontWeight: 'bold' } }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers.map(user => (
                <TableRow key={user.id} onClick={() => handleUserClick(user)} style={{ cursor: 'pointer' }}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledTableContainer>
      <Pagination 
        totalUsers={filteredUsers.length} 
        usersPerPage={usersPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      {selectedUser && <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </AppContainer>
  );
};

export default UserList;
