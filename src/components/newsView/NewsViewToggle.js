import React from 'react';
import PropTypes from 'prop-types';

export default function NewsViewToggle({ handleTrendingView, handleMyNewsView }) {
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
