import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NewsViewToggle({ handleTrendingView, handleMyNewsView }) {
  //the functions are to handle when they are selected for styling purposes
  return (
    <span>
      <Link to='/' onClick={handleTrendingView} >Trending</Link>
      <Link to='/myNews' onClick={handleMyNewsView}>My News</Link>
    </span>
  );
}

NewsViewToggle.propTypes = {
  handleTrendingView: PropTypes.func.isRequired,
  handleMyNewsView: PropTypes.func.isRequired
};
