import React, { useState } from 'react';
import {InputWrapper} from '../../styles/userDetail'

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <InputWrapper>
    <input 
      type="text" 
      placeholder="Search by name or userName" 
      value={term} 
      onChange={handleSearch} 
    />
    </InputWrapper>
  );
};

export default SearchBar;
