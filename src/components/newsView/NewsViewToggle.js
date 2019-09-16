import React from 'react';
import PropTypes from 'prop-types';

export default function NewsViewToggle({ handleTrendingView, handleMyNewsView }) {
  //these two <a>'s will be Router Links and the functions are to handle 
  //when they are selected for styling purposes
  return (
    <span>
      <a onClick={handleTrendingView}>Trending</a>
      <a onClick={handleMyNewsView}>My News</a>
    </span>
  );
}

NewsViewToggle.propTypes = {
  handleTrendingView: PropTypes.func.isRequired,
  handleMyNewsView: PropTypes.func.isRequired
};
