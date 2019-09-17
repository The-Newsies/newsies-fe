import React from 'react';
import Header from '../components/header/Header';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchContainer from '../containers/SearchContainer';
import PropTypes from 'prop-types';

export default function Search({ location }) {
  return (
    <>
    <Header location={location}/>
    <SearchBarContainer />
    <SearchContainer />
    </>
  );
}

Search.propTypes = {
  location: PropTypes.object.isRequired
};
