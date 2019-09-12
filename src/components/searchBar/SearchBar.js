import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ text, handleOnChange, handleMyNewsView, handleTrendingView }) {
  return (
    <div>
      <input type="text" placeholder="search" value={text} onChange={handleOnChange}></input>
      <span>
        <a onClick={handleTrendingView}>Trending</a>
        <a onClick={handleMyNewsView}>My News</a>
      </span>
    </div>
  );
}

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleTrendingView: PropTypes.func.isRequired,
  handleMyNewsView: PropTypes.func.isRequired
};
