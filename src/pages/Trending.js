import React from 'react';
import Header from '../components/header/Header';
import NewsContainer from '../containers/NewsContainer';
import PropTypes from 'prop-types';
import TagsContainer from '../containers/TagsContainer';


export default function Trending({ location }) {
  return (
    <>
      <Header location={location}/>
      <TagsContainer />
      <NewsContainer />
    </>
  );
}

Trending.propTypes = {
  location: PropTypes.object.isRequired
};
