import React from 'react';
import Header from '../components/header/Header';
import PropTypes from 'prop-types';
import TrendingContainer from '../containers/TrendingContainer';
import PageTitle from '../components/pageTitle/PageTitle';


export default function Trending({ location }) {
  return (
    <>
      <Header location={location}/>
      <PageTitle title='Headlines' />
      <TrendingContainer />
    </>
  );
}

Trending.propTypes = {
  location: PropTypes.object.isRequired
};
