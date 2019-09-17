import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export default function SearchBar({ text, handleOnChange }) {
  return (
    <div>
      <input type="text" placeholder="  search" value={text} onChange={handleOnChange}></input>
    </div>
  );
}

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
