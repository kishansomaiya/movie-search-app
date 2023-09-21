import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
