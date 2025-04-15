import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchFilter } from '../redux/actions';

const SearchAndFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search profiles..."
        onChange={(e) => dispatch(setSearchFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchAndFilter;