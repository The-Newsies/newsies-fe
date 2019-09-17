import React from 'react';
import Header from '../components/header/Header';
import PropTypes from 'prop-types';

export default function MyNews({ location }) {
  return (
    <>
      <Header location={location}/>
    </>
  );
}

MyNews.propTypes = {
  location: PropTypes.object.isRequired
};
