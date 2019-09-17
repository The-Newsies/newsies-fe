import React from 'react';
import Header from '../components/header/Header';
import NewsContainer from '../containers/NewsContainer';
import PropTypes from 'prop-types';

export default function Landing({ location }) {
  return (
    <>
      <Header location={location}/>
      <NewsContainer />
    </>
  );
}

Landing.propTypes = {
  location: PropTypes.object.isRequired
};
