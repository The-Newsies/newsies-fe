import React from 'react';
import Header from '../components/header/Header';
import PropTypes from 'prop-types';
import TrendingContainer from '../containers/TrendingContainer';


export default function Trending({ location }) {
  return (
    <>
      <Header location={location}/>
      <TrendingContainer />
    </>
  );
}

Trending.propTypes = {
  location: PropTypes.object.isRequired
};
